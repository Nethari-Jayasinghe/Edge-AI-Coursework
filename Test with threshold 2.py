import cv2
import tflite_runtime.interpreter as tflite
import numpy as np

# Load the TFLite model
interpreter = tflite.Interpreter(model_path="/home/pi/tflite_venv/detect_2.tflite")
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Open the camera
cap = cv2.VideoCapture(0)  # Use 0 for the default camera

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    if not ret:
        print("Error: Could not capture frame.")
        break

    # Preprocess frame for model input (adjust based on model requirements)
    frame = cv2.resize(frame, (input_details[0]["shape"][1], input_details[0]["shape"][2]))
    frame_normalized = frame.astype(np.uint8)  # Convert to UINT8
    frame_input = np.expand_dims(frame_normalized, axis=0)
    
    # Display the frame with some optional text overlay
    cv2.putText(frame, "Elephant Detection Running...", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.imshow('Elephant Detector', frame)

    # Handle exiting the program by pressing 'q' key
    if cv2.waitKey(1) == ord('q'):
        break

    # Run inference using TFLite model
    interpreter.set_tensor(input_details[0]["index"], frame_input)
    interpreter.invoke()

    # Get the predictions
    predictions = interpreter.get_tensor(output_details[0]["index"])

    # Ensure the camera capture is correctly initiated
    ret, frame = cap.read()
    if not ret:
        print("Error: Could not capture frame.")
        continue  # Use continue to skip this iteration and try again

    # Preprocess and run inference as before

    # Debugging: Print the raw predictions to understand the model's output
    print("Raw predictions:", predictions)

    # Assuming predictions give you a confidence score directly
    # Confirm this matches the expected output format of your model
    confidence_threshold = 0.5
    class_id = int(np.argmax(predictions))
    confidence_score = np.max(predictions)

    print("Class ID:", class_id, "Confidence Score:", confidence_score)

# Then proceed with the rest of the detection and image-saving logic

    # Check for elephant detection with confidence score above the threshold
    if confidence_score > confidence_threshold and labels[class_id] == "elephant":
        print("Elephant detected with confidence:", confidence_score)
        cv2.imwrite("elephant_detected.jpg", frame)  # Save the current frame as a JPEG image
        break  # Stop the video
    else:
        print("No confident elephant detection.")

# Release capture and close windows
cap.release()
cv2.destroyAllWindows()
