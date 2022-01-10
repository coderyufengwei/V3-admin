<template>
    <el-container class="main-box">
        <el-aside class="aside">
            <div class="logo">coderyufengwei</div>
            <MySlide />
        </el-aside>
        <el-container class="r-box">
            <el-header class="header">头部</el-header>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
            <el-footer class="footer">底部</el-footer>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import MySlide from "./slide.vue";
import { menu } from "./menu";
import { computed,toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore, } from "vuex";

console.log(menu);

const router = useRouter();
const route = useRoute();
const store = useStore();

store.dispatch("GETMENU", menu);

</script>

<style  lang="less">
.main-box {
    height: 100vh;
    width: 100vw;
}
.aside {
    background: #f1f3f4;
    height: 100%;
    .logo {
        background: #fff;
        height: 60px;
        line-height: 60px;
        color: tomato;
        font-size: 24px;
        text-align: center;
    }
}
.r-box {
    .header {
        background: #f1f3f4;
    }

    .main {
    }

    .footer {
        background: #f1f3f4;
    }
}
</style>
