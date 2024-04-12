import numpy as np
import tflite_runtime.interpreter as tflite
import cv2
import time
import datetime

# Function to capture an image
def capture_image(img, frame_count):
    timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    filename = f"elephant_detected_{timestamp}_{frame_count}.jpg"
    cv2.imwrite(filename, img)
    print(f"Elephant image captured: {filename}")

# Load TFLite model and allocate tensors
interpreter = tflite.Interpreter(model_path="/home/pi/tflite_venv/detect_2.tflite")
interpreter.allocate_tensors()

# Get input and output tensors
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Create category index from labelmap.txt
def create_category_index(label_path='/home/pi/tflite_venv/labelmap.txt'):
  """
  Reads a label map file and creates a dictionary mapping class IDs to human-readable labels.

  Args:
      label_path: Path to the label map file.

  Returns:
      A dictionary mapping class IDs to human-readable labels.
  """
  category_index = {}
  with open(label_path, 'r') as f:
    for line in f:
      parts = line.strip().split(':')
      if len(parts) >= 2:
        class_id = int(parts[0])
        class_name = parts[1].strip()
        category_index[class_id] = {'id': class_id, 'name': class_name}
  return category_index

#category_index = create_category_index(label_path='/home/pi/tflite_venv/labelmap.txt')

# Define thresholds for detection
confidence_threshold = 0.6
iou_threshold = 0.5

# Initialize variables
frame_count = 0

# Capture video from camera
cap = cv2.VideoCapture(0)  # Change to 0 for webcam or video file path

while True:
    ret, frame = cap.read()

    if not ret:
        print("Error: Video capture failed")
        break

    # Preprocess frame for inference
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame_rgb = cv2.resize(frame_rgb, (300, 300), interpolation=cv2.INTER_AREA)
    frame_rgb = np.expand_dims(frame_rgb, axis=0)

    # Run inference using the TFLite model
    interpreter.set_tensor(input_details[0]['index'], frame_rgb)
    interpreter.invoke()

    # Get output from the model
    output_dict = get_output_dict(frame_rgb, interpreter, output_details, iou_threshold)

    # Process detections
    elephants_detected = False
    for i in range(output_dict['detection_boxes'].shape[0]):
        if output_dict['detection_scores'][i] > confidence_threshold:
            class_id = output_dict['detection_classes'][i]
            class_name = category_index[class_id]['name']

            if class_name == 'elephant':
                elephants_detected = True
                break

    # Capture image if elephant is detected
    if elephants_detected:
        capture_image(frame.copy(), frame_count)
        frame_count += 1  # Increment frame count for unique filenames

    # Display frame with bounding boxes (optional)
    # vis_util.visualize_boxes_and_labels_on_image_array(
    #     frame, output_dict['detection_boxes'], output_dict['detection_classes'],
    #     output_dict['detection_scores'], category_index, use_normalized_coordinates=True)
    cv2.imshow('Elephant Detection', frame)

    # Exit on X
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
