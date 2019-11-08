<template>
  <div class="content">
    <div class="layout">
      <Sidebar/>
      <section>
        <Header/>
        <keep-alive>
          <div class="main">
            <router-view />
          </div>
        </keep-alive>
      </section>
    </div>
    <!-- <div>
      <div class="main1">
        <router-view />
      </div>
    </div> -->
  </div>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
export default {
  name: 'App',
  components: { Header, Sidebar }
}
</script>

<style lang='less' scoped>
  .content {
    width: 100%;
    height: 100%;
    .layout{
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
    }
    section{
      width: calc(100% - 200px);
      height: 100%;
      position: relative;
      .main{
        height: calc(100% - 60px);
        box-sizing: border-box;
        background: #f7f7f7;
        padding: 15px;
        box-shadow: 0 2px 4px inset rgba(0,0,0,0.1)
      }
    }
  }
  
</style>
