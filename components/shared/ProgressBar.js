import React from 'react';
import { View, Text } from 'react-native';

const ProgressBar = ({percentageCompletion}) => {
  return (
    <View 
      style={{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 10,
        left: 20,
        right: 20,
        width: '100%',
        top: 30
      }}
    >
      <View 
        style={{
          flex: (percentageCompletion / 100),
          backgroundColor: '#f67832',
          height: 10,
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
          borderBottomRightRadius: percentageCompletion === 100 ? 5 : 0,
          borderTopRightRadius: percentageCompletion === 100 ? 5 : 0,
        }}
      />
      <View
        style={{
          flex: (1 - percentageCompletion / 100),
          backgroundColor: '#fff',
          height: 10,
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5
        }}
      />
    </View>
  );
}

export default ProgressBar;