<template>
        <div>
            <slot v-if="shouldLoadContent" />
        </div>
</template>

<script lang="ts">
    export default {
        props: {
            delay: Number,
        },
        data() {
            return {
                shouldLoadContent: false,
            }
        },
        mounted() {
            setTimeout(() => {
                this.shouldLoadContent = true
            }, this.delay)
        }
    }
</script>