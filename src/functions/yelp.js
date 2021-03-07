import request from "./request";

const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

/* 
    API Documentation for endpoint
    https://www.yelp.com/developers/documentation/v3/business_search
*/
const yelpReq = (term, callback) => {
    const location = "Hoboken, NJ 07030";
    const categories = "food";
    const limit = 50;
    request(
        `${url}?location=${location}&categories=${categories}&limit=${limit}`,
        'GET',
        response => callback(response.businesses),
        null,
        []
    );
}

export default yelpReq;