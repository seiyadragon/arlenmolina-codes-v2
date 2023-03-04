<template>
    <div class="footer">
        <PaddingX class="footer-padding">
            <div class="footer-content">
                <section class="footer-section">
                    <h1>About</h1>
                    <p>{{ displayedAbout }}</p>
                </section>
                <section class="footer-section">
                    <h1>Links</h1>
                    <Links :link-labels="true"/>
                </section>
            </div>
        </PaddingX>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                fullAbout: `
                    I'm a programmer with several years of experience. I started
                    at the age of 14, around the time I was in 8th grade. I really
                    liked to play videogames, and decided to make some. And that's 
                    how my story begins. Since that time I've worked on many web
                    projects, both front-end and back-end. I am profficient in several
                    programming languages and frameworks, as well as SEO, and social
                    media management. Fun fact, I was born in Cuba y tambien se hablar 
                    Español. 🇨🇺
                `.replaceAll('\n', '').replaceAll(/\s\s+/g, ' '),
                displayedAbout: "",
                displayedCharsCounter: 0,
            }
        },
        mounted() {
            this.displayAbout()
        },
        methods: {
            displayAbout() {
                if (this.displayedAbout.length < this.fullAbout.length) {
                    this.displayedAbout = this.displayedAbout.concat(this.fullAbout.charAt(this.displayedCharsCounter))
                    this.displayedCharsCounter++

                    if (this.displayedAbout.length < this.fullAbout.length) {
                        setTimeout(() => {
                            this.displayAbout()
                        }, 10)
                    }
                }
            },
        },
    }
</script>

<style lang="scss">
    @keyframes slide-up {
        from {
            transform: translate(0, 6px);
        }
        to {
            transform: translate(0, 0);
        }
    }
</style>

<style lang="scss" scoped>
    .footer {        
        animation: slide-up 1000ms ease-in-out, fade-in 1000ms ease-in-out;
        .footer-padding {
            .footer-content {
                display: flex;
                justify-content: space-between;
                border-top: 1px solid black;
                border-left: 1px solid black;
                border-right: 1px solid black;
                padding: 8px;
                border-top-right-radius: 6px;
                border-top-left-radius: 6px;
            }

            h1 {
                text-align: center;
            }

            .footer-section {
                width: 50%;
            }
        }
    }
</style>