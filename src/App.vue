<template>
    <div id="app">
        <loading v-if="isLoading"></loading>
        <button type="button" @click="toggleLoading">Toggle Loading</button>
    </div>
</template>

<script>
import Loading from './components/Loading';

export default {
    name: 'app',
    components: {
        Loading
    },
    data: function() {
        return {
            isLoading: true
        }
    },
    methods: {
        toggleLoading() {
            this.isLoading = !this.isLoading;
        }
    }
}
</script>

<style>
#app {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

* {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
</style>
