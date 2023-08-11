import { Text, View } from "react-native";
import { styles } from "./TitleStyles";

interface TitleProps{
    title: string,
    subtitle: string
}

const Title = ({title, subtitle}:TitleProps) => {
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default Title;
