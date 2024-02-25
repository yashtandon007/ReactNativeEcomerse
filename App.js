import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import IndexScreen from "./screens/IndexScreen";
import {Provider as BlogProvider} from "./context/BlogContext";

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
