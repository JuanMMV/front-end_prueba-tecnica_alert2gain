import axios from "axios";
import { setLocalStorage } from "../utils/localStorageUtils";

const host = `https://devtest.a2g.io/api/Auth`;

export const getTokenAuth = async (email, password) => {
	try {
		const res = await axios.post(host, {
			Email: email,
			Password: password,
		});
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
