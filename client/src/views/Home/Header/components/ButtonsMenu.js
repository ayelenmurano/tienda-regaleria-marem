import MenuProducts from "./MenuProducts";

export function ButtonsMenu ({changeBody}) {

    return (
        <>
            <div className="">
                <button 
                className="w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
                >
                    INICIO
                </button>
                <MenuProducts changeBody={changeBody}/>
                <button 
                className="w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
                >
                    QUIÉNES SOMOS
                </button>
                <button 
                className="w-28 text-xs p-1 font-medium font-ptsans hover:bg-rose-200 hover:shadow-lg sm:mt-2 sm:mb-2 sm:w-full"
                >
                    CONTACTO
                </button>
            </div>
        </>
    )
}