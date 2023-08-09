import { View, Text } from 'react-native';
import { styles } from './ErrorMessageStyles';

interface ErrorMessageProps{
    message: string,
}

const ErrorMessage = (props:ErrorMessageProps) => {
    const { message } = props;
    return(
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{message}</Text>
        </View>
    )
}

export default ErrorMessage;