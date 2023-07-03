import { useEffect } from "react";
import { getTokenAuth } from "../api/api";
import { useNavigate } from "react-router-dom";
import ToastComponent from "../components/ToastComponent";


const LoginScreen = () => {

	const navigate = useNavigate()

	useEffect(() => {
		// Si el local storage tiene datos, se borran los datos.
		if (localStorage.length != 0) {
			localStorage.clear();
		}
	}, [])


	const handleSubmit = async (event) => {
		event.preventDefault();

		const { mail, pass } = document.forms[0]
		const token = await getTokenAuth(mail.value, pass.value)

		if (token) {
			console.log('Login OK')
			navigate('/home')
			ToastComponent({ textData: "Sesión iniciada", color: "#059669" })

		} else {
			ToastComponent({ textData: "Error... Credenciales inválidas" })
		}
	};

	return (
		<div className="flex h-screen bg-slate-900">
			<div className="w-full max-w-xs m-auto bg-gray-700 rounded-xl p-5">
				<header className="flex flex-col">
					<h1 className="mx-auto mb-5 text-lg font-bold text-indigo-50">Login</h1>
					<form onSubmit={handleSubmit}>
						<>
							<label className="block mb-2 text-indigo-50">Email</label>
							<input
								className="w-full p-2 mb-6 bg-slate-500 border border-slate-400 outline-none focus:bg-gray-300 rounded-md"
								type="email"
								name="mail"
								required
							/>
						</>
						<>
							<label className="block mb-2 text-indigo-50">Password</label>
							<input
								className="w-full p-2 mb-6 bg-slate-500 border border-slate-400 outline-none focus:bg-gray-300 rounded-md"
								type="password"
								name="pass"
								required
							/>
						</>
						<>
							<input
								className="w-full bg-green-700 hover:bg-green-600 text-indigo-50 font-bold py-2 px-4 mb-6 rounded cursor-pointer"
								type="submit"
							/>
						</>
					</form>
				</header>
			</div>
		</div>
	);
};

export default LoginScreen;
