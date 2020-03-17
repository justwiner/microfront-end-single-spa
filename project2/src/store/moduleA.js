import axios from 'axios'

export default {
    state: {
        data: null
    },
    mutations: {
        setData (state, data) {
            state.data = data
        }
    },
    actions: {
        getData (context) {
            return new Promise(resolve => {
                axios.post('https://api.apiopen.top/getWangYiNews', {
                    page: 1,
                    count: 20
                }).then(res => {
                    resolve(res.data)
                    context.commit('setData', res.data.result)
                    console.log(res.data)
                })
            })
        }
    }
}