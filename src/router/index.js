import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Layout2 from '@/components/Layout2'

const Login = r => require.ensure([], () => r(require('../page/login/login')), 'Login')
const Signup = r => require.ensure([], () => r(require('../page/signup/signup')), 'Signup')
const Forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'Forget')


const Messages = r => require.ensure([], () => r(require('../page/messages/messages')), 'messages')
const Contacts = r => require.ensure([], () => r(require('../page/contacts/contacts')), 'contacts')
const Dynamics = r => require.ensure([], () => r(require('../page/dynamics/dynamics')), 'dynamics')

const Add = r => require.ensure([], () => r(require('../page/add/add')), 'add')
const Chat = r => require.ensure([], () => r(require('../page/chat/chat')), 'chat')
const Game = r => require.ensure([], () => r(require('../page/game/game')), 'game')
const More = r => require.ensure([], () => r(require('../page/more/more')), 'more')
const Profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const Search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const Setting = r => require.ensure([], () => r(require('../page/setting/setting')), 'setting')

const Test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
const PageNotFound = r => require.ensure([], () => r(require('../page/error/pageNotFound')), 'pageNotFound')

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        { path: '/login', name: 'Login', component: Login },
        { path: '/signup', name: 'Signup', component: Signup },
        { path: '/forget', name: 'Forget', component: Forget },
        {
            path: '/',
            component: Layout,
            children: [
                { path: '', redirect: '/login' },
                { path: '/messages', name: 'Messages', component: Messages },
                { path: '/contacts', name: 'Contacts', component: Contacts },
                { path: '/dynamics', name: 'Dynamics', component: Dynamics },

                { path: '/add', name: 'Add', component: Add },
                { path: '/chat', name: 'Chat', component: Chat },
                { path: '/game', name: 'Game', component: Game },
                { path: '/more', name: 'More', component: More },
                { path: '/profile', name: 'Profile', component: Profile },
                { path: '/search', name: 'Search', component: Search },
                { path: '/setting', name: 'Setting', component: Setting },

                { path: '/test', name: 'Test', component: Test }
            ]
        },
        { path: '*', component: PageNotFound }

    ]
})