import axiosInstance from '../utils/axios';

export const checkAuth = async () => {
  try {
    const response = await axiosInstance.get('/auth/isAuthenticated');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async data => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.get('/auth/logout');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllEntries = async () => {
  try {
    const response = await axiosInstance.get('/entries');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createWorkEntry = async data => {
  try {
    const response = await axiosInstance.post('/entries', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTimesheet = async startDate => {
  if (!startDate) return;
  try {
    const response = await axiosInstance.get(`/entries/timesheet?startDate=${startDate}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
