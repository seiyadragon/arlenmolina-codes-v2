<template>
    <div class="page-container">
        <DelayedDisplay :delay="500" ref="firstElementRef">
            <VerticalSpacer :height="vSpacerHeight" />
            <Hook />
            <VerticalSpacer :height="vSpacerHeight" :show-scroll-down="pageScrollY < 55"/>
        </DelayedDisplay>
        <LazyDelayedDisplay :delay="0" v-if="pageScrollY > 10" class="headache">
            <h2 class="subtitle">Don't give yourself a headache!</h2>
            <h3 class="sub-subtitle">{{ `
                I know how painful making websites can be. They can be buggy, unresponsive, or just plain not work!
                There can be a lot of different resources to leverage such as tools and technologies, web builders, code, etc...
                Which can make it difficult for people to know where to even begin.
                And especially if you're trying to code one without any previous experience, forget about it.
                Web apps can take significantly more work and require more advanced tools, such as programming.
                But do not worry! I will save you the time and the headache of having to make your own website.
                Let's work together in order to build the website of your dreams!
            ` }}</h3>
            <VerticalSpacer :height="vSpacerHeight" />
        </LazyDelayedDisplay>
        <LazyDelayedDisplay :delay="0" v-if="pageScrollY >= 500">
            <section class="project-section-wrapper">
                <h2 class="subtitle">Check out some of these sites!</h2>
                <div class="project-section">
                    <div class="project-container">
                        <ProjectLink link="https://artelligenceapp.vercel.app" image="/artelligence.png"/>
                        <ProjectLink link="https://better-self.vercel.app" image="/better-self.png"/>
                    </div>
                </div>
            </section>
            <VerticalSpacer :height="vSpacerHeight" />
        </LazyDelayedDisplay>
        <LazyDelayedDisplay :delay="0" v-if="pageScrollY >= 1170">
            <CalendlyButton :full-button="true"/>
            <VerticalSpacer :height="vSpacerHeight" />
        </LazyDelayedDisplay>
        <LazyDelayedDisplay :delay="0" v-if="pageScrollY >= 1670">
            <Footer />
        </LazyDelayedDisplay>
    </div>
</template>

<script lang="ts">
    export default {
        setup() {
            let vSpacerHeight = 360
            let pageScrollY = ref(0)

            if(process.client) {
                window.onscroll = () => {
                    pageScrollY.value = document.documentElement.scrollTop

                    console.log(pageScrollY.value)
                }
            }

            return {
                vSpacerHeight,
                pageScrollY,
            }
        },
        mounted() {
            document.documentElement.scrollTop = (this.$refs.firstElementRef as HTMLDivElement).scrollTop
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

    .headache {
        animation: fade-in 1000ms ease-in-out, slide-down 1000ms ease-in-out;
    }

    .page-container {
        min-height: 101vh;
    }
</style>