import { useEffect, useState } from "react";
import { getTokenAuth } from "../api/login";
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {

	const navigate = useNavigate()

	useEffect(() => {
		// Si el local storage tiene datos, se borran los datos.
		if (localStorage.length != 0) {
			// localStorage.clear();
			console.log('entro en local')
		}

	}, [])


	const handleSubmit = async (event) => {
		event.preventDefault();
		const { mail, pass } = document.forms[0]
		const lala = await getTokenAuth(mail.value, pass.value)

		if (lala) {
			console.log('Login OK')
			navigate('/home')

		} else {
			console.log('No tengo datos');
		}

	};

	return (
		<div className="flex h-screen bg-[url('https://fondosmil.com/fondo/88194.jpg')] bg-cover bg-no-repeat bg-center">
			<div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
				<header className="flex flex-col">
					<h1 className="mx-auto mb-5 text-lg font-bold">Login</h1>
					<form onSubmit={handleSubmit}>
						<>
							<label className="block mb-2 text-indigo-500">Email</label>
							<input
								className="w-full p-2 mb-6 text-indigo-700 border border-indigo-500 outline-none focus:bg-gray-300 rounded-md"
								type="email"
								name="mail"
								required
							/>
						</>
						<>
							<label className="block mb-2 text-indigo-500">Password</label>
							<input
								className="w-full p-2 mb-6 text-indigo-700 border border-indigo-500 outline-none focus:bg-gray-300 rounded-md"
								type="password"
								name="pass"
								required
							/>
						</>
						<>
							<input
								className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
								type="submit"
							/>
						</>
					</form>
				</header>
			</div>
			{/* <div className="bg-[url('https://fondosmil.com/fondo/88194.jpg')] bg-cover h-screen bg-no-repeat bg-center brightness-50">
				<div class=" absolute inset-0 bg-black opacity-50"></div>
			</div>
			<h1 className="absolute left-0 right-0 top-0 bottom-0 m-auto">Login Screen</h1> */}
		</div>
	);
};

export default LoginScreen;
