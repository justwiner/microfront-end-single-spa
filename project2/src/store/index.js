import vuex from 'vuex'
import Vue from 'vue'
import moduleA from './moduleA'

Vue.use(vuex);

export default new vuex.Store({
    modules: {
        moduleA
    }
})