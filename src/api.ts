import axios from 'axios';

export const apiClient = axios.create({

    baseURL: 'https://architex-staging.designelementary.com/api', 
    // baseURL:'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

