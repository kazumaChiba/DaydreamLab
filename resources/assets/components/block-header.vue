<template>
    <div id="block-header" class="container d-flex align-items-center justify-content-between">
        <img src="/images/logo.svg" />
        <div class="d-flex align-items-center justify-content-center">
            <div id="langages">
                <span class="mr-4" :class="{'active' : $i18n.locale == 'en'}" @click="changeLang('en')">EN</span>
                <span class="mr-4" :class="{'active' : $i18n.locale == 'tw'}" @click="changeLang('tw')">TW</span>
                <span class="mr-4" :class="{'active' : $i18n.locale == 'cn'}" @click="changeLang('cn')">CN</span>
            </div>
            <div id="menu-burger" class="ml-4 position-relative" :class="{'active' : open}" @click="open = !open">
                <div class="bubbleback position-absolute fit radius-100 w-100 h-100" :class="{'active' : open}"></div>
                <div class="d-flex flex-column position-relative">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="menu" :class="{'active' : open}">
                <div class="bubble position-absolute radius-100"></div>  
                <div class="wave-wrap">
                    <svg v-for="(item,$index) in 2" :key="$index" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="'0 0 1600 ' + (waveHeight + 140)">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="0%" y2="100%"  gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#57bbc1" stop-opacity="0.25"/>
                                <stop offset="1" stop-color="#015871"/>
                            </linearGradient>
                        </defs>
                        <path class="wave-path" d="M1600,121 C1289,121,1190.1-.25,789,0,389,0,289,121,0,121 v77 H1600 Z" transform="translate(0 0)" style="fill:url(#linear-gradient)"/>
                        <rect class="wave-rect" y="197.9" width="100%" style="fill:url(#linear-gradient)"></rect>
                    </svg>
                </div>
                <div class="scales position-absolute d-flex justify-content-between w-100 h-100">
                    <svg class="scale-left h-100" width="120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g class="ruler">
                            <g :class="'ruler'+$index" v-for="(group,$index) in count" :key="$index">
                                <g v-for="(item,$itemIndex) in 10" :key="$itemIndex">
                                    <rect x="0" :y="( screenHeight - 22 ) - ( ($index*10 + $itemIndex) * 22 )" :width="$itemIndex == 0 ? 30 : 20" height="2" style="fill:#131313" />
                                    <g style="isolation:isolate" v-if="(($index*10) + $itemIndex + 1) % 25 == 0">
                                        <text 
                                            :transform="'translate(50 '+ (screenHeight - ( ((($index*10) + $itemIndex + 1) / 25) * 550 ) - 15) +')'" 
                                            style="isolation:isolate;font-size:22px;fill:#131313;font-family:ArialMT, Arial;letter-spacing:0.04501065340909091em">
                                            {{ ((($index*10) + $itemIndex + 1) / 25) }}
                                        </text>
                                        <text 
                                            v-if="(($index*10) + $itemIndex) % 100 != 0"
                                            :transform="'translate(70 '+ (screenHeight - ( ((($index*10) + $itemIndex + 1) / 25) * 550 ) - 15) +')'" 
                                            style="isolation:isolate;font-size:22px;fill:#131313;font-family:ArialMT, Arial;letter-spacing:0.04501065340909091em">
                                            / 4
                                        </text>
                                    </g>
                                    <g id="LTR" style="isolation:isolate" v-if="$index == 0 && $itemIndex == 0">
                                        <text 
                                            :transform="'translate(5 '+ (screenHeight - 7) +')'" 
                                            style="isolation:isolate;font-size:22px;fill:#131313;font-family:ArialMT, Arial;letter-spacing:0.04501065340909091em">
                                            <tspan x="50" y="0" style="letter-spacing:0.007879083806818182em">LRT</tspan>
                                        </text>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg class="scale-right h-100" width="80" xmlns="http://www.w3.org/2000/svg">
                        <g class="ruler">
                            <g :class="'ruler'+$index" v-for="(group,$index) in count" :key="$index">
                                <rect v-for="(item,$itemIndex) in 10" :key="$itemIndex" :x="$itemIndex == 0 ? 54 : 62 " :y="( screenHeight - 22 ) - ( ($index*10 + $itemIndex) * 22 )" :width="$itemIndex == 0 ? 30 : 20" height="2" style="fill:#131313" />
                                <g style="isolation:isolate">
                                    <text 
                                        :transform="'translate(0 '+ (screenHeight - ($index*220) - 220 - 15) +')'" 
                                        style="isolation:isolate;font-size:22px;fill:#131313;font-family:ArialMT, Arial;letter-spacing:0.04501065340909091em">
                                        {{$index+1}}00
                                    </text>
                                </g>
                                <g id="ML" style="isolation:isolate" v-if="$index == 0">
                                    <text 
                                        :transform="'translate(5 '+ (screenHeight - 7) +')'" 
                                        style="isolation:isolate;font-size:22px;fill:#131313;font-family:ArialMT, Arial;letter-spacing:0.04501065340909091em">
                                        M<tspan x="19.32" y="0" style="letter-spacing:0.007879083806818182em">L</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>    
                <div class="menu-list d-flex flex-column align-items-center justify-content-center w-100 h-100 position-relative">
                    <div class="w-100" @mouseleave="leaveItem">
                        <router-link :to="'/'" class="menu-item d-block">
                            <span class="d-block" @mouseenter="hoverItem">
                                Home
                            </span>
                        </router-link>
                        <router-link :to="'/'" class="menu-item d-block">
                            <span class="d-block" @mouseenter="hoverItem">
                                Selected Work
                            </span>
                        </router-link>
                        <router-link :to="'/'" class="menu-item d-block">
                            <span class="d-block" @mouseenter="hoverItem">
                                Agency
                            </span>
                        </router-link>
                        <router-link :to="'/'" class="menu-item d-block">
                            <span class="d-block" @mouseenter="hoverItem">
                                Solutions
                            </span>
                        </router-link>
                        <router-link :to="'/'" class="menu-item d-block">
                            <span class="d-block" @mouseenter="hoverItem">
                                Contact Us
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var timeline = new TimelineMax();
    export default {
        data: function () {
            return {
                open: false,
                screenHeight: $(window).innerHeight(),
                waveHeight: 0,
                count: Math.ceil($(window).innerHeight() / 220),
            }
        },
        mounted: function(){
            
        },
        methods:{
            hoverItem(e){
                let itemPosition = window.innerHeight - $(e.target).offset().top + 298;
                // let timeline = new TimelineMax();
                timeline.clear();
                timeline.to(".wave-wrap svg",1,{
                            attr: {
                                viewBox: '0 0 1600 '+itemPosition
                            }
                        })
                        .add(
                            TweenMax.set(".wave-rect",{
                                height: itemPosition, 
                                ease: Power3.easeInOut,
                        }));
            },
            leaveItem(e){
                // let timeline = new TimelineMax();
                timeline.clear();
                timeline.to(".wave-wrap svg",1,{
                    attr: {
                        viewBox: '0 0 1600 140'
                    }
                })
                .set(".wave-rect",{
                        height: 0, 
                        ease: Power3.easeInOut,
                });
            },
            changeLang(lang){
                this.$i18n.locale = lang;
	            this.$store.dispatch("update_language", lang);

                this.$router.push({ name: this.$route.name, params: { lang: lang}})
            }
        }
    }
