import pyrebase

firebaseConfig = {
    'apiKey': "XXXXX",
    'authDomain': "XXXXX",
    'databaseURL': "XXXXX",
    'projectId': "XXXXX",
    'storageBucket': "XXXXX",
    'messagingSenderId': "XXXXX",
    'appId': "XXXXX",
    'measurementId': "XXXXX"

}

firebase = pyrebase.initialize_app(firebaseConfig)

storage = firebase.storage()
