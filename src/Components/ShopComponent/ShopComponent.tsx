import { View, Image, ImageProps, Text} from "react-native";
import Button from "../Button";
import { styles } from "./ShopComponentStyles";

interface ShopComponentProps{
    image?: ImageProps | Readonly<ImageProps>,
    title: string, 
    subtitle?: string,
    pargraph: string,
    buttonText: string
}

const ShopComponent = ({image, title, subtitle, pargraph, buttonText} : ShopComponentProps) => {
    return(
        <View style={styles.shopItemContainer}>
            {image && <Image style={styles.image} source={image} />}
            <View>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                <Text style={styles.paragraph}>{pargraph}</Text>
            </View>
            <Button title={buttonText} onPress={() => {}}/>
        </View>
    )
}

export default ShopComponent;
