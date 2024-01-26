import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';

const useAuth = () => {
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    // const token = localStorage.getItem('token');
    // const user = JSON.parse(localStorage.getItem('user'));
    // const res = axiosPublic.defaults.headers.common['authorization'] = `Bearer ${token}`;
    axiosSecure.get('/users/me')
        .then((res) => {
            console.log(res.data);
            localStorage.setItem('user', JSON.stringify(res.data));
        })
        .catch((err) => {
            console.log(err.response);
        });



    // console.log(user);
    // return res;
};

export default useAuth;