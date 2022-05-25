import { useParams } from "react-router-dom";
import { Header } from "../Home/Header";
import { ListOfProducts } from "./ListOfProducts";

export function ProductsByCategory () {
    const { category } = useParams();

    return (
        <>
            <Header />
            <ListOfProducts category={category}/>
        </>
    )
}