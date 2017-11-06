import Cookies from 'js-cookie';

const app = {
    state: {
        sidebar: !+Cookies.get('sidebarStatus'),
        scroll: {},
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar) {
                Cookies.set('sidebarStatus', 1);
            } else {
                Cookies.set('sidebarStatus', 0);
            }
            state.sidebar = !state.sidebar;
        },
        SET_SCROLL: (state, data) => {
            state.scroll[data.name] = data.top;
        }
    },
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
        SetScroll: ({ commit, state }) => {
            let nameValue = location.pathname;
            let topValue = document.documentElement.scrollTop || document.body.scrollTop;
            commit('SET_SCROLL', { name: nameValue, top: topValue });
        },
    }
};

export default app;