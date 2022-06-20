import { useParams } from "react-router-dom";

import { ListOfProducts } from "./ListOfProducts";

export function ProductsByCategory () {
    // const { category } = useParams();

    return (
            <ListOfProducts />
            // <ListOfProducts category={category}/>
    )
}