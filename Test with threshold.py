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

    confidence_threshold = 0.5  # Set this to a value that suits your model
    scores = np.squeeze(predictions)  # Assuming the output is a 1D array of scores
    max_score_index = np.argmax(scores)
    max_score = scores[max_score_index]
    if max_score > confidence_threshold and labels[max_score_index] == "elephant":
        # Elephant detected with high confidence
        print("Elephant detected! Capturing image...")
        cv2.imwrite("elephant_detected.jpg", frame)
        break


# Release capture and close windows
cap.release()
cv2.destroyAllWindows()