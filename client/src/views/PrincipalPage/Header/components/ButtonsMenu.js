import { useEffect, useContext } from "react";

import MenuProducts from "./MenuProducts";
import CategoryContext from '../../../../context/category';
import { useGetCategoriesQuery } from '../../../../redux/api/categories';

export function ButtonsMenu ({}) {
    
    const { actualCategory, changeActualCategory, setCategories } = useContext(CategoryContext);
    const { data, isLoading, isSuccess, isFetching, error } = useGetCategoriesQuery();

    useEffect(()=>{
        console.log(`Las categorias totales cambiaron ${JSON.stringify(data)}`);
        setCategories(data);
    },[data])

    //Se verifica que se modifique la categoria seleccionada
    useEffect( () => {
        console.log(`la categoria actual es ${actualCategory}`);
    }, [actualCategory] );

    return (
        <>
            <div className="">
                <button 
                className="w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
                onClick={()=> {changeActualCategory({category:"home"})}}
                >
                    INICIO
                </button>
                <MenuProducts products={data?.data} />
                <button 
                className="w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
                onClick={()=> {changeActualCategory({category:"whoweare"})}}
                >
                    QUIÉNES SOMOS
                </button>
                <button 
                className="w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
                onClick={()=> {changeActualCategory({category:"contact"})}}
                >
                    CONTACTO
                </button>
            </div>
        </>
    )
}