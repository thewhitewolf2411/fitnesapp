import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../Components/Title";
import { styles } from "./PlayScreenStyles";
import ChatComponent from "../../Components/ChatComponent";
import { Image, View, TouchableOpacity } from "react-native";
import { Images } from "../../Assets";

const PlayScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Title title="Training" subtitle="Lorem, ipsum dolor sit amet consectetur"/>
            
            <TouchableOpacity style={styles.imageContainer}>
                <Image style={styles.exerciseImage} source={Images.exercise}/>
                <Image style={styles.youtubeImage} source={Images.youtubeicon}/>
            </TouchableOpacity>
            <ChatComponent />
        </SafeAreaView>
    )
}

export default PlayScreen;