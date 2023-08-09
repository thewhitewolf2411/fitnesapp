import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: Colors.primaryWarningBg,
        padding: 16,
        borderRadius: 8,
        marginVertical: 16,
        borderWidth: 2,
        borderColor: '#f5c6cb'
    },
    errorText: {
        color: Colors.primaryWarningText
    }
});