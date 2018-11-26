export const homeMixin = {
    data(){
        return {
            isAnimating: false,
            currentSection: 0,
            MenuHover: false,
            scrollActive: false,
            translateX: 0,
            dealIndex: 0,
            slideToSection: '',
            translateY: 0,
            translateYStart: $(window).innerHeight(),
            translateYEnd: $(window).innerHeight(),
        }
    },
    mounted: function(){
        TweenLite.to($(".scroll-wrap"), 1, { y: 0 ,ease:Power3.easeInOut ,onComplete: this.onSlideChangeEnd, onCompleteScope: this });
    },
    methods: {
        topMenuFix(){
            if($(".section[data-index='"+this.currentSection+"']").attr("data-white-bg")){
                $("#app").addClass("white-section");
            }
            else{
                $("#app").removeClass("white-section");
            }
        },
        scrollHandler(){
            let scrollTop = $(window).scrollTop();
            if(scrollTop > 0){
                $(".scroll-bg").css("opacity","1");
                $("#logo-img,.sidebar").addClass("scroll-fix");
            }
            else{
                $(".scroll-bg").css("opacity","0");
                $("#logo-img,.sidebar").removeClass("scroll-fix");
            }
        },
        DealsBarWheel(delta){
            if(!this.scrollActive && !this.isAnimating){
                let screenWidth = $(window).width();
                if(delta < 0){
                    this.dealIndex++;
                    this.translateX = (-1) * this.dealIndex * screenWidth;
                    
                    if(this.dealIndex > 2){
                        this.goToNextSlide();
                        this.dealIndex = 2;
                        this.translateX = screenWidth*(-2);
                        return false;
                    }
                    else{
                        this.slideToSection = '';
                    }
                }
                else if(delta > 0){
                    this.dealIndex--;
                    this.translateX = (-1) * this.dealIndex * $(window).width();
                    if(this.dealIndex < 0){
                        this.goToPrevSlide();
                        this.dealIndex = 0;
                        this.translateX = 0;
                        return false;
                    }
                    else{
                        this.slideToSection = '';
                    }
                }
                this.onDealsSlideStart();
            }
        },
        onDealsSlideStart(){
            this.scrollActive = true;

            TweenLite.to($('.deals-wrap') , 1 , { 'x': this.translateX , ease:Power3.easeInOut , onComplete: this.onDealsSlideEnd });
            TweenLite.delayedCall(0.5 , ()=>{ 
                $(".special-item-wrap.fadeInRight.animated").removeClass("fadeInRight animated");
                $(".deal-item").eq(this.dealIndex).find(".special-item-wrap").addClass("fadeInRight animated");
            });
        },
        onDealsSlideEnd(){
            TweenLite.delayedCall(0.5 , ()=>{ 
                this.scrollActive = false;      
            });          
        },
        onNavButtonClick(index){
            let newTranslateY = 0;
            for(let i=0;i<index;i++){
                newTranslateY -= $(".section[data-index='"+i+"']").outerHeight();
            }
            this.currentSection = index;
            this.translateY = newTranslateY;

            this.isAnimating = true;
            TweenLite.to($(".scroll-wrap"), 1, { y: this.translateY ,ease:Power3.easeInOut ,onComplete: this.onSlideChangeEnd, onCompleteScope: this });
            
            if($("#section-nav li").filter("[data-index=" + index + "]").length){
                TweenLite.to($("#section-nav li").filter(".active"), 0.5, {className: "-=active"});

                TweenLite.to($("#section-nav li").filter("[data-index=" + index + "]"), 0.5, {className: "+=active"});
            }
            else{
                TweenLite.to($("#section-nav li").filter(".active"), 0.5, {className: "-=active"});
            }
        },
        onMouseWheel(event){
            let delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail;
            let current = $(".section[data-index='"+this.currentSection+"']");
            if(this.currentSection != 3 && this.currentSection != 4){
                if(!this.isAnimating && !this.MenuHover){
                    if(current.prop('scrollHeight') <= $(window).innerHeight()){
                        if(delta < 0)
                        {
                            if(current.attr("data-stop") != 'down'){
                                this.goToNextSlide();
                            }
                        }
                        else if(delta > 0)
                        {
                            this.goToPrevSlide();
                        }
                    }
                    else{
                        if(delta < 0 && current.scrollTop() == ( current.prop('scrollHeight') - $(window).innerHeight()) )
                        {
                            this.goToNextSlide();
                        }
                        else if(delta > 0 && current.scrollTop() == 0)
                        {
                            this.goToPrevSlide();
                        }
                    }
                }
            }
            else if(this.currentSection == 4){
                this.DealsBarWheel(delta);
            }
            else if(this.currentSection == 3){
                let dishScrollTop = $("#section-sidedish").scrollTop();
                let dishscrollHeight = $("#section-sidedish").prop("scrollHeight");
                let dishEnd = dishscrollHeight - $(window).innerHeight();
                if(delta < 0)
                {
                    if(dishScrollTop == dishEnd){
                        this.goToNextSlide();
                    }
                }
                else if(delta > 0)
                {
                    if(dishScrollTop == 0){
                        this.goToPrevSlide();
                    }
                }
                
            }
        },
        goToPrevSlide()
        {
            let $slide = $(".section[data-index='"+this.currentSection+"']");
            let windowHeight = $(window).innerHeight();
            if(!this.isAnimating && $slide.prev().length){
                if($slide.prev().outerHeight() < windowHeight){
                    this.translateY += $slide.prev().outerHeight();
                }
                else{
                    this.translateY += windowHeight;
                }
                
                this.goToSlide($slide.prev());
            }
        },
        goToNextSlide()
        {
            let $slide = $(".section[data-index='"+this.currentSection+"']");
            let windowHeight = $(window).innerHeight();
            if(!this.isAnimating && $slide.next().length){
                if($slide.outerHeight() < windowHeight){
                    this.translateY -= $slide.outerHeight();
                }
                else{
                    this.translateY -= windowHeight;
                }
                this.goToSlide($slide.next());
            }
        },
        goToSlide($slide)
        {
            if(!this.isAnimating && $slide.length)
            {
                this.isAnimating = true;

                TweenLite.to($(".scroll-wrap"), 1, { y: this.translateY ,ease:Power3.easeInOut ,onComplete: this.onSlideChangeEnd, onCompleteScope: this });

                this.currentSection = $slide.attr("data-index");

                //Nav
                if($("#section-nav li").filter("[data-index=" + this.currentSection + "]").length){
                    TweenLite.to($("#section-nav li").filter(".active"), 0.5, {className: "-=active"});

                    TweenLite.to($("#section-nav li").filter("[data-index=" + this.currentSection + "]"), 0.5, {className: "+=active"});
                }
                else{
                    TweenLite.to($("#section-nav li").filter(".active"), 0.5, {className: "-=active"});
                }
            }
        },
        onSlideChangeEnd()
        {
            let $slide = $(".section[data-index='"+this.currentSection+"']");

            this.topMenuFix();
            TweenLite.delayedCall(0.2 , ()=>{ 
                this.isAnimating = false;
                this.scrollActive = false;

                this.translateYStart = this.translateY;
                this.translateYEnd = this.translateY - $slide.outerHeight() + $(window).innerHeight();
            });
        },
        menuEnter(){
            if(!this.isAnimating){
                this.MenuHover = true;
            }
        },
        menuLeave(){
            this.MenuHover = false;
        },
    }
  }