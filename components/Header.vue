<template>
    <header class="header">
        <PaddingX>
            <section class="header-section">
                <div :class="isProfileMenuActive ? 'header-profile-open' : 'header-profile'">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1619633162962837504/ysIVwrUR_400x400.jpg" 
                        alt="Profile Picture" class="profile-picture" 
                        @click="onProfileClick"
                    >
                    <div class="header-title">
                        <h1>Arlen Molina</h1>
                        <h2>Web developer</h2>
                    </div>
                </div>
                <CalendlyButton class="calendly-button"/>
                <div :class="isProfileMenuClosing ? 'profile-menu-closing' : 'profile-menu'" v-if="isProfileMenuActive">
                    <DelayedDisplay :delay="500" class="links">
                        <Links class="inner-links" />
                    </DelayedDisplay>
                </div>
            </section>
        </PaddingX>
    </header>
    <DelayedDisplay :delay="1750">
        <PaddingX class="click-me">
            <Icon name="ion:arrow-up" class="click-me-icon" />
            <p class="click-me-text">Click here!</p>
        </PaddingX>
    </DelayedDisplay>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                isProfileMenuActive: false,
                isProfileMenuClosing: false,
            }
        },
        methods: {
            onProfileClick() {
                if (this.isProfileMenuActive == false)
                    this.isProfileMenuActive = true
                
                else if (this.isProfileMenuActive == true) {
                    this.isProfileMenuClosing = true

                    setTimeout(() => {
                        this.isProfileMenuActive = false
                        this.isProfileMenuClosing = false
                    }, 500)
                }
            },
        },
    }
</script>

<style lang="scss">
    @keyframes slide-down {
        from {
            transform: translate(0, -64px);
        }
        to {
            transform: translate(0, 0);
        }
    }

    @keyframes slide-right {
        from {
            transform: translate(-64px, 0);
        }
        to {
            transform: translate(0, 0);
        }
    }

    @keyframes slide-left {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(-64px, 0);
        }
    }
</style>

<style lang="scss">
    @keyframes fade-out {
        from {
            opacity: 100%;
        }
        to {
            opacity: 0%;
        }
    }
</style>

<style lang="scss" scoped>
    .header {
        height: 64px;
        background-color: black;
        color: white;
        animation: slide-down 1000ms ease-in-out;

        .header-section {
            display: flex;
            justify-content: space-between;

            .header-profile, .header-profile-open {
                display: flex;
                align-content: space-around;
                margin-top: 8px;
                margin-bottom: 8px;
                column-gap: 4px;
                background-color: black;
                padding-right: 8px;
                border-radius: 6px;
                transition: transform 500ms ease-in-out;
                transform-origin: 24px 24px;

                .profile-picture {
                    width: 48px;
                    height: 48px;
                    border-radius: 100%;
                    transition: transform 500ms ease-in-out;
                    border: solid 1px black;

                    &:hover, &:focus {
                        transform: scale(1.15, 1.15);
                    }
                }

                .header-title {
                    margin-top: auto;
                    margin-bottom: auto;
                    padding-left: 4px;

                    h1 {
                        font-size: 18px;
                    }

                    h2 {
                        font-size: 12px;
                    }
                }
            }

            .header-profile {
                transform: rotateZ(0deg);
                z-index: 99;
            }

            .header-profile-open {
                transform: rotateZ(90deg);
                z-index: 99;
            }

            .calendly-button {
                margin-top: 8px;
                margin-bottom: 8px;
                padding-left: 0;
                padding-right: 0;
            }

            .profile-menu, .profile-menu-closing {
                position: absolute;
                width: 128px;
                height: 32px;
                top: 16px;
                margin-left: 54px;
                display: flex;
            }
            .profile-menu-closing {
                animation: fade-out 500ms ease-in-out, slide-left 500ms ease-in-out;
            }
        }
    }

    .click-me {
        position: absolute;
        animation: fade-in 1000ms ease-in-out;

        .click-me-icon {
            margin-left: 15px;
        }

        .click-me-text {
            margin-left: -15px;
        }
    }
</style>