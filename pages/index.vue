<template>
    <div>
        <DelayedDisplay :delay="750">
            <Hook />
        </DelayedDisplay>
        <DelayedDisplay :delay="1750">
            <section class="project-section-wrapper">
                <h2 class="subtitle">Check out some of these sites!</h2>
                <div class="project-section">
                    <div class="project-container">
                        <ProjectLink link="https://artelligenceapp.vercel.app" image="/artelligence.png"/>
                        <ProjectLink link="https://better-self.vercel.app" image="/better-self.png"/>
                    </div>
                </div>
            </section>
        </DelayedDisplay>
        <DelayedDisplay :delay="2750">
            <div class="calendly-button-wrapper">
                <h2 class="subtitle">Are you ready to take your website to the next level?</h2>
                <CalendlyPopupButton v-bind="calendlyOptions" :root-element="rootElement" class="calendly-button"/>
            </div>
        </DelayedDisplay>
        <div ref="rootElement"/>
    </div>
    
</template>

<script lang="ts">
    export default {
        setup() {
            const rootElement = ref()
            const calendlyOptions = {
                url: 'https://calendly.com/arlenmolina101/web-discussion',
                text: 'Schedule a meeting!',
            }
            
            return {
                rootElement,
                calendlyOptions,
            }
        },
    }
</script>

<style lang="scss">
    .project-section-wrapper {
        padding-top: 8px;
        padding-bottom: 8px;
        animation: fade-in 1000ms ease-in-out, slide-down 1000ms ease-in-out;
        margin-top: 8px;

        .project-section {
            display: flex;
            flex-direction: column;
            row-gap: 22px;
            margin-top: 8px;
        }

        .project-container {
            display: flex;
            column-gap: 32px;

            @media (max-width: 800px) {
                flex-wrap: wrap;
                row-gap: 22px;    
            }
        }    
    }

    .title {
        font-family: 'Tilt Warp';
        font-size: 56px;
        color: orange;
        text-shadow: 3px 3px black;
    }

    .subtitle {
        font-family: 'Tilt Warp';
        font-size: 36px;
        color: orange;
        text-shadow: 3px 3px black;
    }

    .sub-subtitle {
        font-size: 20px;
    }

    .calendly-button-wrapper {
        padding-top: 16px;
        padding-bottom: 24px;
        animation: fade-in 1000ms ease-in-out;

        .calendly-button {
            width: 100%;
            height: 160px;
            border-radius: 6px;
            border: solid 1px black;
            background-color: orange;
            font-family: 'Tilt Warp';
            font-size: 36px;
            margin-top: 8px;
            margin-bottom: 8px;
            transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out, background-color 500ms ease-in-out;

            &:hover, &:focus {
                transform: translate(-5px, -5px);
                box-shadow: 10px 10px black;
                background-color: gold;
            }
        }
    }
</style>