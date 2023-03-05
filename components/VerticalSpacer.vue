<template>
    <div class="spacer">
        <div class="spacer-line"></div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            height: Number,
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes grow {
        from {
            height: 0px;
        }
        to {
            @media (max-width: 720px) {
                height: v-bind('`${height !== undefined ? height / 2.25 : height}px`');
            }

            @media (min-width: 720px) {
                height: v-bind('`${height !== undefined ? height / 1.5 : height}px`');
            }

            @media (min-width: 1080px) {
                height: v-bind('`${height !== undefined ? height / 0.95 : height}px`');
            }
        }
    }
    .spacer {
        height: v-bind('`${height !== undefined ? height / 2.25 : height}px`');
        animation: grow 500ms ease-in-out;
        transition: height 500ms ease-in-out;

        @media (min-width: 720px) {
            height: v-bind('`${height !== undefined ? height / 1.5 : height}px`');
        }

        @media (min-width: 1080px) {
            height: v-bind('`${height !== undefined ? height / 0.95 : height}px`');
        }
        
        .spacer-line {
            width: 3px;
            height: 50%;
            background-color: black;
            margin-left: auto;
            margin-right: auto;
            transform: translate(0, 50%);

            &::before {
                width: 3px;
                height: 20%;
                background-color: white;
                margin-left: auto;
                margin-right: auto;
                content: "";
                display: block;
                transform: translate(0, 100%);
            }

            &::after {
                width: 3px;
                height: 20%;
                background-color: white;
                margin-left: auto;
                margin-right: auto;
                content: "";
                display: block;
                transform: translate(0, 200%);
            }
        }
    }
</style>