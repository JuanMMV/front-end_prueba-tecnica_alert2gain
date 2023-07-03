
const PaginationComponent = ({ page, setPage, totalPages }) => {

    const handlePage = (operation) => {
        if(operation == 'sum' && page < totalPages){
            setPage(page += 1)
        } else if(operation == 'sub' && page > 1 ) {
            setPage(page -= 1)
        }
        else{
            console.log('No se puede realizar')
        }
    }

    return (
        <div className="flex flex-col items-center">
            <span className="text-gray-400">
                Pagina
                <span className="font-semibold text-white"> {page} </span>
                de
                <span className="font-semibold text-white"> {totalPages} </span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button 
                    className="inline-flex items-center px-4 py-2 font-medium rounded-l bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                    onClick={() => handlePage('sub')}    
                >
                    ⮜
                    Anterior
                </button>
                <button 
                    className="inline-flex items-center px-4 py-2 text-sm font-medium border-0 border-l rounded-r bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                    onClick={() => handlePage('sum')}   
                >
                    Siguiente
                    ⮞
                </button>
            </div>
        </div>
    )
}

export default PaginationComponent