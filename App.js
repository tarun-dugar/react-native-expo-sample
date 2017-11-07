import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native';
import assign from 'object-assign';

import PersonalDetailsForm from './components/detailsForm/PersonalDetailsForm';
import PersonalDetailsSummary from './components/detailsSummary/PersonalDetailsSummary';
import CameraWrapper from './components/shared/CameraWrapper';
import ProgressBar from './components/shared/ProgressBar';
import Done from './components/done/Done';
import { PRIMARY_COLOR } from './styles/common';

export default class App extends React.Component {
  state = {
    'isCameraOpen': false,
    'uploadedPics': {},
    'percentageCompletion': 33.33
  }

  setPersonalDetails = (personalDetails, callback) => {
    this.setState({
      personalDetails,
      'percentageCompletion': 66.67
    }, callback);
  }

  submitDetails = (callback) => {
    this.setState({
      'percentageCompletion': 100
    }, callback);
  }

  toggleCamera = (cameraTriggerSource) => {
    let newState = {
      'isCameraOpen': !this.state.isCameraOpen
    };
    if (cameraTriggerSource) {
      newState.cameraTriggerSource = cameraTriggerSource;
    }
    this.setState(newState);
  }

  uploadPicture = (pictureData) => {
    this.setState({
      'uploadedPics': assign(this.state.uploadedPics, {
        [this.state.cameraTriggerSource]: pictureData
      })
    });
  }

  render() {
    return (
      <NativeRouter>
        {(() => {
          if (this.state.isCameraOpen) {
            return (
              <CameraWrapper 
                toggleCamera={this.toggleCamera}
                uploadPicture={this.uploadPicture}
              />                    
            );
          } else {
            return (
              <View style={styles.container}>
                <ProgressBar percentageCompletion={this.state.percentageCompletion} />
                <Route 
                  path="/"
                  exact  
                  render={(routeProps) => (
                    <PersonalDetailsForm 
                      {...routeProps} 
                      setPersonalDetails={this.setPersonalDetails}
                    />
                  )}
                />
                <Route 
                  path="/summary"
                  render={(routeProps) => (
                    <PersonalDetailsSummary 
                      {...routeProps}
                      {...this.state.personalDetails}
                      panPicture={this.state.uploadedPics.pan}
                      aadharPicture={this.state.uploadedPics.aadhar}
                      bankPicture={this.state.uploadedPics.bank}
                      openCamera={this.toggleCamera}
                      submitDetails={this.submitDetails}
                    />
                  )}
                />
                <Route 
                  path="/done"
                  component={Done}
                />
              </View>
            );
          }
        })()}
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 70,
    justifyContent: 'flex-start',
    position: 'relative'
  }
});
