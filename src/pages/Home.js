import {React, useLoaderData, useEffect, useState} from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();
    useEffect(()=> {
        setProducts(data.data);
    }, [data]);
    return (
        <div>
            <Banner />
            <Products products={products} />
        </div>
    );
};

export default Home;