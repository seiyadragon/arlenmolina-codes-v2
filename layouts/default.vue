<template>
    <main>
        <Header />
        <PaddingX class="padding-x">
            <div>
                <slot />
            </div>
            
        </PaddingX>
        <DelayedDisplay :delay="3750">
            <Footer />
        </DelayedDisplay>
    </main>
</template>

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
    }

    main {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color:  #666;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #777;
    }
</style>