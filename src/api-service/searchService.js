import { ApiF8Get } from '~/Utils/request';
export const search = async (q, type = 'less') => {
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
// đã gộp vào Utils nên chưa dùng đến
