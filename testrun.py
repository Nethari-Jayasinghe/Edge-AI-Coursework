import cv2
import tflite_runtime.interpreter as tflite


# Load the TFLite model
interpreter = tflite.Interpreter(model_path="detect_2.tflite")
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Load video (replace with your video path)
cap = cv2.VideoCapture("test-video.mp4")  # Change extension if needed

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Check if frame is captured successfully
    if not ret:
        print("Error: Could not capture frame.")
        break

    # Preprocess frame for model input (adjust based on model requirements)
    frame = cv2.resize(frame, (input_details[0]["shape"][1], input_details[0]["shape"][2]))
    frame_normalized = frame.astype(np.float32) / 255.0
    frame_input = np.expand_dims(frame_normalized, axis=0)

    # Run inference using TFLite model
    interpreter.set_tensor(input_details[0]["index"], frame_input)
    interpreter.invoke()

    # Get the predictions
    predictions = interpreter.get_tensor(output_details[0]["index"])

    # Get the predicted class index
    class_id = int(np.argmax(predictions))

    # Load label map (replace with your label map path)
    with open("labelmap.txt", "r") as f:
        labels = [line.strip() for line in f.readlines()]

    # Print the predicted class (optional for testing)
    # print(f"Predicted class: {labels[class_id]}")

    # Display the frame (optional for visualization)
    cv2.imshow('Elephant Detection', frame)

    # Exit on 'q' key press
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release capture
cap.release()
cv2.destroyAllWindows()
