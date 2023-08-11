import { StyleSheet } from 'react-native';
import { Colors } from '../../Res/Colors';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileDataContainer: {
        flexDirection: 'row'
    },
    profileImage: {
        width: 40,
        height: 40
    },
    profileData: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    calendarContainer: {

    },
    calendarImage: {
        width: 30,
        height: 30
    },
    textSmall: {
        fontSize: 14
    },
    textMedium: {
        fontSize: 16
    }
});