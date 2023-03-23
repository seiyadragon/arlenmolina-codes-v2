<template>
    <div class="hook-wrapper">
        <h1 class="title">Your website can be easy</h1>
        <h3 class="sub-subtitle">{{ `
            I understand the hours it's taken you to hone your skills
        ` }}</h3>
        <h3 class="sub-subtitle">{{ `
            However, many businesses still suffer from poorly designed websites
        ` }}</h3>
        <h3 class="sub-subtitle">{{ `
            Don't let it be a liability, turn it into an asset!
        ` }}</h3>
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
    }

</style>