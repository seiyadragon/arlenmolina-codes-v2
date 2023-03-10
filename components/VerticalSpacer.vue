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
        },
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
            color: white;
        }
        50% {
            color: purple;
        }   
        100% {
            color: white;
        }
    }

    @keyframes move-up {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(0, 100%);
        }
    }
    @keyframes move-up-2 {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(0, 200%);
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
                height: v-bind('`${height !== undefined ? height / 2.4 : height}px`');
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
        height: v-bind('`${height !== undefined ? height / 2.4 : height}px`');
        animation: grow 500ms ease-in-out;
        transition: height 500ms ease-in-out;

        @media (min-width: 720px) {
            height: v-bind('`${height !== undefined ? height / 1.5 : height}px`');
        }

        @media (min-width: 1080px) {
            height: v-bind('`${height !== undefined ? height / 0.95 : height}px`');
        }
        
        .spacer-line {
            width: 6px;
            height: 50%;
            background-color: white;
            margin-left: auto;
            margin-right: auto;
            transform: translate(0, 50%);
            border-radius: 100%;

            &::before {
                width: 6px;
                height: 20%;
                background-color: #ff663a;
                margin-left: auto;
                margin-right: auto;
                content: "";
                display: block;
                border: none;
                transition: transform 500ms ease-in-out;
                transform: translate(0, 100%);
                animation: move-up 1500ms ease-in-out;
            }

            &::after {
                width: 6px;
                height: 20%;
                background-color: #ff663a;
                margin-left: auto;
                margin-right: auto;
                content: "";
                display: block;
                transition: transform 500ms ease-in-out;
                transform: translate(0, 200%);
                animation: move-up-2 1500ms ease-in-out;
            }
        }

        .instruction {
            text-align: center;
            animation: bounce 500ms linear, pulse 3000ms infinite ease-in-out;
            margin-top: 48px;

            @media (min-width: 720px) {
                margin-top: 128px;
            }
        }
    }
</style>