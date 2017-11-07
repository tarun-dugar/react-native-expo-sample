import React from 'react';
import { 
  TextInput, 
  View, 
  Text,
  StyleSheet
} from 'react-native';

import { LABEL_STYLE } from '../../styles/form';

const InputField = ({label, onChange}) => {
  return (
    <View style={style.inputField}>
      <Text style={LABEL_STYLE}>{label}</Text>
      <TextInput onChangeText={onChange} />      
    </View>
  );
};

const style = StyleSheet.create({
  inputField: {
    marginTop: 20
  }
});

export default InputField;
