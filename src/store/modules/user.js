import Cookies from 'js-cookie';

const app = {
    state: {
        email: '',
        token: localStorage.getItem('token')
    },
    mutations: {
        SET_AUTH_INFO: (state, info) => {
            state.email = info.email;
            state.token = info.token;
            localStorage.token = info.token;
        },
    },
    actions: {

    }
};

export default app;