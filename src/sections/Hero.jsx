import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { Tilt } from 'react-tilt'
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            40,     // max tilt rotation (degrees)
	perspective:    10000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          false,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const btn=()=>{
  return (
    <div>

    </div>
  )
}
const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
          
            <Tilt className="cursor-default" options={defaultOptions} style={{ height: 30, width: 100 }}>
              <div>Car Care</div>
            </Tilt>
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Car. Care. Connect.
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-p3">
           Your ride's AI sidekick.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="public 2/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="public 2/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>

          {/* <Model/> */}
        </div>
      </Element>
    </section>
  );
};

export default Hero;