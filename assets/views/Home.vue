<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
                {{collapsed?'':Name}}
            </el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="collapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner"><img :src="this.UserAvatar" /> {{UserName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided @click.native="logout">LoginOut</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <el-aside width="200px">
                <el-menu
                        default-active="$router.path"
                        class="el-menu-vertical-demo"
                        router
                       >
                    <el-menu-item index="/new">
                        <i class="el-icon-setting"></i>
                        <span slot="title">New</span>
                    </el-menu-item>
                    <el-menu-item index="/list">
                        <i class="el-icon-setting"></i>
                        <span slot="title">List</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-col>
     </el-row>
</template>

<script>
    import "../assets/home.scss";
    var Avatar =require( '../assets/images/logo.png');
    export default {
        name:"Home",
        data() {
            return {
                Name:'Xavier Admin',
                collapsed:false,
                UserName: 'Admin',
                UserAvatar: Avatar,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleselect: function (a, b) {
            },
            //退出登录
            logout: function () {
                var _this = this;
                this.$confirm('Confirm to exit?', 'Tip', {
                    //type: 'warning'
                }).then(() => {
                    localStorage.clear()
                    _this.$router.push('/web/admin/login');
                }).catch(() => {

                });


            },
            //折叠导航栏
            collapse:function(){
                this.collapsed=!this.collapsed;
            },
            showMenu(i,status){
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
            }
        },
        mounted() {

        }
    }

</script>
