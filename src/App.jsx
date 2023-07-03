import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { Toaster } from "react-hot-toast";
import DashboardScreen from "./screens/DashboardScreen";
import DetailPlatformScreen from "./screens/DetailPlatformScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const App = () => {
	return (
		<div className='bg-slate-900 min-h-screen h-full pb-10'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginScreen />} />
					<Route path="/home" element={<DashboardScreen />} />
					<Route path="/detail/:id" element={<DetailPlatformScreen />} />
					<Route path='*' element={<NotFoundScreen />}/>
				</Routes>
				<Toaster />
			</BrowserRouter>
		</div>
	);
};

export default App;
