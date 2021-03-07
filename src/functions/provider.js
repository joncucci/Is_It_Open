import { useState, useEffect, createContext } from "react";
import yelp from "../functions/yelp";
import hardcoded from "./hardcode";

const useData = () => {
    const [business, setBusiness] = useState({
        name: "",
        open: false,
        indoor: false,
        outdoor: false,
        delivery: false,
        rating: 5,
        miles: 0,
        url: "",
        image_url: "",
        capacity: 0,
        price: "",
        location: {
            display_address: ""
        },
        display_phone: ""
    });
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        open: false,
        indoor: false,
        outdoor: false,
        delivery: false,
        distance: 10,
        search: "",
        price: "",
        rating: 0
    });

    useEffect(() => {
        let newData = [];
        const temp = hardcoded;
        // yelp("", temp => {
        newData = newData.concat(temp);
        newData = newData.map(o => ({
            ...o,
            open: !o.is_closed,
            indoor: Math.random() > .5,
            outdoor: Math.random() > .5,
            delivery: Math.random() > .5,
            miles: Math.round(10*o.distance/1609)/10,
            capacity: Math.round(Math.random()*20) + 10
        }))
        setData(newData);
        setFilteredData(newData);
        // });

    }, []);

    useEffect(() => {
        let newData = [];
        if (business.name !== "") {
            newData.push(business);
        }
        newData = newData.concat(data);
        if (filters.search !== "") {
            newData = newData.filter(o => o.name.toLowerCase().includes(filters.search.toLowerCase()));
        } else {
            if (filters.open) {
                newData = newData.filter(o => o.open)
            }
            if (filters.indoor) {
                newData = newData.filter(o => o.indoor)
            }
            if (filters.outdoor) {
                newData = newData.filter(o => o.outdoor)
            }
            if (filters.delivery) {
                newData = newData.filter(o => o.delivery)
            }
            if (filters.price !== "") {
                newData = newData.filter(o => o.price === filters.price)
            }
            if (filters.price !== 0) {
                newData = newData.filter(o => o.rating >= filters.rating)
            }
            newData = newData.filter(o => o.miles <= filters.distance)
        }
        setFilteredData(newData);
    }, [filters, business, data]);

    return {
        data: filteredData,
        filters,
        setFilters,
        business,
        setBusiness
    }
}

const DataContext = createContext("");

export {
    useData,
    DataContext
}