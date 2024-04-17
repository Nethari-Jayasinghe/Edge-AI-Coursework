import datetime
import requests
import json
import pyshorteners

class YourClassName:

    def send_sms(self, recipient_phone_no, device_id, device_name, location, number_of_elephants):
        # Open the JSON file containing API credentials
        with open('assets/credentials/api-credentials.json', 'r') as file:
            contents = file.read()

        # Parse the JSON contents into a dictionary
        credentials = json.loads(contents)

        # Access the values of the 'google_smtp_server' key
        key = credentials['sms_gateway_server']['key']
        secret = credentials['sms_gateway_server']['secret']

        now = datetime.datetime.now()
        current_date = now.strftime("%Y-%m-%d")
        current_time = now.strftime("%H:%M:%S")

        location_link = f"https://www.google.com/maps?q={location['latitude']},{location['longitude']}"
        shortener = pyshorteners.Shortener()
        location_link_short = shortener.tinyurl.short(location_link)
        message = f"URGENT: Elephant conflict detected on {current_date} at {current_time}. Device ID: {device_id}, Device Name: {device_name}, Number of elephants: {number_of_elephants}"

        gateway_url = f"https://app.notify.lk/api/v1/send?user_id={key}&api_key={secret}&sender_id=NotifyDEMO&to={recipient_phone_no}&message={message}"

        response = requests.get(gateway_url)

        # Check the status code
        if response.status_code == 200:
            print("SMS sent successfully!")
        else:
            print(f"Error: SMS failed failed to send; Reason: {response.status_code} {response.content}")

# Usage
# Instantiate the class and call the method with appropriate arguments
your_class_instance = YourClassName()
your_class_instance.send_sms('recipient_phone_number', 'device_id', 'device_name', {'latitude': 0.0, 'longitude': 0.0}, 'number_of_elephants')