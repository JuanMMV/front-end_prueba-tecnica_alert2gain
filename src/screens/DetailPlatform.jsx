import { useParams } from "react-router-dom"
import { getPlatformById } from "../api/login"
import { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"

const DetailPlatform = () => {
    const { id } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            setData(await getPlatformById(id))
            // setData(await getPlatformsByFlota(1, 2))
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
                        <div className='flex p-2 bg-gray-800 w-auto xl:w-[75%] justify-center xl:justify-between rounded-xl items-center xl:items-start flex-col xl:flex-row'>

                            <img src={data.img} className='rounded-xl' />


                            <div className='flex flex-col ms-0 xl:ms-20 p-3 mt-3'>
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

                                        <tr>
                                            <td className='text-start py-3 px-5 text-white font-bold'>Ultimo reporte:</td>
                                            <td className='text-center py-3 px-5 text-white'><a href={data.lastReport}>{data.lastReport}</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <iframe
                                                src={data.lastReport}
                                                title="Contenido externo"
                                                width="auto"
                                                height="auto"
                                            /> */}
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

export default DetailPlatform