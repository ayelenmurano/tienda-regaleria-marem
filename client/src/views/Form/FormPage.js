import { useContext, useEffect, useState } from "react";

import CategoryContext from '../../context/category';

export default function Form () {
    const [actualState, setActualState] = useState(false);

    const styleInput = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000`
    const stypeLabel = `block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300`;

    const handleCheckbox = e => {
        console.log(`el e.target.checked es ${e.target.checked}`)
        setActualState(e.target.checked);
    };

    const { categories } = useContext(CategoryContext);

    return (
        <div className="m-4 font-ptsans"> 
            <div className="bg-rose-200 pb-1 pt-1 mb-4 shadow-lg rounded-lg flex justify-center">AGREGAR PRODUCTO</div>
            <form className="m-8">
                <div className="mb-3">
                    <label for="name" className={stypeLabel}>Nombre</label>
                    <input type="text" id="name" className={styleInput} required />
                </div>
                <div className="mb-3">
                    <label for="price" className={stypeLabel}>Precio</label>
                    <input type="text" id="price" className={styleInput} required />
                </div>
                <div className="mb-3">
                    <label for="category" className={stypeLabel}>Categoria</label>
                    <select id="category" className={styleInput} >
                        {
                            categories?.data?.map(({nombre}, index) => {
                                return (<option>{nombre}</option>)
                            })
                        }
                    </select>
                </div>
                <div className="flex items-start mb-3">
                    <div className="flex items-center h-5">
                        <input 
                        id="newCategoryCheck" 
                        type="checkbox" 
                        value="" 
                        onChange={handleCheckbox} 
                        checked={actualState}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        />
                    </div>
                    <label 
                    for="newCategory" 
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-40"
                    >
                        Agregar nueva:
                    </label>
                    <div className="flex items-center h-5 w-full">
                        <input type="text" id="newCategory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000"
                        disabled={!actualState} />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="text" className={stypeLabel}>Descripción</label>
                    <textarea id="description" rows="2" className={styleInput} placeholder="Material, colores, ..." required></textarea>
                </div>
                <div className="mb-3">
                    <label for="photo" className={stypeLabel}>Foto</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="product_photo" id="photo" type="file"/>
                </div>
                <div className="mb-3">
                    <label for="text" className={stypeLabel}>Talle</label>
                    <input type="text" id="size" className={styleInput} required />
                </div>
                <div className="mb-3">
                    <label for="text" className={stypeLabel}>Stock</label>
                    <input type="text" id="stock" className={styleInput} required />
                </div>


                <div className="flex items-start mb-3">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                    </div>
                    <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
        </div>
    )
}