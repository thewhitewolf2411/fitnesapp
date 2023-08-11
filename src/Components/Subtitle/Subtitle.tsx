import { Text, View } from "react-native";
import { styles } from "./SubtitleStyles";

interface SubtitleProps{
    subtitle: string;
    paragraph1: string;
    paragraph2?: string
}

const Subtitle = ({subtitle, paragraph1, paragraph2}:SubtitleProps) => {
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.text}>{paragraph1}</Text>
            <Text style={styles.text}>{paragraph2}</Text>
        </View>
    )
}

export default Subtitle;