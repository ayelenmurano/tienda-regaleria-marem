import CategoryContext from ".";

import { useGetCategoriesQuery } from '../../../../redux/api/categories';

export default function CategoriesProviders ({ children }) {

    const { data, isLoading, isSuccess, isFetching, error } = useGetCategoriesQuery();
    
    const [ actualCategory, setActualCategory ] = useState('home');
    
    const getCategories = () => {
        return { data, isLoading, isSuccess, isFetching, error }
    };

    const changeActualCategory = ({category}) => {
        setActualCategory(category)
    };

    return (
        <CategoryContext.Provider value={{actualCategory, getCategories, changeActualCategory}} >
            {children}
        </CategoryContext.Provider >
    )
}
