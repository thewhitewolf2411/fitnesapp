import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 16,
      height: 50,
      border: '1px solid transparent',
      backgroundColor: Colors.primaryButton,
      width: 300,
      borderRadius: 12,
      paddingLeft: 20,
      paddingRight: 20, 
      justifyContent: 'center'
    },
    textTitle: {
      fontWeight: '300',
      fontSize: 14,
      color: Colors.secondaryWhite,
      textAlign: 'center'
    }
});