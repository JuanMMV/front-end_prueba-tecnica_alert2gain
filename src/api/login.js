import axios from "axios";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageUtils";

const host = `https://devtest.a2g.io/api/`;

export const getTokenAuth = async (email, password) => {
	try {
		const res = await axios.post(`${host}Auth`, {
			Email: email,
			Password: password,
		});
		console.log(`${host}Auth`)
		if (res.status == 200) {
			// return { email: res.data.email, token: res.data.token };
			setLocalStorage("token", res.data.token)
			setLocalStorage("email", res.data.email)
			return res.status

		}
		return null;
	} catch (error) {
		console.error(error);
	}
};


export const getAllPlatforms = async () => {
	try {
		const config = {
			headers: { Authorization: `Bearer ${getLocalStorage('token')}` },
			params: { pageSize: 12 },
		};

		const resp = await axios.get(`${host}Platforms`, config);
		return resp.data;

	} catch (error) {
		console.error(error)
	}
}

export const getAllPlatformsByPage = async (page) => {
	try {
		const config = {
			headers: { Authorization: `Bearer ${getLocalStorage('token')}` },
			params: { pageSize: 12, pageNumber: page },
		};

		const resp = await axios.get(`${host}Platforms`, config);
		return resp.data;

	} catch (error) {
		console.error(error)
	}
}


export const getPlatformsByFlota = async (flota, page) => {
	try {
		const config = {
			headers: { Authorization: `Bearer ${getLocalStorage('token')}` },
			params: {
				pageNumber: page,
				pageSize: 10,
				fleet: `Flota ${flota}`,
			},
		};

		const resp = await axios.get(`${host}Platforms`, config);
		return resp.data
	} catch (error) {
		console.error(error)
	}
};


export const getPlatformById = async (idPlatform) => {
	try {
		const config = {
			headers: { Authorization: `Bearer ${getLocalStorage('token')}` }
		};

		const resp = await axios.get(`${host}Platforms/${idPlatform}`, config);
		return resp.data.data
	} catch (error) {
		console.error(error)
	}
}