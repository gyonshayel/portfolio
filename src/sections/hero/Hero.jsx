import { BackgroundGradientAnimation } from "../../components/ui/shadcn-io/background-gradient-animation";
import "./hero.css";

export function Hero() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart=""
      gradientBackgroundEnd=""
      firstColor="255, 255, 255"
      secondColor="220, 240, 224"
      thirdColor="128, 204, 153"
      fourthColor="35, 162, 98"
      fifthColor="8, 94, 45"
      pointerColor="255, 255, 255"
      blendingValue="multiply"
      interactive={false}
      size="150%"
      containerClassName="min-h-[calc(100vh-var(--header-height))] sm:[--size:120%] bg-[url('/noise.png')]"
    >
      <section
        id="hero"
        className="hero absolute left-[50%] z-50 container translate-x-[-50%] transform"
      >
        {/* <div className="relative"></div> */}
        <div className="hero__intro">
          <img
            className="hero__intro-img"
            src="/hero.JPG"
            alt="I use this profile picture everywhere :)"
          />
          <h1 className="hero__intro-subtitle">
            Hello, I am Gyon Shayel Joshua
          </h1>
        </div>
        <h2 className="hero__title">
          <span>Web </span> <span>Developer</span>
        </h2>
        <p className="hero__description">
          A passionate Front-End Web Developer with a knack for creating
          visually appealing and user-friendly websites.
        </p>
        <div className="hero__btns">
          <a role="button" className="btn contact-btn px-0" href="#contact">
            Contact Me
          </a>
          <a
            role="button"
            className="btn-sec resume-btn"
            href="https://drive.google.com/file/d/1E-wHQjOCXFkrAp8bmBgJjn6CvLBmgzxf/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
}
