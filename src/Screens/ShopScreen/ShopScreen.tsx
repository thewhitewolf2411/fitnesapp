import Title from "../../Components/Title";
import { styles } from "./ShopScreenStyles";
import ChatComponent from "../../Components/ChatComponent";
import ShopComponent from "../../Components/ShopComponent";
import { Images } from "../../Assets";
import { ScrollView, SafeAreaView } from "react-native";

const ShopScreen = () => {
    const dummyP = "Lorem ipsum dolor sit amet consectetur. Diam ut a eget nisl. Cras mi mauris ac amet cursus eget elit malesuada augue. Nullam sit nisl nisl mauris aliquet odio non. Porttitor amet pharetra quisque habitant. Interdum imperdiet aliquet metus viverra amet enim aenean. Sit nisi aliquam orci mauris urna gravida.";
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Title title="Shop" subtitle="Lorem, ipsum dolor sit amet consectetur"/>
                <ShopComponent image={Images.shopImage} title="ShopItem" pargraph={dummyP} buttonText="Buy Now!"/>
                <ShopComponent image={Images.shopImage} title="ShopItem" pargraph={dummyP} buttonText="Buy Now!"/>
                <ShopComponent image={Images.shopImage} title="ShopItem" pargraph={dummyP} buttonText="Buy Now!"/>
                <ShopComponent image={Images.shopImage} title="ShopItem" pargraph={dummyP} buttonText="Buy Now!"/>
            </ScrollView>
            <ChatComponent />
        </SafeAreaView>
    )
}

export default ShopScreen;