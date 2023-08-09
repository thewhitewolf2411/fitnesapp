import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    inputContainer: {

        width: 300,

        display: 'flex',
        alignItems: 'flex-start',

        marginTop: 16,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 14,
      color: Colors.primaryBlack,
      textAlign: 'center',
      marginBottom: 8,
    },
    input: {
        fontWeight: '400', 
        color: Colors.primaryBlack,
        borderWidth: 1,
        borderRadius: 6, 
        borderColor: Colors.inputBorderColor,
        backgroundColor: Colors.primaryWhite,
        width: '100%',
        height: 39,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
});