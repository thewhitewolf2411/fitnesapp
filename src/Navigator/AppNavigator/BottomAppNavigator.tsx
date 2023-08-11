import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import ShopScreen from '../../Screens/ShopScreen';
import PlanScreen from '../../Screens/PlanScreen';
import SettingsScreen from '../../Screens/SettingsScreen';
import PlayScreen from '../../Screens/PlayScreen';
import CustomTabButton from '../../Components/CustomTabButton';
import { Image } from 'react-native';
import { Images } from '../../Assets';

const Tab = createBottomTabNavigator();

const BottomAppNavigator: React.FC  = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { height: 50 },
            tabBarLabelStyle: { marginBottom: 5, marginTop: 0 }
             // Adjust the height as needed
          }}>
          <Tab.Screen options={{tabBarIcon: () => (<Image style={{width: 15, height: 15}} source={Images.home} />), headerShown: false}} name="Home" component={HomeScreen} />
          <Tab.Screen options={{tabBarIcon: () => (<Image style={{width: 15, height: 15}} source={Images.cart} />), headerShown: false}} name="Shop" component={ShopScreen} />
          <Tab.Screen name="Play" options={{
            tabBarButton: (props) => (
              <CustomTabButton {...props} />
            ),
            headerShown: false
          }} component={PlayScreen} />
          <Tab.Screen options={{tabBarIcon: () => (<Image style={{width: 15, height: 15}} source={Images.plan} />), headerShown: false}} name="Plan" component={PlanScreen} />
          <Tab.Screen options={{tabBarIcon: () => (<Image style={{width: 15, height: 15}} source={Images.settings} />), headerShown: false}} name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
}

export default BottomAppNavigator;