<template>
  <div class="demo">
     Demo: {{state01}} 
     <button @click="change">change</button>
     <button @click="change1">changeInActions</button>
     <button @click="jump">jump</button>
     <p>
         现在时间：{{ new Date() | dateTransfer('-')}}
     </p>
     <p>状态：{{ 2 | statusFilter}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { getUserInfo, postInfo } from '../../api/user';
import { dateTransfer, statusFilter } from '../../utils/filter';
export default {
    filters: {
        dateTransfer, statusFilter
    },
    data() {
        return {
            
        }
    },
    computed:{ 
        ...mapGetters('demo',{
            state01: 'getState01'
        }),
        // ...mapState({
        //     state01: state => state.demo.state01,
        // })
    },
    methods: {
        ...mapActions('demo',[ 
          'state01', 'getUser'
        ]),
        change(){
            this.$store.dispatch('demo/state01','456') 
            const res = postInfo({name: '456'})   // 1.直接引入api调接口
        },
        async change1(){
            localStorage.setItem('user', JSON.stringify({ age: 16, id: '666666' }))
            await this.getUser({name: '123'})        // 2.从store中的actions中调接口
        },
        jump(){
            this.$router.push({path: '/config/list/detail'})
        }
    }
}
</script>

<style lang="less" scoped>
    .demo{
        width: 100%;
        height: 100%;
        background: #f8f8f8;
    }
</style>
