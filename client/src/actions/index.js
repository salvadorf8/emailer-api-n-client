import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
	const response = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
	console.log(token);
	const response = await axios.post('/api/stripe', token);
	//reusing the FETCH_USER because its the same data, only difference is updated credits if credit card was approved
	dispatch({ type: FETCH_USER, payload: response.data });
};
