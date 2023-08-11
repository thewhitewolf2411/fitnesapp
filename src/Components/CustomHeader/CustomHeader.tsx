import { Image, View, Text } from "react-native";
import { Images } from "../../Assets";
import { styles } from "./CustomHeaderStyle";

const CustomHeader = () => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.profileDataContainer}>
                <Image style={styles.profileImage} source={Images.profile} />
                <View style={styles.profileData}>
                    <Text style={styles.textSmall}>Hello John!</Text>
                    <Text style={styles.textMedium}>Sat, 19 Jul</Text>
                </View>
            </View>
            <View style={styles.calendarContainer}>
                <Image style={styles.calendarImage} source={Images.calendar} />
            </View>
        </View>
    )
}

export default CustomHeader;