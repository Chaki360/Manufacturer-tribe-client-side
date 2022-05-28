import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, SetProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => SetProducts(data))
    }, [products]);
    return [products];
}
export default useProducts;