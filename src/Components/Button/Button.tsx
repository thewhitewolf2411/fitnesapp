import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { styles } from './ButtonStyles';
import Loader from '../Loader';

interface ButtonProps{
    title: string,
    onPress: (event: GestureResponderEvent) => void,
    testID?: string; 
    disabled?: boolean,
} 

const Button = (props: ButtonProps) => {
    const { title, onPress, testID, disabled } = props;

    return(
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={styles.buttonContainer}>
                {disabled ? <Loader /> : <Text style={styles.textTitle}>{title}</Text>}
            </View>
        </TouchableOpacity>
    )

}

export default Button;