import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://dashboard-staging.designelementary.com/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

