import { routes, otherRoutes } from './routes';
const arr = [...routes,...otherRoutes];

const routerFilter = (path) => {
    for(let item of arr){
        if(path.includes(item.path)) {
            if(path === item.path) return item.meta.navList
            else{
                if(item.children){
                    for(let i of item.children){
                        if(path === i.path) return i.meta.navList
                        else{
                            if(i.children){
                                for(let c of i.children) {
                                    if(path === c.path) return c.meta.navList
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
export default routerFilter;