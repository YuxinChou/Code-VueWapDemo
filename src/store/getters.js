const getters = {
    token: state => state.user.token,
    email: state => state.user.email,
    sidebar: state => state.app.sidebar,
    scroll: state => state.app.scroll,
    messages: state => state.common.messages,
    contacts: state => state.common.contacts,
};

export default getters