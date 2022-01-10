<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        default-active="1"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
        <SlideItem :menuList="storeMenu"/>
        <!-- <el-sub-menu
            index="1"
            v-for="(item, index) in storeMenu"
            :key="item.id"
        >
            <template #title>
                <el-icon><apple /></el-icon>
                <span>{{ item.name }}</span>
            </template>
            <el-menu-item index="1-1" v-for="(v,i) in item.children"
                ><el-icon> <apple /> </el-icon>{{v.name}}</el-menu-item
            >
        </el-sub-menu> -->
    </el-menu>
</template>

<script lang="ts" setup>
import SlideItem from "./slideItem.vue";
import { ref, toRaw } from "vue";
import { Apple } from "@element-plus/icons-vue";
import { useStore } from "vuex";

const store = useStore();
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const storeMenu = toRaw(store.state.menu.menu);
console.log("menu", storeMenu);
</script>

<style></style>
