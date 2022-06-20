import { useState } from 'react';

import CategoryContext from "./index";

export default function CategoriesProviders ({ children }) {
    
    const [ actualCategory, setActualCategory ] = useState('home');
    const [ actualSubCategory, setActualSubCategory ] = useState('');
    const [ categories, setCategories ] = useState([]);

    const changeActualCategory = ({category}) => {
        setActualCategory(category)
    };

    const changeActualSubCategory = ({subCategory}) => {
        setActualSubCategory(subCategory)
    };

    return (
        <CategoryContext.Provider value={{actualCategory, changeActualCategory, categories, setCategories, actualSubCategory, changeActualSubCategory}} >
            {children}
        </CategoryContext.Provider >
    )
}