</script>
<style lang="sass" scoped>
#block-header
    padding: 32px 0
    margin-top: 20px
    position: relative
    z-index: 99999999999
    #langages
        span
            width: 35px
            height: 35px
            border-radius: 100%
            transition: all .3s
            display: inline-flex
            align-items: center
            justify-content: center
            cursor: pointer
            font-weight: 600
            &:hover , &.active
                background-color: #487193
                color: white
    #menu-burger
        cursor: pointer
        width: 36px
        height: 36px
        border-radius: 100%
        z-index: 2
        &:hover
            span
                &:last-child
                    width: 32px
        &.active
            span
                margin: 5px
                &:first-child
                    transform: rotate(45deg) translate(2px)
                &:nth-child(2)
                    opacity: 0
                &:last-child
                    transform: rotate(-45deg)
                    width: 32px
        span
            width: 32px
            height: 2px
            background-color: black
            margin: 5px 0
            transition: all .5s
            position: relative
            transition: all 0.2s ease-out
            transform-origin: 0 0
            &:last-child
                width: 20px
    .bubbleback
        transition: all 0.3s ease-out
        &.active
            transform: scale(1.5)
            opacity: 0
            background-color: rgba(72, 113, 147, 0.6)
    
    #menu
        width: 100vw
        height: 100vh
        position: fixed
        top: 0
        left: 0
        overflow: hidden
        transform: translate(100% , -100%)
        transition: all .5s ease-out
        &.active
            transform: translate(0)
            .bubble
                border-radius: 0
            .scales
                transition-delay: .6s
                transform: scale(1)
            .menu-list , .wave-wrap
                transition-delay: .8s
                opacity: 1
        .scales
            transform: scale(0)
            transition-delay: .6s
            transition: all .5s ease-out
        .bubble
            width: 100vw
            height: 100vh
            background: white
            left: 0
            top: 0
            transition: all .6s ease-out
            transition-delay: .2s
        .menu-list
            overflow: hidden
            top: 0
            left: 0
            opacity: 0
            .menu-item
                font-size: 54px
                color: #131313
                font-weight: 600
                padding-bottom: 45px
                width: 100%
                text-align: center
                &:hover
                    color: white
        .wave-wrap
            position: absolute
            bottom: 0
            left: 0
            width: 1s00vw
            height: 100%
            display: flex
            align-items: flex-end
            animation: wave 5s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite
            opacity: 0
            background-repeat-y: no-repeat
            background-position-y: 100%
            svg
                width: 100vw

@keyframes wave
    0%
        transform: translateX(0)
    50%
        transform: translateX(-50vw) translateY(25px)
    100%
        transform: translateX(-100vw)
</style>
