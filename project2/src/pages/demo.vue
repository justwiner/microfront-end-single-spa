<template>
    <section>
        <el-button type="primary" @click="goTo('homePage')">主页</el-button>
        <el-button type="primary" @click="goTo('about')">关于</el-button>
    </section>
</template>

<script>
export default {
    name: 'demo',
    methods: {
        goTo (name) {
            if (!name) return
            this.$router.push({ name: name })
        }
    }
}
</script>

<style scoped>

</style>