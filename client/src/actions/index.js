import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    const response = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
    const response = await axios.post('/api/stripe', token);
    //reusing the FETCH_USER because its the same data, only difference is updated credits if credit card was approved
    dispatch({ type: FETCH_USER, payload: response.data });
};

//this is not a named export
export const submitSurvey = (values) => async (dispatch) => {
    const response = await axios.post('/api/surveys', values);
    // If you recall, the reason we're calling FETCH_USER, is on the server side, we send email, save user, deduct points, then return updated user
    dispatch({ type: FETCH_USER, payload: response.data });
};
