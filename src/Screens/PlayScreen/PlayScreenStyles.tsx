import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 32,
        height: '100%',
        width: '100%'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
    exerciseImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    youtubeImage: {
        position: 'absolute',
        width: 60,
        height: 60,
        resizeMode: 'contain',
    }
});