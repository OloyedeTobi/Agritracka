import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.80.150.235:8000',
});

const getToken = () => {
    return localStorage.getItem('authToken');
}

export const login = async (username, password) => {
    const response = await api.post('/api/login', { username, password });
    return response.data;
};

export const signup = async (firstName, lastName, email, password) => {
    const response = await api.post('/api/signup', { first_name: firstName, last_name: lastName, email, password });
    return response.data;
};

export const predict = async (light, temperature, humidity, soilMoisture) => {
    const token = getToken();
    const response = await api.post(
                                '/api/predict', 
                                { light, temperature, humidity, soil_moisture: soilMoisture }, 
                                {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            });
    return response.data;
};
