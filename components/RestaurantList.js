import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import RestaurantItem from "./RestaurantItem";
import {withNavigation} from "react-navigation";

const RestaurantList = ({header, results,navigation}) => {
    if(results.length <1 ){
        return null
    }
    return (<View style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={results}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetails",{
                    id:item.id
                })}>
                    <RestaurantItem item={item} />
                </TouchableOpacity>
            }}/>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    header: {
        marginLeft: 16,
        fontSize: 18,
        marginBottom: 4,
        fontWeight: "bold"
    }
});

export default withNavigation(RestaurantList)