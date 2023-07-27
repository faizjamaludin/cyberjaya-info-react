import React from 'react'
import axios from 'axios'

export const registerUser = (userData) => async (dispatch) => {
    try {
        await axios.post('http://localhost:5000/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    }
};

export const loginUser = (userData) => async (dispatch) => {
    try {
        await axios.post('http://localhost:5000/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
};