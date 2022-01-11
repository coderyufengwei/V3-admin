<template>
    <!-- 递归子菜单 -->
    <template v-for="(item, index) of menuList" :key="item.id">
        <!-- 判断有无子组件，有的为submenu，且需要继续调用本组件 -->
        <el-sub-menu v-if="item.hasChildren" :index="item.id">
            <template #title>
                <el-icon><apple /></el-icon>
                <span>{{ item.name }}</span>
            </template>
            <!-- 调用子组件，传入需要递归的数据 -->
            <SlideItem :menuList="item.children"></SlideItem>
        </el-sub-menu>
        <!-- 没有子组件，直接渲染最后一级菜单 -->
        <el-menu-item v-else :index="item.id">
            <template #title>
                <el-icon><apple /></el-icon>
                <span>{{ item.name }} </span>
            </template>
        </el-menu-item>
    </template>
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
    defineProps,
    toRaw,
} from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const props = defineProps({
    menuList: Array,
});
const menuList = toRaw(props.menuList);

onBeforeMount(() => {});

onMounted(() => {});

onBeforeUpdate(() => {});

onUpdated(() => {});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>
<style scoped lang="less"></style>
