import { SafeAreaView } from "react-native";
import CustomHeader from "../../Components/CustomHeader";
import { styles } from "./HomeScreenStyles";
import ChatComponent from "../../Components/ChatComponent";
import Subtitle from "../../Components/Subtitle";

const HomeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <CustomHeader />
            <Subtitle subtitle="My Plan" paragraph1="July, 2021"/>
            <ChatComponent />
        </SafeAreaView>
    )
}

export default HomeScreen;