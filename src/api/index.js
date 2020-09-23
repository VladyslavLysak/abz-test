import axios from 'axios';

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
const token = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

export const fetchPersonsApi = async () => {
    const response = await axios.get(`${url}?page=1&count=6`).then(res => res.data);
    return response.users;
};

export const fetchMorePersonsApi = async (page, offset) => {
    const response = await axios.get(`${url}?page=${page}&count=${offset}`).then(res => res.data);
    const users = response.users;
    return users;
};

export const createUserApi = async (formData) => {
    const response = await axios.get(`${token}`).then(res => res.data);
    const postUser = await axios.post(`${url}`, formData, { headers: { 'Token': response.token } }).then(res => res.data);
    return postUser;
}