<template>
    <main>
        <Header />
        <PaddingX class="padding-x">
            <div>
                <slot />
            </div>
        </PaddingX>
    </main>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Tilt Warp');
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');

    * {
        margin: 0;
        font-family: 'Ubuntu';
        color: white;
    }

    body {
        margin: 0;
        overflow-x: hidden;
        background-color: #ff663a;
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
        background-color:  #333;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #777;
    }
</style>