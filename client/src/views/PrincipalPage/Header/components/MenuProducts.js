import { Fragment, useContext, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";

import { useGetCategoriesQuery } from '../../../../redux/api/categories';
import CategoryContext from '../../../../context/category'
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function MenuProducts({products}) {
    const navigate = useNavigate();

    const listCategories = [];

    // const handleSearchClick = ({category}) => {
    //   navigate(`/category/${category}`)
    // };
    const { changeActualCategory, changeActualSubCategory } = useContext(CategoryContext);

    products?.forEach(({nombre, _id}, index) => {
        
        listCategories.push(
         //   <Menu.Item key={index} onClick={handleSearchClick({category: nombre})} type="button">
            // <Menu.Item key={index} onClick={changeBody(nombre)} type="button">
            <Menu.Item 
            key={index} 
            type="button"
            onClick={()=> {
              changeActualCategory({category:"products"});
              changeActualSubCategory({subCategory:nombre});
            }}
            >
                <a className='hover:bg-gray-100 text-gray-900 block px-4 py-1 text-xs'>
                    {nombre}
                </a>
            </Menu.Item>
        );
    })

  return (
    <Menu as="div" className="relative z-16 inline-block text-left">
      <div>
        <Menu.Button 
        className="inline-flex justify-center w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
        >
        {/* focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 */}
          PRODUCTOS
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-rose-100 text-xs font-ptsans ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
              {listCategories}
            {/* 
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-1 text-xs'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-1 text-xs'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-1 text-xs'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}