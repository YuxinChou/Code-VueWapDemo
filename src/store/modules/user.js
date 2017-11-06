import Cookies from 'js-cookie';

const app = {
    state: {
        email: '',
        uid: localStorage.getItem('uid'),
        token: localStorage.getItem('token')
    },
    mutations: {
        SET_EMAIL: (state, email) => {
            state.email = email;
        },
        SET_UID: (state, uid) => {
            state.uid = uid;
        },
        SET_AUTH_TYPE: (state, type) => {
            state.auth_type = type;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {

    }
};

export default app;