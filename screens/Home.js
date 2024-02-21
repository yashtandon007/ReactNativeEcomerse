import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import yel from "../api/yelp";

const Home = () => {

    const [searchText, setSearchText] = useState("")
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const searchApi = async () => {
        try {
            const response = await yel.get("/search", {
                params: {
                    limit: 50, term: searchText, location: "san jose"
                }
            })
            setResults(response.data.businesses)
            setErrorMessage(null)
        }catch (err){
            setErrorMessage("Somethinh went wrong !!!")
        }
    }


    return <View style={styles.container}>
        <SearchBar
            text={searchText}
            onSearchTextChange={newText => setSearchText(newText)}
            onSearchTextEndEditing={searchApi}
        />
        <Text>We found {results.length} records</Text>
        {errorMessage && <Text>{errorMessage}</Text>}
    </View>
}
const styles = StyleSheet.create({
    container: {}
});
export default Home