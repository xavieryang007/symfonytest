<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm2" label-position="left" label-width="0px"
                 class="demo-ruleForm login-container">
            <h3 class="title">Admin Login</h3>
            <el-form-item prop="account">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="Account"
                          clearable></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="Password"
                          clearable></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" @click.native.prevent="onSubmit" style="width:100%;" :loading="logining">
                    Login
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import "../assets/common.scss";
    import Login from "../api/Api";
    import checklogin from "../services/index"

    export default {
        name: 'Login',
        data() {
            return {
                logining: false,
                ruleForm: {
                    username: 'admin',
                    password: '123456'
                },
                rules: {
                    username: [
                        {required: true, message: 'Please enter your account', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: 'Please enter your password', trigger: 'blur'},
                    ]
                },
                checked: true
            }
        },
        created() {

        },
        methods: {
            onSubmit: function () {
                let vm = this;
                Login.login(this.ruleForm, function (req) {
                    console.log(req);
                    vm.$message(req.data.messages);
                    if (req.status == 200&&req.data.code==200) {
                        checklogin.updateToken(req.data.data.token);
                        vm.$router.push('/');
                    }
                });
                this.logining = true;
            }
        },
        computed: {}
    };
</script>