import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { Camera, Permissions } from 'expo';

import { LABEL_STYLE } from '../../styles/form';

const DocumentUploadOption = ({label, onClick, image}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.gridOption}>
        {(() => {
          if (image) {
            return (
              <Image
                style={{height: '70%', width: '90%'}}
                source={{'uri': image.uri}}
              />
            );
          } else {
            return (
              <View>
                <View style={styles.add}>
                  <Text style={styles.addText}>+</Text>          
                </View>
              </View>
            );
          }
        })()}
        <Text style={LABEL_STYLE}>{label}</Text>        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  add: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ebb257',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
    color: '#ebb257',
    fontSize: 20
  },
  gridOption: {
    backgroundColor: '#fff',
    height: 120,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8
  }
});

export default DocumentUploadOption;