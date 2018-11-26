<template>
    <div>
        <div id="section-404">
            <div class="bg"></div>
            <div class="container" style="position: relative">
                <div class="inner_404">
                    <div style="color: #fff;font-size: 12rem;">404</div>
                    <h1 class="text-playfair text-white text-uppercase font-weight-bold">Page Not Found</h1>
                    <h3 class="text-white mb-4 pb-2">Sorry,the link you clicked may be broken or the<br>page may have been removed.</h3>
                    <router-link :to="'/'" class="btn style-6">GO TO HOMEPAGE</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="sass" rel="stylesheet/sass">
    #section-404
        height: 90vh
        height: calc(100vh - 96px)
        margin-top: 96px
        .bg
            background-position: center
            background-repeat: no-repeat
            background-size: cover
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            &:after
                content: ""
                position: absolute
                left: 0
                top: 0
                bottom: 0
                right: 0
                background: rgba(92, 87, 81, 0.5)

        .inner_404
            padding-top: 15vh
            text-align: center
</style>
<script>
    export default {
        data: function () {
            return {

            }
        },
        computed: {

        },
        created() {
        },
        mounted: function () {

        },
        methods: {


        },
        components: {

        }
    }
</script>