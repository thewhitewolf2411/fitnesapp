import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    buttonContainer: {
      width: 60,
      height: 60,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,

      alignItems: 'center',
      justifyContent: 'center',
      
      backgroundColor: Colors.primaryBlack
    },
    image: {
      width: 30,
      height: 30
    }
});