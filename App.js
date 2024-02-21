import {createStackNavigator} from "react-navigation-stack";
import Home from "./screens/Home"
import {createAppContainer} from "react-navigation";
import RestaurantDetails from "./screens/RestaurantDetails";

const navigator = createStackNavigator({
    Home: Home,
    RestaurantDetails: RestaurantDetails
}, {
    initialRouteName: 'Home', defaultNavigationOptions: {
        title: "Rotolo"
    }
});
export default createAppContainer(navigator);

