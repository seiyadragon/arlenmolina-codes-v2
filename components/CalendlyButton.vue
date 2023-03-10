<template>
    <div :class="fullButton ? 'calendly-button-wrapper' : 'small-calendly-button-wrapper'">
        <h2 v-if="fullButton" class="subtitle">Are you ready to take your website to the next level?</h2>
        <CalendlyPopupButton v-if="calendlyRoot !== undefined" v-bind="calendlyOptions" :root-element="calendlyRoot" class="calendly-button"/>
        <div ref="calendlyRoot"></div>
    </div>
</template>

<script lang="ts">
    export default {
        setup() {
            const calendlyRoot = ref()
            const calendlyOptions = {
                url: 'https://calendly.com/arlenmolina101/web-discussion',
                text: 'Schedule a call!',
            }
            
            return {
                calendlyRoot,
                calendlyOptions,
            }
        },
        props: {
            fullButton: Boolean
        }
    }
</script>

<style lang="scss">
    .calendly-button-wrapper {
        padding-top: 16px;
        padding-bottom: 24px;
        animation: fade-in 1000ms ease-in-out, slide-down 1000ms ease-in-out;

        .calendly-button {
            width: 100%;
            height: 160px;
            border-radius: 6px;
            border: solid 1px white;
            background-color: #ff663a;
            font-family: 'Tilt Warp';
            font-size: 46px;
            margin-top: 8px;
            margin-bottom: 8px;
            transition: background-color 500ms ease-in-out;

            &:hover, &:focus {
                background-color: red;
            }
        }
    }

    .small-calendly-button-wrapper {
        animation: fade-in 1000ms ease-in-out;
        display: flex;
        align-content: center;

        .calendly-button {
            width: 100%;
            height: 34px;
            border-radius: 6px;
            border: solid 1px white;
            background-color: black;
            font-family: 'Tilt Warp';
            font-size: 14px;
            transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out, background-color 500ms ease-in-out;
            margin-top: auto;
            margin-bottom: auto;
            animation: fade-in 1000ms ease-in-out;

            &:hover, &:focus {
                background-color: red;
            }
        }
    }
</style>