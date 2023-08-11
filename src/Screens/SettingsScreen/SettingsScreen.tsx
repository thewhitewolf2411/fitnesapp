import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../Components/Title";
import { styles } from "./SettingsScreenStyles";
import ChatComponent from "../../Components/ChatComponent";

const SettingsScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Title title="Settings" subtitle="Lorem, ipsum dolor sit amet consectetur"/>
            <ChatComponent />
        </SafeAreaView>
    )
}

export default SettingsScreen;