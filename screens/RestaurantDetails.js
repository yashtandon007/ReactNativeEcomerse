import {Text} from "react-native";
import {useEffect, useState} from "react";
import yelpApi from "../api/yelp";

const RestaurantDetails = ({navigation}) => {
    const [result, setResult] = useState(null)
    const getDataById = async id => {
        try {
            const response = await yelpApi.get(`/${id}`)
            setResult(response.data)
        } catch (err) {
        }
    }

    useEffect(() => {
        const id = navigation.getParam("id")
        getDataById(id)
    }, []);

    if(!result){
        return  null
    }
    return <>
        <Text>Rdetails {result.name}</Text>
    </>
}
export default RestaurantDetails