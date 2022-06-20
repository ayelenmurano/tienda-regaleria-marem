import { useContext, useEffect } from 'react';
import CategoryContext from '../../../../context/category';

import { useGetProductsByCategoriesQuery } from '../../../../redux/api/products';

// const products = [
//     {
//       id: 1,
//       name: 'Earthen Bottle',
//       href: '#',
//       price: '$48',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//       id: 2,
//       name: 'Nomad Tumbler',
//       href: '#',
//       price: '$35',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//       id: 3,
//       name: 'Focus Paper Refill',
//       href: '#',
//       price: '$89',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//       id: 4,
//       name: 'Machined Mechanical Pencil',
//       href: '#',
//       price: '$35',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 1,
//         name: 'Earthen Bottle',
//         href: '#',
//         price: '$48',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//       },
//       {
//         id: 2,
//         name: 'Nomad Tumbler',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//       },
//       {
//         id: 3,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//       },
//       {
//         id: 4,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//       }
// ]


// export function ListOfProducts({ category }) {
export function ListOfProducts() {
    
    const { actualSubCategory } = useContext(CategoryContext);

    let { data, isLoading, isSuccess, isFetching, error } = useGetProductsByCategoriesQuery(actualSubCategory);

    const render = (data) => {
      return data?.map((product) => (
                                        <a key={product["_id"]} href={product?.foto[0]} className="group hover:bg-rose-100 hover:shadow-lg p-2 rounded-lg">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl-gral:aspect-w-7 xl-gral:aspect-h-8">
                                            <img
                                            src={product.foto[0]}
                                            alt={product.nombre}
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                            />
                                        </div>
                                        <h3 className="mt-4 text-xs font-medium text-gray-700">{product.nombre}</h3>
                                        <p className=" text-xs text-gray-900">{product.precio}</p>
                                        </a>
                          ))
    }

    useEffect( () => {
      render(data);
    },[actualSubCategory])
    console.log(`los productos de la actual subcategoria ${actualSubCategory} son ${JSON.stringify(data)}`)
return (
    <div className="bg-white">
    <div className="bg-slate-100 max-w-2xl mx-auto py-8 px-4 sm-gral:py-4 sm-gral:px-6 lg-gral:max-w-7xl lg-gral:px-8">
        
        <div className="font-ptsans text-center bg-rose-200 pb-1 pt-1 mb-4 shadow-lg rounded-lg">{actualSubCategory.toUpperCase()}</div>

        <div className="grid grid-cols-1 gap-y-10 sm-gral:grid-cols-2 gap-x-6 lg-gral:grid-cols-3 xl-gral:grid-cols-4 xl-gral:gap-x-8 ">
        {render(data)}
        </div>
    </div>
    </div>
)
}