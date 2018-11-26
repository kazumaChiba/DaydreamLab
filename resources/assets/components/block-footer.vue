<template>
    <div id="block-footer">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="footer-list d-flex align-items-center justify-content-between">
                <router-link :to="'/'" class="footer-item">WE'RE HIRING</router-link>
                <router-link :to="'/'" class="footer-item">NEWS</router-link>
                <router-link :to="'/'" class="footer-item">PRESENTATION</router-link>
                <router-link :to="'/'" class="footer-item">TERMS AND CONDITIONS</router-link>
            </div>
            <div class="social-icons d-flex align-items-center">
                <a href="#" class="mr-4 radius-100 d-flex align-items-center justify-content-center">
                    <font-awesome-icon :icon="['fab','facebook-f']" />
                </a>
                <a href="#" class="radius-100 mr-0 ml-5 d-flex align-items-center justify-content-center">
                    <font-awesome-icon :icon="['fab','instagram']" />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                
            }
        },
        mounted: function(){
            
        },
        methods:{
        }
    }
</script>
<style lang="sass" scoped>
#block-footer
    margin-bottom: 55px
    .footer-list
        width: 50%
        .footer-item
            font-weight: 600
    .social-icons
        a
            width: 35px
            height: 35px
            padding: 6px
            transition: all .3s
            &:hover
                background-color: #487193
                color: white
            svg
                font-size: 20px

</style>
