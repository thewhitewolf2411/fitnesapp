import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';
import Res from '../../Res';

export const styles = StyleSheet.create({
    subtitleContainer: {
        marginTop: 32
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 16,
        color: Res.Colors.primaryBlack
    },
    text: {
        marginTop: 8,
        fontSize: 14
    }
});