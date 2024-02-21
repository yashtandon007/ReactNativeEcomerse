import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import yel from "../api/yelp";

const Home = () => {
    
    // const searchApi = async  () => {
    //     console.log("searchApi >>")
    //   const rsponse = yel.get("/search",{
    //       params:{
    //           limit:50,
    //           location:"san jose"
    //       }
    //   })
    //     console.log("res >>",rsponse)
    // }
    const [searchText, setSearchText] = useState("")
    return <View style={styles.container}>
        <SearchBar
            text={searchText}
            onSearchTextChange={newText => setSearchText(newText)}
            onSearchTextEndEditing={()=>{
     //           searchApi()
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {}
});
export default Home