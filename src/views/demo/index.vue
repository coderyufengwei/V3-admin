<template>
    <el-menu
        :default-active="active"
        class="sidebar-menu"
        background-color="#f9f9f9"
        text-color="#565656"
        unique-opened
        router
        active-text-color="#0079fe"
        :collapse="isCollapse"
        @select="handleSelect"
    >
        <template v-for="item in menuList">
            <template v-if="item.children && item.level == 0">
                <el-submenu :index="String(item.id)" :key="item.id">
                    <template #title>
                        <i
                            class="el-icon-s-order"
                            style="margin-right: 5px; font-size: 20px"
                        ></i>
                        <span>{{ item.menuName }}</span>
                    </template>
                    <el-menu-item
                        v-for="(items, i) in item.children"
                        :key="i"
                        :index="items.menuUrl"
                        :route="`/${items.menuUrl}`"
                        :to="items.id"
                    >
                        {{ items.menuName }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <template v-if="item.children && item.level == 0">
                    <el-submenu :index="String(item.id)" :key="item.id">
                        <template #title>
                            <i
                                class="el-icon-s-order"
                                style="margin-right: 5px; font-size: 20px"
                            ></i>
                            <span>{{ item.menuName }}</span>
                        </template>
                        <el-menu-item
                            v-for="(items, i) in item.children"
                            :key="i"
                            :index="items.menuUrl"
                            :route="`/${items.menuUrl}`"
                            :to="items.id"
                        >
                            {{ items.menuName }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item
                        :index="item.menuUrl"
                        :route="`/${item.menuUrl}`"
                        :key="item.id"
                        :to="item.id"
                    >
                        {{ item.menuName }}
                    </el-menu-item>
                </template>
            </template>
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
import {
    ref,
    reactive,
    computed,
    watch,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
} from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    console.log("onBeforeMount");
});

onMounted(() => {
    console.log("onMounted");
});

onBeforeUpdate(() => {
    console.log("onBeforeUpdate");
});

onUpdated(() => {
    console.log("onUpdated");
});

onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
});

onUnmounted(() => {
    console.log("onUnmounted");
});
</script>
<style scoped lang="less"></style>
