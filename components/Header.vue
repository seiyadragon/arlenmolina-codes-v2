<template>
    <header class="header">
        <PaddingX>
            <section class="header-section">
                <div class="header-profile">
                    <img src="https://pbs.twimg.com/profile_images/1619633162962837504/ysIVwrUR_400x400.jpg" alt="Profile Picture" class="profile-picture">
                    <div class="header-title">
                        <h1>Arlen Molina</h1>
                        <h2>Web developer</h2>
                    </div>
                </div>
            </section>
        </PaddingX>
    </header>
</template>

<style lang="scss">
    @keyframes slide-down {
        from {
            transform: translate(0, -64px);
        }
        to {
            transform: translate(0, 0);
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

            .header-profile {
                display: flex;
                align-content: space-around;
                margin-top: 8px;
                margin-bottom: 8px;
                column-gap: 4px;

                .profile-picture {
                    width: 48px;
                    height: 48px;
                    border-radius: 100%;
                }

                .header-title {
                    margin-top: auto;
                    margin-bottom: auto;

                    h1 {
                        font-size: 18px;
                    }

                    h2 {
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>