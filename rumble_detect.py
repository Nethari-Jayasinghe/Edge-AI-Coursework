import numpy as np
import tflite_runtime.interpreter as tflite
import cv2
import datetime

def create_category_index(label_path='/home/pi/tflite_venv/labelmap.txt'):
    f = open(label_path)
    category_index = {}
    for i, val in enumerate(f):
        if i != 0:
            val = val[:-1]
            if val != '???':
                category_index.update({(i-1): {'id': (i-1), 'name': val}})
    f.close()
    return category_index

def get_output_dict(image, interpreter, output_details, nms=True, iou_thresh=0.5, score_thresh=0.6):
    output_dict = {
        'detection_boxes': interpreter.get_tensor(output_details[0]['index'])[0],
        'detection_classes': interpreter.get_tensor(output_details[1]['index'])[0],
        'detection_scores': interpreter.get_tensor(output_details[2]['index'])[0],
        'num_detections': interpreter.get_tensor(output_details[3]['index'])[0]
    }

    if nms:
        output_dict = apply_nms(output_dict, iou_thresh, score_thresh)

    return output_dict

def apply_nms(output_dict, iou_thresh=0.5, score_thresh=0.6):
    x1 = output_dict['detection_boxes'][:, 0]
    y1 = output_dict['detection_boxes'][:, 1]
    x2 = output_dict['detection_boxes'][:, 2]
    y2 = output_dict['detection_boxes'][:, 3]

    areas = (x2 - x1 + 1) * (y2 - y1 + 1)
    order = output_dict['detection_scores'].argsort()[::-1]

    keep = []
    for i in range(len(order)):
        idx = order[i]
        if i == 0:
            keep.append(idx)
            continue

        overlap = np.maximum(0, np.minimum(x2[idx], x2[keep]) - np.maximum(x1[idx], x1[keep]) + 1) * \
                  np.maximum(0, np.minimum(y2[idx], y2[keep]) - np.maximum(y1[idx], y1[keep]) + 1)
        iou = overlap / (areas[idx] + areas[keep] - overlap)
        if iou.max() <= iou_thresh:
            keep.append(idx)

    output_dict['detection_boxes'] = output_dict['detection_boxes'][keep]
    output_dict['detection_classes'] = output_dict['detection_classes'][keep]
    output_dict['detection_scores'] = output_dict['detection_scores'][keep]

    return output_dict

def main():
    # Load TFLite model and allocate tensors
    interpreter = tflite.Interpreter(model_path="/home/pi/tflite_venv/detect_2.tflite")
    interpreter.allocate_tensors()

    # Get input and output tensors
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    # Define category index (assuming labelmap.txt remains the same)
    category_index = create_category_index()
    input_shape = input_details[0]['shape']

    # Define confidence score threshold and non-max suppression (NMS) parameters
    score_thresh = 0.6
    iou_thresh = 0.5

    # Start video capture
    cap = cv2.VideoCapture(0)  # Change to 0 for webcam or path to your video file

    while True:
        ret, img = cap.read()

        if ret:
            # Preprocess image for model input
            img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            img_rgb = cv2.resize(img_rgb, (input_shape[1], input_shape[2]), cv2.INTER_AREA)
            img_rgb = img_rgb.reshape([1, input_shape[1], input_shape[2], 3])

            # Set tensor and run inference
            interpreter.set_tensor(input_details[0]['index'], img_rgb)
            interpreter.invoke()

            # Get output dictionary with bounding boxes, classes, and scores
            output_dict = get_output_dict(img_rgb, interpreter, output_details, nms=True,
                                           iou_thresh=iou_thresh, score_thresh=score_thresh)

            # Reshape 'detection_boxes' array
            output_dict['detection_boxes'] = output_dict['detection_boxes'].reshape(-1, 4)

            # Loop through detections
            for i in range(output_dict['detection_boxes'].shape[0]):
                if output_dict['detection_scores'][i] > score_thresh:
                    box = output_dict['detection_boxes'][i].tolist()
                    class_name = category_index[output_dict['detection_classes'][i]]['name']

                    # Check if detected class is elephant
                    if class_name == "elephant":
                        ymin, xmin, ymax, xmax = box
                        ymin = int(ymin * img.shape[0])
                        xmin = int(xmin * img.shape[1])
                        ymax = int(ymax * img.shape[0])
                        xmax = int(xmax * img.shape[1])

                        # Draw bounding box
                        cv2.rectangle(img, (xmin, ymin), (xmax, ymax), (0, 0, 255), 2)

                        # Capture image with bounding box when elephant detected
                        now = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
                        image_name = f"elephant_detection_{now}.jpg"
                        cv2.imwrite(image_name, img)
                        
                        # Display message
                        print("Elephant detected. Image saved:", image_name)
                        
                        # End program
                        return

            # Display camera feed with detections
            cv2.imshow('Elephant Detection', img)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    # Release resources
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
