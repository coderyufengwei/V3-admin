<template>
    <div>
        <h1>登录页</h1>
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
} from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const count = ref(1);
const data = reactive({});
const plus = computed({
    get: () => count.value + 1,
    set: (val) => {
        count.value = val - 1;
    },
});

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
