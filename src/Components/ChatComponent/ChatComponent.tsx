import { Image, TouchableOpacity, View } from "react-native";
import { Images } from "../../Assets";
import { styles } from "./ChatComponentStyles";

const ChatComponent = () => {
    return(
        <TouchableOpacity style={styles.buttonStyles}>
            <View style={styles.container}>
                <Image style={styles.image} source={Images.chat} />
            </View>
        </TouchableOpacity>
    )
}

export default ChatComponent;