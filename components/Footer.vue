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
                    <div class="links">
                        <a href="https://twitter.com/arlenmolina101">
                            <Icon name="ion:logo-twitter" />
                            twitter
                        </a>
                        <a href="https://www.instagram.com/arlenmolina101/">
                            <Icon name="ion:logo-instagram" />
                            instagram
                        </a>
                        <a href="https://www.linkedin.com/in/arlen-molina-423159183/">
                            <Icon name="ion:logo-linkedin" />
                            linkedin
                        </a>
                        <a href="https://github.com/seiyadragon">
                            <Icon name="ion:logo-github" />
                            github
                        </a>
                        <a href="https://codepen.io/seiyadragon">
                            <Icon name="ion:logo-codepen" />
                            codepen
                        </a>
                    </div>
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
                        }, 50)
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

            h1, .links {
                text-align: center;
            }

            .links {
                display: flex;
                flex-direction: column;

                a {
                    text-decoration: none;
                    margin-top: 3px;
                    margin-bottom: 3px;
                    display: inline-block;
                    position: relative;
                    max-width: 20%;
                    left: 40%;

                    &::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        transform: scaleX(0);
                        height: 1px;
                        bottom: 0;
                        left: 0;
                        background-color: black;
                        transform-origin: bottom right;
                        transition: transform 500ms ease-in-out;
                        animation: fadeout 500ms ease-in-out;
                    }

                    &:hover::after {
                        transform: scale(1);
                        transform-origin: bottom left;
                        animation: fadein 500ms ease-in-out;
                    }
                }
            }

            .footer-section {
                width: 50%;
            }
        }
    }
</style>