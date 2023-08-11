import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    buttonStyles: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    container: {
        backgroundColor: Colors.primaryButton,
        padding: 20,
        borderRadius: 30
    },
    image: {
        width: 20,
        height: 20
    }
});