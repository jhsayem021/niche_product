import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-coast-09907.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);
    return [products, setProducts];
}

export default useProducts;