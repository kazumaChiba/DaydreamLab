<template>
    <div>
        <block-header></block-header>
        <router-view></router-view>
        <block-footer></block-footer>
    </div>
</template>
<style lang="sass">
    @import "node_modules/bootstrap/scss/bootstrap.scss"
    @import "../../sass/web"
</style>

<script>
    import blockHeader from 'components/block-header'
    import blockFooter from 'components/block-footer'

    export default {
        data: function () {
            return {
            }
        },
        computed:{

        },
        components:{
            blockHeader,
            blockFooter,
        }
    }
</script>