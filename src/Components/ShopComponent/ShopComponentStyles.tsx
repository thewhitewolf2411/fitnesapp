import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    shopItemContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.inputBorderColor,
        padding: 12,
        borderRadius: 16,
        marginTop: 16,
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8,
        color: Colors.primaryBlack
    },
    subtitle: {

    },
    paragraph: {

    }
});