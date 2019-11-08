src：
    api         存放http请求相关的文件
        http.js   封装axios，开发文件中直接引入http.js，参考api/user.js
        urls.js   存放所有http请求url，分模块管理，例：user模块
        user.js   模块案例
    assets      存放图片，全局样式，elementUI样式修改需要在全局样式下
    components  存放全局/通用组件
        header     头部面包屑导航，导入src/router/routeFilter.js，routeFilter(this.$route.path)返回navList
        sideBar    左侧菜单栏，导入src/router/route - { routes } ，根据当前路由this.$route.path与routes对比得出当前激活的路由（防止用户强制刷新时丢失激活的菜单项）
    pages       每个模块单独建文件夹
    router      路由文件
        index.js         路由总入口 
        route.js         路由入口文件，routes为左边菜单栏路由（一、二级）+ 三级路由，otherRoutes为其他路由，严格控制路由入口
        routeFilter.js   导入{ routes, otherRouted }，处理头部面包屑导航
    store       vuex模块化，参考store/modules/demo，一个模块对应一个store文件，全局（跨模块）状态放在appStore.js中
    utils       存放其他全局(工具类)文件：filter、mixins、js模块等
    APP.vue     全局组装Header & Sidebar & router-view
    main.js     入口文件，已全局引入element-ui
    
    
    
    





