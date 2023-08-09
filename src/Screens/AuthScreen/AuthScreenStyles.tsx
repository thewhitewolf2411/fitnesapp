import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Res/Colors';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

        width: width,

        padding: 20
    },
    authTitle:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        width: 300,
        color: Colors.primaryBlack,
        marginBottom: 64
    },
    authSubTitle: {
        fontSize: 18,
        fontWeight: '600',
        width: 300,
        color: Colors.primaryBlack,
        marginBottom: 32
    },
    forgotPasswordContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 16
    },
    forgotPasswordSingleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: 14,
        color: Colors.primaryBlack,
    },
    authTextContainer: {
        display: 'flex',
        marginTop: 16
    },
    authTextSingleRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
        color: Colors.primaryBlack,
    },
    textLink: {
        fontSize: 12,
        color: Colors.primaryButton,
        marginLeft: 3
    }
});