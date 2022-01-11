import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Apple } from "@element-plus/icons-vue";//图标需要分开导入，按需导入图标
import { ElMenu, ElSubMenu, ElMenuItem, ElIcon, ElContainer, ElHeader, ElFooter, ElAside, ElMain } from 'element-plus';   //按需导入

const app = createApp(App);

app.component('ElMenu', ElMenu);
app.component('ElSubMenu', ElSubMenu);
app.component('ElMenuItem', ElMenuItem);
app.component('ElIcon', ElIcon);
app.component('ElContainer', ElContainer);
app.component('ElHeader', ElHeader);
app.component('ElFooter', ElFooter);
app.component('ElAside', ElAside);
app.component('ElMain', ElMain);

// element-plus图标
app.component('Apple', Apple);

app.use(store).use(router)/* .use(ElementPlus) */.mount('#app')
