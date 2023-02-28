<template>
    <div class="project-link-wrapper">
        <a :href="link">
            <img 
                class="image"
                :src="image" 
                alt="Screenshot of the displayed project!"
            >
        </a>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            link: String,
            image: String,
        },
    }
</script>

<style lang="scss" scoped>
    .project-link-wrapper {
        width: 100%;
        transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
        border: solid 1px black;
        border-radius: 6px;

        .image {
            width: 100%;
            height: 100%;
            border-radius: 4px;
        }

        &:hover, &:focus {
            transform: translate(-5px, -5px);
            box-shadow: 10px 10px black;
        }
    }
</style>