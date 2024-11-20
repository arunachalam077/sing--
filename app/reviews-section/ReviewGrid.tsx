import ReviewCard from "./ReviewCard";
import { reviewDetails } from "./reviewDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Testimonials"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Real Stories from Clients and Collaborators Who Have Experienced My Work Firsthand"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex gap-4 py-4"
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: isMobile ? 6 : 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex gap-4">
            {reviewDetails.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                role={review.role}
                company={review.company}
                profileImg={review.profileImg}
                testimonial={review.testimonial}
                index={index}
              />
            ))}
          </div>
          <div className="flex gap-4">
            {reviewDetails.map((review, index) => (
              <ReviewCard
                key={`duplicate-${index}`}
                name={review.name}
                role={review.role}
                company={review.company}
                profileImg={review.profileImg}
                testimonial={review.testimonial}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        href="https://contra.com/victorwilliams"
        target="_blank"
        className="mt-10 mb-5 sm:mb-0 sm:mt-20"
      >
    
      </motion.a>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="contra-hire-me-button mt-20"
        data-analyticsUserId="f6264c4e-279b-4675-80e8-739c55eee53f"
        data-theme="dark"
        data-username="victorwilliams"
      ></motion.div>
      <script
        async
        src="https://contra.com/static/embed/sdk.js"
        charSet="utf-8"
      ></script> */}
    </section>
  );
};

export default Reviews;
