import React from 'react';
import { 
  View, 
  Button, 
  StyleSheet, 
  Text,
  TouchableHighlight
} from 'react-native';
import assign from 'object-assign';

import InputField from '../shared/InputField';
import { SECONDARY_COLOR, h2, h1 } from '../../styles/common';
import { BUTTON_STYLE, BUTTON_TEXT_STYLE } from '../../styles/button';
import { PANEL_STYLE, PANEL_HEADING_STYLE } from '../../styles/panel';

class PersonalDetailsForm extends React.Component {
  state = {
    'formData': {}
  }

  onFormFieldValueChange = (fieldName, fieldValue) => {
    this.setState({
      'formData': assign(this.state.formData, {
        [fieldName]: fieldValue 
      })
    });
  }

  submitForm = () => {
    this.props.setPersonalDetails(this.state.formData, () => {
      this.props.history.push('/summary');
    });
  }

  render() {
    return (
      <View>
        <Text style={[h2, styles.white]}>Loan Amount</Text>
        <Text style={[h1, styles.white]}>₹10,50,000</Text>
        <View style={PANEL_STYLE}>
          <Text style={[h2, PANEL_HEADING_STYLE]}>Personal Details</Text>
          <InputField label="Name" onChange={this.onFormFieldValueChange.bind(this, 'name')} />
          <InputField label="Email Id" onChange={this.onFormFieldValueChange.bind(this, 'email')} />
          <InputField label="Mobile" onChange={this.onFormFieldValueChange.bind(this, 'mobile')}/>
          <TouchableHighlight 
            onPress={this.submitForm}
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
  proceedButton: {
    backgroundColor: SECONDARY_COLOR,
    borderColor: SECONDARY_COLOR
  },
  white: {
    color: '#fff'
  }
});

export default PersonalDetailsForm;