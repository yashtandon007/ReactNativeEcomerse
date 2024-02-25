import {ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useContext} from "react";
import {Context as BlogContext} from "../context/BlogContext";


const IndexScreen = () => {

    const {state,addBlogPost} = useContext(BlogContext)

    return <>
        <View>
            <FlatList
                keyExtractor={item => item.title}
                data={state}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={addBlogPost}>
                        <Text style={{
                            backgroundColor:"white",
                            height:100,
                            marginVertical:10,
                            marginHorizontal:16,
                        }}> {item.title}</Text>
                    </TouchableOpacity>
                }}/>
        </View>
    </>
}
export default IndexScreen