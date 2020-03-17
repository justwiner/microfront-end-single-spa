<template>
    <section>
        <h1>Project2(VUE)-主页</h1>
        <router-view></router-view>
        <el-button type="primary" @click="goTo('subHomePage')">子页面</el-button>
        <el-button :loading='submitStatus' @click="getDataPost">获取新闻数据</el-button>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            label="图象"
            width="120">
            <template slot-scope="scope">
                <img :src="scope.row.image" style="width: 100px;height: 100px"/>
            </template>
        </el-table-column>
        <el-table-column
            prop="title"
            label="标题">
        </el-table-column>
        <el-table-column
            prop="passtime"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            label="链接">
            <template slot-scope="scope">
                <a :href="scope.row.path" target="blank">{{scope.row.path}}</a>
            </template>
        </el-table-column>
        </el-table>
    </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'home',
    data () {
        return {
            submitStatus: false,
            tableData: []
        }
    },
    methods: {
        ...mapActions({
            getData: 'getData'
        }),
        goTo (name) {
            if (!name) return
            this.$router.push({ name: name })
        },
        getDataPost () {
            this.submitStatus = true
            this.tableData = []
            this.getData().then(data => {
                console.log(data)
                this.tableData = data.result
                this.$message({
                    message: '请求数据成功，F12打开控制台查看',
                    type: 'success'
                })
                this.submitStatus = false
            })
        }
    }
}
</script>

<style scoped>

</style>