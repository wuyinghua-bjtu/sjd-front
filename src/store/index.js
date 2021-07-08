import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //user: {username: '', uid: ''}
        user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {username: '', uid: ''}
        //user: localStorage.getItem('user') ? localStorage.getItem('user') : null
    },
    mutations: {
        modifyUserInfo(state, username, uid) {
            state.user.username = username;
            state.user.uid = uid;
        }
    },
    actions: {

    },
    modules: {

    }
});
export default store;
