import axios from 'axios';
import { iUsuarios } from './usuario.interface';

const URL = 'https://api-user-production.up.railway.app';

export const getUsuarios = async (): Promise<iUsuarios[]> => {
	const { data } = await axios.get<iUsuarios[]>(`${URL}/usuarios`);

	return data;
};
