import { View, ActivityIndicator } from 'react-native';
import { styles } from './LoaderStyles';
import { Colors } from '../../Res/Colors';

const Loader = () => {
    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={Colors.primaryWhite} />
        </View>
    )
}

export default Loader;