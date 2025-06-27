import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';



function Movie() {
    const [products, setProducts] = useState([]);
    const API = "https://dummyjson.com/products";

    const getMovieData = async () => {
        try {
            const res = await axios.get(API)
            console.log(res.data.products);
            setProducts(res.data.products);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {products.map((curElem) => {
                return <Card key={curElem.id} movieData=
                    {curElem} />
            })}
        </ul>
    )
}

export default Movie;
