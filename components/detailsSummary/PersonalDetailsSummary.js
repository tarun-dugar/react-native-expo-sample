import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import DocumentUploadOption from './DocumentUploadOption';
import { PANEL_STYLE, PANEL_HEADING_STYLE } from '../../styles/panel';
import { h2 } from '../../styles/common';
import { LABEL_STYLE } from '../../styles/form';
import { BUTTON_STYLE, BUTTON_TEXT_STYLE } from '../../styles/button';

class PersonalDetailsSummary extends React.Component {
  submitDetails = () => {
    this.props.submitDetails(() => {
      this.props.history.push('/done');    
    })
  }

  render() {
    return (
      <View>
        <View style={PANEL_STYLE}>
          <Text style={[h2, PANEL_HEADING_STYLE]}>Personal Details</Text>
          <Text style={[LABEL_STYLE, styles.label]}>{this.props.name}</Text>
          <Text style={[LABEL_STYLE, styles.label]}>{this.props.email}</Text>
          <Text style={[LABEL_STYLE, styles.label]}>{this.props.mobile}</Text>
        </View>
        <View>
          <Text style={[h2, styles.uploadDocumentsText]}>Upload Documents</Text>
          <View style={styles.grid}>
            <DocumentUploadOption 
              label="PAN Card" 
              image={this.props.panPicture}
              onClick={this.props.openCamera.bind(this, 'pan')} 
            />
            <DocumentUploadOption 
              label="Aadhar Card" 
              image={this.props.aadharPicture}
              onClick={this.props.openCamera.bind(this, 'aadhar')} 
            />
            <DocumentUploadOption 
              label="Bank Details" 
              image={this.props.bankPicture}
              onClick={this.props.openCamera.bind(this, 'bank')} 
            />
          </View>
          <TouchableHighlight 
            onPress={this.submitDetails}
            style={[BUTTON_STYLE, styles.proceedButton]}
          >
            <Text style={BUTTON_TEXT_STYLE}>PROCEED</Text>            
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5
  },
  proceedButton: {
    backgroundColor: 'transparent',
    marginTop: 30,
    borderColor: '#fff'
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  uploadDocumentsText: {
    color: '#fff',
    marginTop: 30,
    marginBottom: 20,
    fontWeight: '400'
  },
  proceedButtonText: {
    color: '#fff', 
    fontSize: 18,
    textAlign: 'center'
  },
});

export default PersonalDetailsSummary;  