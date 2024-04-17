INFORMATICS INSTITUTE OF TECHNOLOGY
In Collaboration with
ROBERT GORDON UNIVERSITY ABERDEEN
BSc. (Hons) ARTIFICIAL INTELLIGENCE & DATA SCIENCE 
EDGE AI | CM 3603 

RUMBLE - A Smart Elephant Detection for Home and Crop Surveillance and Security

Edge AI Coursework Report Document by Group 9                

Module Leader - Mr. Nuwan Jayawardene

Submitted partially fulfilling the requirements for the BSc (Hons) in Artificial Intelligence and Data Science degree at Robert Gordon University. March 2024 
Declaration - We confirm that our group worked collaboratively to create this project report and its contents. It has never been presented for an academic purpose before.

Full name : Nethari Jayasinghe | IIT student no:20210931 | RGU student no:2118527   

Full name :S.W.P.D Illangarathne | IIT student no:20210435 | RGU student no:2117529

Full name : Vishmi Herath | IIT student no:20210503 | RGU student no:2117528      

Full name : Duweeja de Lima | IIT student no:20210522 | RGU student no:2117517

Full name : Sinali | IIT student no:20200933 | RGU student no:2118951


**Abstract**

The project aims to develop an application named "Rumble" to address the issue of human-elephant conflicts in rural areas of Sri Lanka. Using Raspberry Pi devices equipped with a camera and vibration sensor, the application detects elephants near homes and crops. The user interface includes login functionality and a dashboard displaying real-time data such as date, time, number of elephants detected, and corresponding photos. Future enhancements are outlined in the "coming soon" section, indicating ongoing development efforts to improve the model, user interface, and sensor integration. The core functionality of Rumble involves the detection of elephants through sensor data, which is processed by a machine learning model. The results are then transmitted to a cloud platform for storage and retrieval. Additionally, the cloud platform manages user login information for security purposes. The project aims to provide an effective solution for mitigating human-elephant conflicts by enabling proactive detection for users in vulnerable areas.

**Key Words**

Rumble, Application, Human-elephant conflicts, Sri Lanka, Raspberry Pi, Camera, Vibration sensor, User interface, Dashboard, Real-time data, Machine learning,  Cloud platform, Sensor integration,Detection, Proactive, Mitigation, Rural areas, Security

**Acknowledgment**

The journey of our project's success was illuminated by the combination of determination, enthusiasm and collaborative spirit that defined our team. At the lead of our journey stood Mr. Nuwan Jayawardene as our Module leader, whose unwavering provision and guidance of core resources were very instrumental in guiding us towards achievement. We express our deepest gratitude to him for his great support. In addition, we owe a debt of gratitude to our parents, colleagues and friends, whose unwavering guidance and encouragement as well as the belief in our abilities pushed us forward through every obstacle. Their presence served as a constant source of motivation and reassurance, reminding us of the significance of our endeavor. Furthermore, we appreciate all the unnamed individuals who, though not in the spotlight, contributed tirelessly to the realization of our project. Whether through offering advice, giving us a helping hand, or providing us with critical feedback, their contributions were very valuable in shaping the output of our efforts. As we reflect on our journey, we are humbled by the collective support as well as the collaborations that support our success. It is with sincere appreciation and gratitude that we acknowledge the role of each individual who played a part, no matter how small, in bringing our vision to life.

**CHAPTER 1: INTRODUCTION**

**1.1 Problem Background**

Sri Lanka's captivating landscape and rich wildlife have long attracted global attention (Gunawansa et al., 2023). The allure of observing majestic elephants in their natural habitat is a highlight for many visitors. However, alongside this charm, human-elephant interactions bring significant risks. These interactions pose challenges in Sri Lanka, leading to conflicts that endanger both humans and elephants (Rathnayake et al., 2022).

Human-elephant conflicts have become a prominent issue in Sri Lanka, affecting various sectors and prompting urgent mitigation calls (Xu, Jiang, & Liu, 2024). These conflicts often result in property damage, crop loss, and unfortunately, loss of human lives (Madarasinghe et al., 2024). Particularly in rural areas where communities live near elephant habitats, these confrontations highlight the delicate balance between human activities and wildlife conservation (Withanage et al., 2023).

Such conflicts threaten human safety, infrastructure, and livelihoods, with elephants causing extensive damage to homes and infrastructure (Köpke et al., 2023). The Department of Wildlife Conservation has reported 375 human fatalities from elephant attacks over the past decade, along with significant crop damage, emphasizing the need for effective mitigation strategies (Gunawansa et al., 2023; Rathnayake et al., 2022).

This paper aims to delve into the complexities of human-elephant conflicts in Sri Lanka, assessing the causes, impacts, and potential solutions to this pressing issue. By integrating insights from diverse research, we aim to contribute to sustainable strategies for mitigating human-elephant conflicts.

**1.2 Problem Statement**

The escalating conflicts between humans and wild elephants in Sri Lanka's rural areas pose significant threats to safety and livelihoods. Proximity between elephant habitats and human settlements has led to substantial property damage and increased risks to human lives.

