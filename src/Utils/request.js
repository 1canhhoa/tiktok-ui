import axios from 'axios';
const ApiF8 = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
const ApiF8Get = async (path, options = {}) => {
    const res = await ApiF8.get(path, options);
    return res.data;
};
export const searchService = async (q, type = 'less') => {
    try {
        const res = await ApiF8Get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
