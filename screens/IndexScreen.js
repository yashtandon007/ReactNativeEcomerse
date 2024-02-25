import {ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useContext} from "react";
import {BlogContext, BlogProvider} from "../context/BlogContext";
import RestaurantItem from "../components/RestaurantItem";


const IndexScreen = () => {

    const {blogs,addBlogPost} = useContext(BlogContext)

    return <>
        <View>
            <FlatList
                keyExtractor={item => item.title}
                data={blogs}
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