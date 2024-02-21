import {StyleSheet, TextInput, View} from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = ({text, onSearchTextChange, onSearchTextEndEditing}) => {

    return (<View style={styles.container}>
        <Feather name="search" style={styles.icon}/>
        <TextInput style={styles.input}
                   placeholder="Search"
                   value={text}
                   autoCorrect={false}
                   autoCapitalize="none"
                   onChangeText={onSearchTextChange}
                   onEndEditing={onSearchTextEndEditing}/>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginHorizontal: 16,
        marginBottom:8,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 6,
        backgroundColor: '#ffffff',
        flexDirection: "row"
    }, icon: {
        fontSize: 16, marginHorizontal: 16
    }, input: {
        flex: 1, fontSize: 18
    },
});

export default SearchBar