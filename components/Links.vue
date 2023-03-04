<template>
    <div :class="linkLabels ? 'labeled-links' : 'links'">
        <a href="https://twitter.com/arlenmolina101">
            <Icon name="ion:logo-twitter" />
            {{ linkLabels ? 'twitter' : '' }}
        </a>
        <a href="https://www.instagram.com/arlenmolina101/">
            <Icon name="ion:logo-instagram" />
            {{ linkLabels ? 'instagram' : '' }}
        </a>
        <a href="https://www.linkedin.com/in/arlen-molina-423159183/">
            <Icon name="ion:logo-linkedin" />
            {{ linkLabels ? 'linkedin' : '' }}
        </a>
        <a href="https://github.com/seiyadragon">
            <Icon name="ion:logo-github" />
            {{ linkLabels ? 'github' : '' }}
        </a>
        <a href="https://codepen.io/seiyadragon">
            <Icon name="ion:logo-codepen" />
            {{ linkLabels ? 'codepen' : '' }}
        </a>
        <a href="https://www.youtube.com/channel/UCM5SURW6hLDitRqvbvWVn7g">
            <Icon name="ion:logo-youtube" />
            {{ linkLabels ? 'youtube' : '' }}
        </a>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            linkLabels: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .labeled-links {
        display: flex;
        flex-direction: column;
        text-align: center;

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

    .links {
        display: flex;
        height: 100%;
        font-size: 20px;
        animation: fade-in 500ms ease-in-out, slide-right 500ms ease-in-out;
        column-gap: 4px;

        a {
            margin-top: auto;
            margin-bottom: auto;
            text-decoration: none;
            color: white;
            transition: transform 500ms ease-in-out;

            &:hover {
                transform: scale(1.25, 1.25);
            }
        }
    }
</style>