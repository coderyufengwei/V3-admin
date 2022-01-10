<template>
    <el-container class="main-box">
        <el-aside class="aside">
            <div class="logo">coderyufengwei</div>
            侧栏
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
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
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
