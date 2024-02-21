import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer YL7RtvN0flJrnr9ukshL75t7VHcHWnamGIeimvzwTUbjYN-A-cduMNTiSLjeQDvm5RPqzBgx_KYIrvoDOtR0qstSSJoaJTIBzORTMd3sZ9v3xThHuPnj5CsuirXVZXYx"
    }
})