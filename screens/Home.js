import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const Home = () => {

    const [searchText, setSearchText] = useState("")
    const [results, errorMessage, searchApi] = useRestaurants()
    const filterResultsByPrice = (price) => {
        return results.filter((item) => item.price === price)
    }
    return <>
        <SearchBar
            text={searchText}
            onSearchTextChange={newText => setSearchText(newText)}
            onSearchTextEndEditing={() => searchApi(searchText)}
        />
        <ScrollView>
            {errorMessage && <Text>{errorMessage}</Text>}
            <RestaurantList header="Cost Effective" results={filterResultsByPrice('$')}/>
            <RestaurantList header="Bit Pricier" results={filterResultsByPrice('$$')}/>
            <RestaurantList header="Big Spender" results={filterResultsByPrice('$$$')}/>
            <RestaurantList header="Most Expensive" results={filterResultsByPrice('$$$$')}/>
        </ScrollView>
    </>
}
export default Home