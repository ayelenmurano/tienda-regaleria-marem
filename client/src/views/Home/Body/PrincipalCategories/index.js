export function PrincipalCategories () {
    const principalCategories = ['BABEROS','CAMBIADORES', 'AMIGORUMIS']

    let rows = [];

    principalCategories.forEach((element, index) => {
        rows.push(<button key={index} className="w-40 p-1 mr-5 mt-2 bg-zinc-800 rounded-md hover:bg-rose-200 hover:text-zinc-800 hover:shadow-lg">{element}</button>)
    })

    return (
        <div className="bg-slate-50 p-3 overflow-auto drop-shadow-md sm:overflow-x-hidden">
            <div className="text-sm font-semibold font-medium font-ptsans">
                <p>CATEGORÍAS PRINCIPALES</p>
            </div>
            <div className="text-xs font-light font-ptsans text-white flex flex-row justify-center">
                {rows}
            </div>
        </div>
    )
}