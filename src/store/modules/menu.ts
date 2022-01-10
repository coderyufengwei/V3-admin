const state = () => ({
    menu: []
})
const mutations = {
    getMenu() { },
    setMenu(state: any, data: any) {
        state.menu = data;
    },
}
const actions = {
    GETMENU({ commit, state }: any, data: any) {
        commit('setMenu', data);
    }
}


export default {
    state,
    mutations,
    actions
}