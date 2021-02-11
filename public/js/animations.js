

document.addEventListener("DOMContentLoaded", function(event){
    // gsap animation
        let tl = gsap.timeline()

        tl.fromTo('.navbar-brand', {
            x: -200,
            opacity: 0,
        },{
            x: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        })
        .fromTo('.navbar-nav', {
            x: 200,
            opacity: 0,
        },{
            x: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
        ">-1.8"
        )
        .fromTo('.green__circle', {
            x: 200,
            y: 100,
            opacity: 0,
        },{
            x: 0,
            y: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
        ">-1.8"
        )
        .fromTo('.blue__circle', {
            x: -200,
            y: -100,
            opacity: 0,
        },{
            x: 0,
            y: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
         ">-1.8"
        )
        .fromTo('.triangle', {
            scale: 0,
            opacity: 0,
            rotation: 0,
        },{
            scale: 1,
            opacity: 1,
            rotation: 14.45,
            delay: .5,
            duration: 1.3
        },
         ">-1"
        )
        .fromTo('.rect__video', {
            y: 200,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
        ">-1"
        )
        .fromTo('.hero-slogan', {
            x: -200,
            opacity: 0,
        },{
            x: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
        ">-0.8"
        )
        .fromTo('.subtext', {
            x: -200,
            opacity: 0,
        },{
            x: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
        ">-.8"
        )
        .fromTo('#input-email', {
            x: -200,
            opacity: 0,
        },{
            x: 0,
            opacity: 1,
            delay: .5,
            duration: 1.3
        },
        ">-0.8"
        )
        .fromTo('#jumbo-btn', {
            y: 50,
            scale: 0,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            scale: 1,
            delay: .5,
            duration: 1.3
        },
        ">-.8"
        )
        .fromTo('#jumbo-btn', {
            scale:1,
        },{
            scale: 1.1,
            repeat: -1,
            duration: 1,
            yoyo: true
        },
        //  ">-0.5"
        )
        .fromTo('#solutions-btn', {
            scale:1,
        },{
            scale: 1.1,
            repeat: -1,
            duration: 1,
            yoyo: true
        },
        // ">-.8"
        )
        .fromTo('#team-member5', {
            boxShadow: "0px 12px 42px 1px rgba(82, 150, 252, 0.4)",
        },{
            boxShadow: "0px 12px 32px 20px rgba(82, 150, 252, 0.4)",
            repeat: -1,
            duration: 2,
            yoyo: true
        },
        // ">-.8"
        ) 


    /****** SCROLLMAGIC ********/


    let homeController = new ScrollMagic.Controller();

        // PLATFORM SECTION

        let tlPlatform = new TimelineMax();
        tlPlatform.staggerFrom(".platform-logos", 1.25, {
          scale: 0,
          cycle: {
            y: [-50, 50]
          },
          ease: Elastic.easeOut,
          stagger: {
            from: "center",
            amount: 0.25
          }
        });
        
        var platformScene = new ScrollMagic.Scene({
            triggerElement: ".rect__video",
            triggerHook: 0
          })
            // .addIndicators({
            // colorTrigger: "black",
            // colorStart: "black",
            // colorEnd: "black",
            //   indent: 5
            // })
            .setTween(tlPlatform)
            .addTo(homeController);


        // PROJECTS SECTION

        const tlProjectScroll = new gsap.timeline({
            //onUpdate: debugPercentage
        })

        function debugPercentage() {
            console.log(tlProjectScroll.progress())
        }

        tlProjectScroll.fromTo('#projects-section', {
            x: '100%',
            opacity: 0
        },{
            x:0,
            opacity: 1
        })

        const projectElement = document.querySelector('#projects-section')
        
        let projectScene = new ScrollMagic.Scene({
            triggerElement: '#projects-section',
            triggerHook: 1,
            duration: 400, // projectElement.offsetHeight returning 0 so this will have to for now
        })
        .setTween(tlProjectScroll)
        // .addIndicators()
        .addTo(homeController)
        
            // animate buttons
            let tlProjectButtons = new TimelineMax();

            tlProjectButtons.staggerFrom('#view-themes-btn', 1, {x: -50, opacity:0}, .2)
            tlProjectButtons.staggerFrom('#view-apps-btn', 1, {x: 50, opacity:0}, .2, ">-1.2")
        
            let projBtnsScene = new ScrollMagic.Scene({
                triggerElement: "#projects-section",
                triggerHook: 0
              })
                // .addIndicators({
                //   colorTrigger: "black",
                //   colorStart: "black",
                //   colorEnd: "black",
                //   indent: 5
                // })
                .setTween(tlProjectButtons)
                .addTo(homeController);



        // TEAM SECTION

        let tlTeam= new TimelineMax();
        tlTeam.staggerFrom(".team__member", 1.25, {
          scale: 0,
          cycle: {
            y: [-50, 50]
          },
          ease: Elastic.easeOut,
          stagger: {
            from: "center",
            amount: 0.25
          }
        });
        
        var teamScene = new ScrollMagic.Scene({
            triggerElement: ".trigger-team-animation",
            triggerHook: 0
          })
            // .addIndicators({
            //   colorTrigger: "black",
            //   colorStart: "black",
            //   colorEnd: "black",
            //   indent: 5
            // })
            .setTween(tlTeam)
            .addTo(homeController);




        // SOLUTIONS SECTION

        let tlSolutions = new TimelineMax();

        tlSolutions.staggerFrom('.solution-item', 1, {x: 100, opacity:0}, .2)
                    .staggerFrom('#list-main', 1, {y: 100, opacity: 0}, .2,  ">-1");
        
        let solutionsScene = new ScrollMagic.Scene({
            triggerElement: "#team-member6",
            triggerHook: 0
          })
            // .addIndicators({
            //   colorTrigger: "black",
            //   colorStart: "black",
            //   colorEnd: "black",
            //   indent: 5
            // })
            .setTween(tlSolutions)
            .addTo(homeController);

});

