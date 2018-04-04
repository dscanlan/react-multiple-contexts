import Web from '../Services/Web';
import { BaseUrl } from '../Services/Utility';

export const logInAction = async (email, password) =>
	await Web.post(`${BaseUrl}/access-tokens`, {
		email,
		password
	});
