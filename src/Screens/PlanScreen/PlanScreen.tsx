import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../Components/Title";
import { styles } from "./PlanScreenStyles";
import ChatComponent from "../../Components/ChatComponent";
import Subtitle from "../../Components/Subtitle";
import { ScrollView } from "react-native";
import ShopComponent from "../../Components/ShopComponent";

const PlanScreen = () => {
    const dummyP = "Lorem ipsum dolor sit amet consectetur. Diam ut a eget nisl. Cras mi mauris ac amet cursus eget elit malesuada augue. Nullam sit nisl nisl mauris aliquet odio non. Porttitor amet pharetra quisque habitant. Interdum imperdiet aliquet metus viverra amet enim aenean. Sit nisi aliquam orci mauris urna gravida.";
    return(
        <SafeAreaView style={styles.container}>
            <Title title="Plan" subtitle="Lorem, ipsum dolor sit amet consectetur"/>
            <Subtitle subtitle="My Plan" paragraph1="3 exercises per week" paragraph2="$ 9.99"/>
            <ScrollView>
            <ShopComponent title="ShopItem" pargraph={dummyP} buttonText="$ 9.99"/>
            <ShopComponent title="ShopItem" pargraph={dummyP} buttonText="$ 14.99"/>
            <ShopComponent title="ShopItem" pargraph={dummyP} buttonText="$ 19.99"/>
            </ScrollView>
            <ChatComponent />
        </SafeAreaView>
    )
}

export default PlanScreen;
