import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';
import Res from '../../Res';

export const styles = StyleSheet.create({
    titleContainer: {
        
    },
    title: {
        fontSize: 48,
        color: Res.Colors.primaryBlack,
        fontWeight: '600'
    },
    subtitle: {
        marginTop: 16,
        fontSize: 14,
        color: Res.Colors.inputBorderColor
    }
});