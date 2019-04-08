<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import checklogin from "./services/index"
//    import Login from "./views/Login"
//    import Home from "./views/Home"

    export default {
        name: 'app',
//        components: {
//            Login,
//            Home
//        },
        created() {
            let check = checklogin.checkLogin()
            if (!check) {
                this.$router.push('/web/admin/login');
                return false;
            }
            this.$router.push('/');
        },
    };
</script>