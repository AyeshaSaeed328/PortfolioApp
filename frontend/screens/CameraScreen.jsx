import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const device = useCameraDevice('back'); // Use the back camera
  const camera = useRef(null); // Correctly initialize the ref

  // Check and request camera permissions
  const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    if (status === 'granted') {
      setCameraPermission(true);
    } else if (status === 'notDetermined') {
      const permission = await Camera.requestCameraPermission();
      setCameraPermission(permission === 'authorized');
    } else {
      setCameraPermission(false);
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  if (cameraPermission === null) {
    return <Text>Checking camera permission...</Text>;
  } else if (!cameraPermission) {
    return <Text>Camera permission not granted</Text>;
  }

  if (!device) {
    return <Text>No camera device available</Text>;
  }

  const takePhoto = async () => {
    try {
      if (!camera.current) {
        console.error('Camera reference not available');
        return;
      }

      const photo = await camera.current.takePhoto(); // Capture photo
      if (photo) {
        setCapturedPhoto(`file://${photo.path}`); // Set the captured photo
        setShowPreview(true); // Show the preview screen
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  const confirmPhoto = () => {
    console.log('Photo confirmed:', capturedPhoto);
    setShowPreview(false); // Exit preview mode
  };

  const retakePhoto = () => {
    setCapturedPhoto(null); // Clear the captured photo
    setShowPreview(false); // Return to camera view
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Camera Component */}
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={!showPreview} // Deactivate camera when previewing photo
        ref={camera} // Pass useRef to Camera
        photo={true} // Enable photo capturing
      />
      {/* Preview and Controls */}
      {showPreview && capturedPhoto ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: capturedPhoto }}
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
            <Button title="Retake" onPress={retakePhoto} />
            <Button title="Confirm" onPress={confirmPhoto} />
          </View>
        </View>
      ) : (
        <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
          <Button title="Take Photo" onPress={takePhoto} />
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
