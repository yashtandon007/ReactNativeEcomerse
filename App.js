import {createStackNavigator} from "react-navigation-stack";
import Home from "./screens/Home"
import {createAppContainer} from "react-navigation";

const navigator = createStackNavigator({
    Home: Home
}, {
    initialRouteName: 'Home', defaultNavigationOptions: {
        title: "Rotolo"
    }
});
export default createAppContainer(navigator);

