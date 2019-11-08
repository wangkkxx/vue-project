<template>
    <div class="app-head">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <router-link to='/index' style='color: #606266;' v-if="$route.path!=='/index'">
                    首页
                </router-link>
                <span v-else>首页</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in navList" :key="index">
                <span style='font-weight:bold; cursor: pointer;' @click="jump(item)" >
                    {{item.name}}
                </span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                {{$route.meta.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <div class="user" v-if='userName'>
                <p>
                    <i class="el-icon-s-custom"></i>
                    <span>{{userName}}</span>
                </p>
                <el-button type='primary' size='mini' @click="logout">退出</el-button>
            </div>
            <div v-else>
                <el-button type="primary" size='medium' @click="openLoginModal = true">登录</el-button>
            </div>
        </div>
        <el-dialog title="登录" :visible.sync="openLoginModal" width='360px' :before-close='onClose' center>
            <el-form :model="form" ref='loginForm' :rules='rules'>
                <el-form-item prop='name'>
                    <el-input
                        placeholder="用户名"
                        prefix-icon="el-icon-user"
                        v-model="form.name">
                    </el-input>
                </el-form-item>
                <el-form-item prop='pwd'>
                    <el-input
                        placeholder="密码"
                        prefix-icon="el-icon-goods"
                        v-model="form.pwd">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="onClose">取消</el-button>
                <el-button type="primary" @click="onOK">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import routerFilter from '../router/routeFilter.js';
    export default {
        data() {
            this.routeFilter = routerFilter
            return {
                openLoginModal: false,
                form:{
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                navList: [],
                userName: JSON.parse(localStorage.getItem('userName'))
            }
        },
        methods: {
            onClose(){
                this.$refs['loginForm'].resetFields()
                this.openLoginModal = false
            },
            onOK(){
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        this.userName = this.form.name
                        localStorage.setItem('userName',JSON.stringify(this.form.name))
                        this.onClose()
                    } else {
                        return false
                    }
                })
            },
            logout(){
                this.$confirm('确定退出登录？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.userName = ''
                    localStorage.removeItem('userName')
                    this.$message({
                        type: 'success',
                        message: '您已退出登录！'
                    });
                })
            },
            jump(item){
                this.$router.push({path: item.path});
            },
            changeColor(num){
                document.getElementById('app').className ='theme'+num ;
                localStorage.setItem('app',document.getElementById('app').className)
            },
        },
        watch: {
            $route(to, from){
                this.navList = this.routeFilter(to.path)
            }
        }
    }
</script>

<style lang="less" scoped>
    .app-head{
        width: 100%;
        height: 60px;
        background: #fff;
        display: flex;
        align-items: center;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-dropdown-link{
            cursor: pointer;
        }
        .user{
            display: flex;
            align-items: center;
            >p{
                display: flex;
                align-items: center;
                flex-direction: column;
                margin-right: 8px;
                i{
                    font-size: 26px;
                    color:#409EFF;
                }
                span{
                    max-width: 70px;
                    font-size: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            
        }
    }
</style>