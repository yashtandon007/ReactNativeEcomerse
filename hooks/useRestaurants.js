import yelpApi from "../api/yelp";
import {useEffect, useState} from "react";

const useRestaurants = () => {

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
    return [results, errorMessage, searchApi]
}

export default useRestaurants
