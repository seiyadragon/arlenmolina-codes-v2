<template>
    <div class="page-container">
        <DelayedDisplay :delay="500" ref="firstElementRef">
            <VerticalSpacer :height="vSpacerHeight" />
            <Hook />
            <VerticalSpacer :height="vSpacerHeight" :show-scroll-down="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight) < 85"/>
        </DelayedDisplay>
        <DisplayOnScroll :current-scroll="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight)" :show-scroll="85" class="headache">
            <h2 class="subtitle">Don't give yourself a headache!</h2>
            <h3 class="sub-subtitle"> {{ `
                I know how painful making websites can be. 
            ` }} </h3>
            <h3 class="sub-subtitle"> {{ `
                They can be buggy, unresponsive, or just plain not work!
            ` }} </h3>
            <h3 class="sub-subtitle"> {{ `
                There can be a lot of different resources to leverage such as tools and technologies, web builders, code, etc...
            ` }} </h3>
            <h3 class="sub-subtitle"> {{ `
                Which can make it difficult for people to know where to even begin.
            ` }}</h3>
            <h3 class="sub-subtitle"> {{ `
                And especially if you're trying to code one without any previous experience, forget about it.
            ` }} </h3>
            <h3 class="sub-subtitle"> {{ `
                Web apps can take significantly more work and require more advanced tools, such as programming.
            ` }} </h3>
            <h3 class="sub-subtitle"> {{ `
                But do not worry! I will save you the time and the headache of having to make your own website.
            ` }} </h3>
            <h3 class="sub-subtitle"> {{ `
                Let's work together in order to build the website of your dreams!
            ` }} </h3>
            <VerticalSpacer :height="vSpacerHeight" />
        </DisplayOnScroll>
        <DisplayOnScroll :current-scroll="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight)" :show-scroll="windowHeight < 900 ? 995 : 627">
            <CalendlyButton :full-button="true"/>
            <VerticalSpacer :height="vSpacerHeight" />
        </DisplayOnScroll>
        <DisplayOnScroll :current-scroll="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight)" :show-scroll="windowHeight < 900 ? 1886 : 1414">
            <section class="project-section-wrapper">
                <h2 class="subtitle">Not convinced?</h2>
                <h3 class="sub-subtitle">Check out some of the previous websites I've worked on!</h3>
                <div class="project-section">
                    <div class="project-container">
                        <ProjectLink link="https://artelligenceapp.vercel.app" image="/artelligence.png"/>
                        <ProjectLink link="https://better-self.vercel.app" image="/better-self.png"/>
                    </div>
                    <div class="project-container">
                        <ProjectLink link="https://scrollhub-v2.vercel.app" image="/scrollhub.png"/>
                    </div>
                </div>
            </section>
            <VerticalSpacer :height="vSpacerHeight" />
        </DisplayOnScroll>
        <DisplayOnScroll :current-scroll="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight)" :show-scroll="2541" class="learning">
            <h2 class="subtitle">Want to learn more about websites?</h2>
            <div class="spacing">
                <h3 class="sub-subtitle"> {{ `
                    Here are the basics!
                ` }} </h3>
                <h3 class="sub-subtitle"> {{ `
                    When designing a website, there are several key factors to consider in 
                    order to create a visually appealing and effective user experience. 
                    These include typography, color theory, contrasting colors, and alignment.
                ` }} </h3>
                <h3 class="sub-subtitle"> {{ `
                    Typography refers to the font styles and sizes used throughout the website. 
                    It's important to choose fonts that are legible and easy to read, as well as 
                    consistent throughout the site. Additionally, font size should be appropriately 
                    adjusted for headings, subheadings, and body text to ensure a clear hierarchy.
                ` }} </h3>
                <h3 class="sub-subtitle"> {{ `
                    Color theory is also an important consideration. The right color scheme can 
                    enhance the overall look and feel of the website, while a poor choice can make 
                    it difficult to navigate and unappealing to visitors. Choosing complementary 
                    colors and contrasting shades can help draw attention to important elements, 
                    such as calls to action or navigation menus.
                ` }} </h3>
                <h3 class="sub-subtitle"> {{ `
                    Contrasting colors can also help to make certain elements stand out, such as buttons 
                    or links, making them easier for users to identify and interact with. A good rule of 
                    thumb is to use colors that are on opposite sides of the color wheel, such as blue and 
                    orange or green and red.
                ` }} </h3>
                <h3 class="sub-subtitle"> {{ `
                    Alignment is another key factor in website design. Proper alignment ensures that all 
                    elements on the page are visually connected and cohesive, creating a sense of balance 
                    and order. This can be achieved through the use of grids or other layout tools to ensure 
                    that elements are aligned both horizontally and vertically.
                ` }} </h3>
                <h3 class="sub-subtitle"> {{ `
                    Overall, a well-designed website should take into account these factors to create a 
                    visually appealing and user-friendly experience for visitors.
                ` }} </h3>
            </div>
            <VerticalSpacer :height="vSpacerHeight" />
        </DisplayOnScroll>
        <DisplayOnScroll :current-scroll="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight)" :show-scroll="2741">
            <CalendlyButton :full-button="true" full-button-text="Are you ready now?"/>
            <VerticalSpacer :height="vSpacerHeight" />
        </DisplayOnScroll>
        <DisplayOnScroll :current-scroll="pageScrollY * (MAX_WINDOW_HEIGHT / windowHeight)" :show-scroll="4000">
            <Footer />
        </DisplayOnScroll>
    </div>
</template>

<script lang="ts">
    export default {
        setup() {
            let vSpacerHeight = 360
            let pageScrollY = ref(0)
            let windowHeight = ref(0)

            let MAX_WINDOW_HEIGHT = 1080

            if(process.client) {
                window.onscroll = () => {
                    pageScrollY.value = document.documentElement.scrollTop

                    console.log(pageScrollY.value * (1000 / windowHeight.value))
                }

                windowHeight.value = window.innerHeight

                window.onresize = () => {
                    windowHeight.value = window.innerHeight
                }
            }

            return {
                vSpacerHeight,
                pageScrollY,
                windowHeight,
                MAX_WINDOW_HEIGHT,
            }
        },
        mounted() {
            if (process.client) {
                let scroll = this.$route.query.scroll
                
                if (scroll !== undefined && scroll !== null)
                    var scrollNumber = parseInt(scroll.toString())

                function slowScroll(obj: any) {
                    setTimeout(() => {
                        if (document.documentElement.scrollTop < scrollNumber) {
                            document.documentElement.scrollTop++
                            slowScroll(obj)
                        }
                    }, 1)
                }

                if (scroll) {
                    slowScroll(this)
                }
            }
        },
    }
</script>

<style lang="scss">
    .spacing {
        white-space: pre-line;
    }

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

    .learning {
        animation: fade-in 1000ms ease-in-out, slide-down 1000ms ease-in-out;
    }

    .title {
        font-family: 'Tilt Warp';
        font-size: 56px;
        color: white;
    }

    .subtitle {
        font-family: 'Tilt Warp';
        font-size: 36px;
        color: white;
        margin-top: 4px;
        margin-bottom: 4px;
    }

    .sub-subtitle {
        font-size: 20px;
        color: white;
    }

    .headache {
        animation: fade-in 1000ms ease-in-out, slide-down 1000ms ease-in-out;
    }

    .page-container {
        min-height: 101vh;
    }
</style>