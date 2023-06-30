import axios from "axios";

const host = `https://devtest.a2g.io/api/Auth`;

export const getTokenAuth = async () => {
	try {
		const res = await axios.post(host, {
			Email: "juan.menares.vega@gmail.com",
			Password: "9kfqqOapc5YPpIqZS9uq",
		});
		if (res.status == 200) {
			return { email: res.data.email, token: res.data.token };
		}
		return null;
	} catch (error) {
		console.error(error);
	}
};
