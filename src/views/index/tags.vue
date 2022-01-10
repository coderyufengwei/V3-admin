<template>
    <div></div>
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
    console.log('onBeforeMount');
});

onMounted(() => {
    console.log('onMounted');
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
});

onUpdated(() => {
    console.log('onUpdated');
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
});

onUnmounted(() => {
    console.log('onUnmounted');
});
</script>
<style scoped lang="less">

</style>