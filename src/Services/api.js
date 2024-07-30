import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.80.150.235:8000',
});


export const login = async (username, password) => {
    const response = await api.post('/api/login', { username, password });
    if (response.data && response.data.access_token) {
        localStorage.setItem('authToken', response.data.access_token);
        console.log("local storage set", localStorage.getItem('authToken'))
    }
    return response.data;
};

export const signup = async (firstName, lastName, email, password) => {
    const response = await api.post('/api/signup', { first_name: firstName, last_name: lastName, email, password });
    return response.data;
};

export const predict = async (light, temperature, humidity, soilMoisture) => {
    const token = localStorage.getItem('authToken');
    console.log(token)
    if (!token) {
        throw new Error('No auth token found');
    }
    const response = await api.post(
        '/api/predict', 
        { intensity: light, temperature, humidity, soil_moisture: soilMoisture }, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};
