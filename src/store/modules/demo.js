import { getUserInfo } from '@/api/user'

const demo = {
    state: {
        state01: '123',
        userInfo: {}
    },
    //获取state
    getters: {
        getState01(state) {  
            return state.state01
        },
    },
    //改变state
    mutations: {
        mutateState01(state, params) { 
            state.state01 = params
        },
        mutateUserInfo(state, params) { 
            state.userInfo = params
        },
    },
    //触发mutations
    actions: {
        state01(context, params) {  
            context.commit('mutateState01', params);
        },
        async getUser(context, data){
            try{
                const res = await getUserInfo(data)
                console.log(res)
                context.commit('mutateUserInfo', res.data);
            }catch(err){
                console.log(err)
            }
        }
    }
}
export default{
    namespaced: true,
    ...demo
}