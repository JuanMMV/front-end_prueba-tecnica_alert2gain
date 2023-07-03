import { useNavigate, useParams } from "react-router-dom"
import { getPlatformById } from "../api/api"
import { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import ToastComponent from "../components/ToastComponent"

const DetailPlatformScreen = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [showS3, setShowS3] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                window.scrollTo(0, 0);
                setData(await getPlatformById(id))
            } catch (error) {
                if (localStorage.getItem('email')) {
                    ToastComponent({ textData: "Sesión expirada... Por favor vuelva a iniciar sesión" })
                }
                localStorage.clear()
                navigate('/')
            }
        }
        fetchData()
    }, [])



    return (
        <div className='flex flex-col pb-5 items-center'>
            <HeaderComponent />
            <h1 className='text-white font-bold text-4xl p-7'>Detalle</h1>
            {data ?
                (
                    <div className="w-full flex justify-center items-center flex-col">
                        <div className='flex p-2 bg-gray-800 w-auto xl:w-[75%] h-full justify-center rounded-xl items-center flex-col xl:flex-row'>

                            <div className='p-0 xl:p-3 w-[80%] flex justify-center items-center'>
                                <img src={data.img} className='rounded-xl' />
                            </div>



                            <div className='flex flex-col ms-0 xl:ms-20 items-center p-3 mt-3 w-full lg:h-[600px] h-auto'>
                                <div className='w-full pl-7'>
                                    <h1 className='text-white font-bold text-lg p-5'>Datos:</h1>
                                </div>

                                <table>
                                    <tbody className='w-full'>
                                        <tr className="bg-slate-700">
                                            <td className='text-start py-2 px-5 text-white font-bold'>Nombre</td>
                                            <td className='text-center py-2 px-5 text-white'>{data.name}</td>
                                        </tr>

                                        <tr>
                                            <td className='text-start py-3 px-5 text-white font-bold'>Flota</td>
                                            <td className='text-center py-3 px-5 text-white'>{data.fleet}</td>
                                        </tr>

                                        <tr className="bg-slate-700">
                                            <td className='text-start py-3 px-5 text-white font-bold'>Ultimo reporte:</td>
                                            <td className='text-center py-3 px-5 text-white'><a href={data.lastReport}>{data.lastReport}</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='w-auto mt-5 flex justify-center'>
                                    <button
                                        className='bg-green-700 p-5 rounded-xl shadow-2xl text-white font-bold'
                                        onClick={() => { setShowS3(!showS3) }}
                                    >
                                        {showS3 ? 'Ocultar reporte' : 'Mostrar ultimo reporte'}
                                    </button>
                                </div>
                                {showS3 && (
                                    <div className=' bg-slate-700 shadow-xl transform scale-75 -m-11 rounded-xl'>
                                        <iframe
                                            src={data.lastReport}
                                            title="url S3"
                                            width="520px"
                                            height="400px"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-white font-bold text-3xl p-7">Sensores</h1>


                        <table className="table-fixed text-white w-[80%]">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className='py-3'>ID</th>
                                    <th className='py-3'>Nombre</th>
                                    <th className='py-3'>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.sensors.map((item, index) => {
                                    return (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-slate-700' : ''}`}>
                                            <td className='text-center py-3 px-5'>{item.id}</td>
                                            <td className='text-center py-3 px-5'>{item.name}</td>
                                            <td className='text-center py-3 px-5'>{item.type}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                ) : (
                    <div className='h-screen w-auto'>
                        <h1 className='text-white'>Cargando</h1>
                    </div>
                )
            }


        </div>
    )
}

export default DetailPlatformScreen