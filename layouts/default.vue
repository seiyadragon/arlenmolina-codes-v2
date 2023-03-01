<template>
    <main>
        <Header />
        <PaddingX class="padding-x">
            <div>
                <slot />
            </div>
        </PaddingX>
        <DelayedDisplay :delay="3750">
            <div ref="footerRef">
                <Footer />
            </div>
        </DelayedDisplay>
    </main>
</template>

<script lang="ts">
    export default {
        mounted() {
            setTimeout(() => {
                let el = this.$refs.footerRef as Element
                el.scrollIntoView({behavior: 'smooth'})
            }, 4750);
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Tilt Warp');
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');

    * {
        margin: 0;
        font-family: 'Ubuntu';
    }

    body {
        margin: 0;
        overflow-x: hidden;
        background-color: white;
    }

    main {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    ::-webkit-scrollbar {
        position: absolute;
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        position: absolute;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        position: absolute;
        background-color:  #666;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #777;
    }
</style>