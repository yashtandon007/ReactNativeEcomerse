import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import yelpApi from "../api/yelp";

const Home = () => {

    const [searchText, setSearchText] = useState("")
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        searchApi("pasta")
    }, []);
    const searchApi = async searchText => {
        try {
            const response = await yelpApi.get("/search", {
                params: {
                    limit: 50, term: searchText, location: "san jose"
                }
            })
            setResults(response.data.businesses)
            setErrorMessage(null)
        } catch (err) {
            setErrorMessage("Something went wrong !!!")
        }
    }


    return <View >
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
        margin:16
    }
});
export default Home