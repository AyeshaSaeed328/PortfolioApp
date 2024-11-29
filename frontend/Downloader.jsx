import RNFetchBlob from 'rn-fetch-blob';

/// Grant permission in Android
import {PermissionsAndroid, Alert, Linking, Platform} from 'react-native';

export const getDownloadPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'File Download Permission',
        message: 'Your permission is required to save files to your device.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    console.log('Permission Result:', granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true; // Permission granted
    } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
      // User denied the permission but can be asked again
      Alert.alert(
        'Permission Denied',
        'Storage permission is needed to download files.',
        [{text: 'OK'}],
      );
      return false;
    } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      // User denied the permission and selected "Don't ask again"
      Alert.alert(
        'Permission Required',
        'You have permanently denied the storage permission. Please enable it manually in the app settings.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => {
              // Open app settings
              Linking.openSettings();
            },
          },
        ],
      );
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};



export const downloadFile = async url => {
  const {config, fs} = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;

  const filename = url.split('/').pop();
  const imagePath = `${cacheDir}/${filename}`;

  try {
    const hasPermission = await getDownloadPermissionAndroid();
    if (!hasPermission) {
      return; // Stop execution if permission is not granted
    }

    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: imagePath,
        appendExt: filename.split('.').pop(),
      },
      android: {
        fileCache: true,
        path: imagePath,
        appendExt: filename.split('.').pop(),
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: imagePath,
          description: 'File',
        },
      },
    });

    const response = await RNFetchBlob.config(configOptions).fetch('GET', url);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
