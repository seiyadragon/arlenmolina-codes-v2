<template>
    <div class="hook-wrapper">
        <h1 class="title">Websites don't have to be difficult!</h1>
        <h3 class="sub-subtitle">
            Tired of dealing with templates and plugins?
            Don't make it hard on yourself.
            I will turn your ideas into a reality with the power of programming and no-code solutions.
            Get in contact with me today to see if a web developer is the best fit for your business!
        </h3>
    </div>
</template>

<style lang="scss">
    @keyframes fade-in {
        from {
            opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }
</style>

<style lang="scss" scoped>
    .hook-wrapper {
        animation: fade-in 1000ms ease-in-out;
        border-radius: 12px;
        padding-top: 8px;
        padding-bottom: 8px;

        .title {
            font-family: 'Tilt Warp';
            font-size: 56px;
            color: orange;
            text-shadow: 3px 3px black;
        }

        .sub-subtitle {
            font-size: 20px;
        }
    }

</style>