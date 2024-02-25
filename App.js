import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import IndexScreen from "./screens/IndexScreen";
import {BlogProvider} from "./context/BlogContext";
import Home from "./screens/Home";

const navigator = createStackNavigator({
    IndexScreen: IndexScreen
}, {
    initialRouteName: 'IndexScreen', defaultNavigationOptions: {
        title: "Rotolo"
    }
});
const App = createAppContainer(navigator);
export default () => {
    return <BlogProvider>
        <App/>
    </BlogProvider>
}