There's an urgent need for effective mitigation strategies to ensure the safety of both humans and elephants, protect rural communities' social and economic well-being, and promote harmonious coexistence between humans and wildlife.

The complex nature of these conflicts underscores the intricate relationship between human activities and wildlife conservation. Without proactive measures to address the root causes, the cycle of conflicts will persist, undermining conservation efforts and rural livelihoods.

**1.3 Aim of Project**

The project aims to develop an application named Rumble using Raspberry Pi devices equipped with a camera and vibration sensor. This application detects elephant presence near specified areas like homes and crops.

The Rumble app features a user-friendly interface with login functionality and a dashboard displaying detection data, including date, time, and elephant photos. The core functionality involves elephant detection through sensor data processed by a deep learning model, with results sent to a cloud platform for storage and retrieval.

**1.4 Resource Requirements**

For successful deployment of the Rumble application, specific hardware and software resources are needed:

**1.4.1 Hardware Requirements**

- **Raspberry Pi 3**: As the main processing unit.
- **Vibration Sensor**: Detects elephant movements.
- **Web Camera**: Captures images for detection.
- **(7 - 12)V Power Supply**: Ensures adequate power.
- **WiFi Dongle or Ethernet Connection**: Provides internet connectivity.

**1.4.2 Software Requirements**

- **Operating System**: Raspberry Pi OS.
- **Backend**: Flask for server-side code.
- **Frontend**: JavaScript (React or Angular), HTML/CSS.
- **AI Model**: TensorFlow Lite for deep learning models.
- **Image Processing**: OpenCV for camera integration.
- **Database**: Firebase Realtime Database for storing user data and detection records.
- **Cloud Service**: Firebase Storage for image storage and Firebase Authentication for user sign-up.

**Project Implementation Overview:**

1. **Hardware Setup**: Raspberry Pi was set up along with the required sensors and camera.
2. **Virtual Environment**: Created a virtual environment for Python.
3. **Software Installation**: Installed TensorFlow Lite, OpenCV, NumPy, and Pyrebase.
4. **Model Integration**: Added the TensorFlow Lite model and label map file to the environment folder.
5. **Code Development**: Created Python code to detect elephants, draw bounding boxes around them, and send captured images to Firebase Storage.
6. **Firebase Setup**: Created a Firebase account, opened a project, and utilized Firebase Realtime Database, Storage, and Authentication.
7. **Application Development**: Developed the Rumble application with user login functionality, displaying images, date, and time on the history page.

**Functional Requirements**

The functional requirements of the Rumble solution have been categorized and prioritized into different levels based on their importance, as shown in the table below.

**Table 10: Priority Level**

| Priority Level | Description                                |
|----------------|--------------------------------------------|
| Critical       | The system's main features and functionalities |
| Desirable      | Not mandatory but considered necessary     |
| Luxury         | Out-of-scope requirements                  |

**Table 11: Functional Requirements**

| Requirement     | Description                                                                                     | Priority Level |
|-----------------|-------------------------------------------------------------------------------------------------|----------------|
| FR01            | Detect the presence of elephants using camera and vibration sensors.                           | Critical       |
| FR02            | Capture images upon elephant detection.                                                         | Critical       |
| FR03            | Process sensor data with a deep learning model.                                                 | Critical       |
| FR04            | Provide real-time alerts to users.                                                               | Desirable      |
| FR05            | Maintain a user login system for access to the application.                                     | Critical       |
| FR06            | Display real-time data on the user dashboard.                                                    | Desirable      |
| FR07            | Store detection data in a cloud database.                                                        | Critical       |
| FR08            | Manage the cloud platform's user accounts.                                                       | Critical       |
| FR09            | Optimize the system for low power consumption.                                                   | Desirable      |
| FR10            | Develop a user-friendly interface for the dashboard.                                             | Desirable      |
| FR11            | Include a 'coming soon' section for future enhancements.                                         | Luxury         |
| FR12            | Scale the system for multiple locations.                                                         | Luxury         |

**CHAPTER 3: SYSTEM ARCHITECTURE & DESIGN**

**3.1 System Architecture Design**

The architecture of the Rumble system is designed to incorporate the following tiers:

**1) Logic Tier:** 
   - **Deep Learning Model:** Responsible for assessing data from sensors to detect elephants.

**2) Data Tier:** 
   - **Cloud Server (Firebase):** Utilized for storing sensor data, application data, and user details securely.

**3) Presentation Tier:** 
   - **User Interface (UI):** The frontend of the Rumble application.

   **Pages Included:**
   - **Login/Register Page:** Allows users to access the application or create a new account.
   - **Sensor Readings Page:** Displays the data captured by the sensors in real-time.
   - **Settings Page:** Enables users to modify account settings, such as changing passwords.
   - **About Application Page:** Provides an overview and information about the Rumble application.

The Logic Tier employs a deep learning model to process sensor data and detect elephants. The Data Tier utilizes Firebase to store sensor readings, application data, and manage user accounts securely. The Presentation Tier features a user-friendly UI with various pages, including login/register, sensor readings, settings, and about the application.

The design ensures a seamless integration of functionalities, offering users an intuitive experience while efficiently detecting and managing elephant presence to mitigate human-elephant conflicts.
