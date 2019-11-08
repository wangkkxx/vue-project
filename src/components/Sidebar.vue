<template>
    <div class="app-sideBar scroll-style">
        <ul>
            <li v-for="(item,index) in menu" 
                :key='index' 
                @click='handleOpen(item,index)'>
                <div class="menu-item" :class="openIndex === index?'active':''">
                    <p><i :class="item.meta.icon"></i>{{item.meta.name}}</p>
                    <i v-if='item.children && openIndex !== index' 
                        class="el-icon-arrow-down arrow"></i>
                    <i v-if='item.children && openIndex === index' 
                        class="el-icon-arrow-up arrow"></i>
                </div>
                <div v-if='openIndex === index' class="submenu">
                    <p v-for="(i,idx) in item.children" 
                        :key='idx' 
                        :class="activeIndex===idx?'active':''"
                        @click.stop="handleOpen(i,idx)">{{i.meta.name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { routes } from '../router/routes.js';
    export default {
        data() {
            this.menu = routes
            return {
                activeIndex: null,
                openIndex: null,
            }
        },
        methods: {
            handleOpen(item,index) {
                if(item.meta.level===1){
                    if(this.openIndex === index){
                        this.openIndex = null
                    }else{
                        this.openIndex = index
                        this.activeIndex = null
                    }
                    if(item.redirect && item.redirect === this.$route.path){
                        this.activeIndex = 0
                        return 
                    }
                }else{
                    this.activeIndex = index
                }
                if(this.$route.path !== item.path) this.$router.push({path: item.path})
            }
        },
        watch: {
            $route(to,from){
                if(to.path !== '/index'){
                    this.menu.forEach((item, index) => {
                        if(to.path === item.path){
                            this.openIndex = index
                            this.activeIndex = null
                            return
                        }else{
                            if(item.children) {
                                item.children.forEach((e,i) => {
                                    if(e.path === to.path) {
                                        this.openIndex = index
                                        this.activeIndex = i
                                    }else{
                                        if(e.children) {
                                            e.children.forEach((c, d) => {
                                                if(c.path === to.path){
                                                    this.openIndex = index
                                                    this.activeIndex = i
                                                }
                                            })
                                        }
                                    }
                                });
                            }
                        }
                    });
                }else{
                    this.openIndex = null
                    this.activeIndex = null
                }
                
            }
        }
    }
</script>

<style lang="less" scoped>
    .app-sideBar{
        width: 200px;
        height: 100%;
        background: #fff;
        ul{
            li{
                line-height: 4em;
                cursor: pointer;
                .menu-item{
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #303133;
                    i{
                        margin-right: 8px;
                        font-size: 18px;
                    }
                }
                .menu-item.active{
                    background: #f0f0f0;
                }
                .submenu{
                    p{
                        padding-left: 40px;
                        cursor: pointer;
                    }
                    p.active{
                        background: #409EFF;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>