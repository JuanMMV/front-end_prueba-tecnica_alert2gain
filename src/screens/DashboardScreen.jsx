import React, { useEffect, useState } from 'react'
import LogoutComponent from '../components/LogoutComponent'
import ButtonGroupComponent from '../components/ButtonGroupComponent'
import { getAllPlatforms, getAllPlatformsByPage, getPlatformById, getPlatformsByFlota } from '../api/login'
import CardComponent from '../components/CardComponent'
import { useNavigate } from 'react-router-dom'
import PaginationComponent from '../components/paginationComponent'
import HeaderComponent from '../components/HeaderComponent'

const DashboardScreen = () => {
	const navigate = useNavigate()

	const [data, setData] = useState()
	const [selectFleet, setSelectFleet] = useState()
	const [page, setPage] = useState(1)

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setData(await getAllPlatforms())
	// 		// setData(await getPlatformsByFlota(1, 2))
	// 	}
	// 	fetchData()
	// }, [])

	useEffect(() => {
		const fetchData = async() => {
			if(selectFleet){
				console.log('entre, cambiando datos');
				setData(await getPlatformsByFlota(selectFleet, page))
				setPage(1)
			} else {
				setData(await getAllPlatforms())
				setPage(1)
			}
		}
		fetchData()
	}, [selectFleet])

	
	useEffect(() => {
		const fetchData = async() => {
			if(selectFleet){
				setData(await getPlatformsByFlota(selectFleet, page))
			} else {
				setData(await getAllPlatformsByPage(page))
			}
		}
		fetchData()
	}, [page])
	

	const handleCard = async(id) => {
		navigate(`/detail/${id}`)
	}

	return (
		<div className='flex flex-col items-center'>
			<HeaderComponent />
			<ButtonGroupComponent setSelectFleet={setSelectFleet} />
			<div>
				{data ?
					(
						<div className='flex flex-col items-center'>
							<h1 className='text-white text-4xl font-bold m-11'>Numero de resultados: {data.pageSize}</h1>
							<div className='flex flex-wrap items-center justify-center'>
								{data.data.map((item, index) => {
									return (
										<div key={index} onClick={() => handleCard(item.id)}>
											<CardComponent image={item.img} fleet={item.fleet} name={item.name} />
										</div>
									)
								})}
							</div>
							<PaginationComponent page={page} setPage={setPage} totalPages={data.totalPages} />
						</div>
					) : (
						<div className='h-screen w-auto'>
							<h1 className='text-white'>No tengo datos</h1>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default DashboardScreen