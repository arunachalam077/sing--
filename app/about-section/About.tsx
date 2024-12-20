
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I WORK WITH BUSINESSES AND INDIVIDUALS TO MAKE THEM DIGITALLY SMART."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "As a digital strategist and brand consultant, I specialize in crafting tailored content strategies and providing actionable plans for brands to excel in today’s competitive landscape. With a unique blend of expertise in both branding and technology, I equip businesses with cutting-edge digital tools that help them dominate their industry and stay ahead of the curve."
              }
            />
            <AnimatedBody
              text={
                "I offer innovative software solutions like AI chatbots for Instagram, WhatsApp API integrations, fulfillment software, and billing applications—tools designed to streamline operations and boost productivity for business owners."

              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "I offer innovative software solutions like AI chatbots for Instagram, WhatsApp API integrations, fulfillment software, and billing applications—tools designed to streamline operations and boost productivity for business owners."
              }
            />
            <AnimatedBody
              text={
                "I’m always looking for ways to expand my knowledge and sharpen my skills—whether it’s through diving into marketing and self-help books or watching documentaries to gain new insights and broaden my perspective."
              }
            />
          
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Developing Technology"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JAVASCRIPT (ES6+), REACT, NEXT.JS, TYPESCRIPT, PRISMIC CMS, REDUX, NODE.JS, EXPRESS.JS, MONGODB, PRISMA, FIREBASE, JWT AUTHENTICATION, MONGOOSE, SOCKET.IO, STRIPE API,SERVER, NGINX"
                }
              />
            </div>
            
           
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Designer and Editor Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "FIGMA, FRAMER, FIGJAM, ADOBE XD, PROTOPIE, ADOBE PHOTOSHOP,ADOBE PREMIERE PRO, FINAL CUT PRO, DAVINCI RESOLVE, CANVA, ADOBE AFTER EFFECTS, CAPCUT, FILMORA"
                }
              />
            </div>
           < div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Digital Strategist&Core Skills"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CONTENT STRATEGY, BRAND POSITIONING, DIGITAL MARKETING, MARKET RESEARCH, CUSTOMER JOURNEY MAPPING, SEO, SOCIAL MEDIA STRATEGY, ANALYTICS & PERFORMANCE TRACKING"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
         
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
