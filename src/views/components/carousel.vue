<template>
    <div>
        <h1>carousel</h1>
    </div>
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
} from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
    /**
    * 生命周期函数--组件挂载前
    */
});

onMounted(() => {
    /**
    * 生命周期函数--组件挂载完成
    */
});

onBeforeUpdate(() => {
    /**
    * 生命周期函数--组件更新前
    */
});

onUpdated(() => {
    /**
    * 生命周期函数--组件更新完成
    */
});

onBeforeUnmount(() => {
    /**
    * 生命周期函数--组件销毁前
    */
});

onUnmounted(() => {
    /**
    * 生命周期函数--组件销毁完成
    */
});
</script>
<style scoped lang="less">

</style>