import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";


const RestaurantItem = ({item}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image_url}}/>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>{item.rating} Stars, {item.review_count} Reviews</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    }, name: {

        fontSize: 14,
        fontWeight: "bold"
    }, rating: {
        fontSize: 14
    }
});
export default RestaurantItem