import React, {useEffect} from "react";
import {gsap, Power1} from "gsap"
import {ImageDraggable} from "./ImageDraggable"

export const GlobalLocation = () => {

    useEffect(() => {
        gsap.set(".global-title-wrapper", {
            autoAlpha: 0
        })
        gsap.set(".image-draggable-wrapper", {
            autoAlpha: 0
        })
        gsap.to(".global-title-wrapper", {
            autoAlpha: 1,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: ".global-location",
              start: "top bottom", // the default values
              end: "bottom bottom",
              scrub: true,
            },
        });

        gsap.to(".image-draggable-wrapper", {
            autoAlpha: 1,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: ".global-location",
              start: "top bottom", // the default values
              end: "bottom bottom",
              scrub: true,
              //markers: true
            },
        });

        /* gsap.to(".logo-bg", {
            yPercent: 150,
            ease: Power1.easeIn,
            scrollTrigger: {
              trigger: ".global-location",
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true,
              //markers: true
            },
        }); */
    }, [])

    return (
        <section className="global-location full-height">
            {/* <div className="logo-bg"></div> */}
            <div className="main-container">
                <div className="global-title-wrapper">
                    <h2 className="section-title global-title">GLOBALLY LOVED <br/>LOCATION</h2>
                    <p className="section-description">Andheri is a globally accepted residential landmark. It is a central point that connects the whole city. <br/><strong>ROSWALT ZAIDEN</strong> is situated at one such location where lifestyle, community and serenity harmonizes. Andheri is the most desirable residential address one seeks for the city.</p>
                </div>
                <ImageDraggable />
            </div>
        </section>
    )
}