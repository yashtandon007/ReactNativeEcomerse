import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import useRestaurants from "../hooks/useRestaurants";

const Home = () => {

    const [searchText, setSearchText] = useState("")
    const [results, errorMessage, searchApi] = useRestaurants()

    return <View>
        <SearchBar
            text={searchText}
            onSearchTextChange={newText => setSearchText(newText)}
            onSearchTextEndEditing={() => searchApi(searchText)}
        />
        <View style={styles.container}>
            <Text>We found {results.length} records</Text>
            {errorMessage && <Text>{errorMessage}</Text>}
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        margin: 16
    }
});
export default Home