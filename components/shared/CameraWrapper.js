import React from 'react';
import { Camera, Permissions } from 'expo';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

class CameraWrapper extends React.Component {
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = () => {
    this.props.toggleCamera();
    if (this.camera) {
      this.camera.takePicture().then((data) => {
        this.props.uploadPicture(data);
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera 
          ref={ref => {
            this.camera = ref;
          }} 
          style={{ flex: 1 }} 
          type="back"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              onPress={this.takePicture}
            >
              <View style={styles.snapOuter}>
                <View style={styles.snapInner}>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  snapOuter: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    flex: 0.085,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 70
  },
  snapInner: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'solid'
  }
});

export default CameraWrapper;