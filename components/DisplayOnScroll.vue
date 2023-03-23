<template>
    <div v-if="currentScroll !== undefined && showScroll !== undefined && currentScroll >= showScroll">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    let props = defineProps({
        currentScroll: Number,
        showScroll: Number,
    })
</script>