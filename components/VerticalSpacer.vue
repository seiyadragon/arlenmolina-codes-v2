<template>
    <div class="spacer">
        <div class="spacer-line"></div>
        <DelayedDisplay :delay="1000" v-if="showScrollDown">
            <h2 class="sub-subtitle instruction">Scroll Down</h2>
        </DelayedDisplay>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            height: Number,
            showScrollDown: Boolean,
        }
    }
</script>

<style lang="scss">
    @keyframes bounce {
      25% {
        transform: scale(calc(var(--s,1) + 0.2));
      }
      50% {
        transform: scale(calc(var(--s,1) - 0.1));
      }
      75% {
        transform: scale(calc(var(--s,1) + 0.1));
      }
      100% {
        transform: scale(var(--s,1));
      }
    }

    @keyframes pulse {
        0% {
            color: black;
        }
        50% {
            color: orange;
        }   
        100% {
            color: black;
        }
    }
</style>

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
                border: none;
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

        .instruction {
            text-align: center;
            margin-top: 128px;
            animation: bounce 500ms linear, pulse 3000ms infinite ease-in-out;
        }
    }
</style>