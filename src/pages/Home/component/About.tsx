import { Button } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
// import useResponsive from "@/hooks/useResponsive";
import { Carousel } from "react-carousel3";
import Linkedin from "@/assets/icons/linkedin.svg";
import Email from "@/assets/icons/github.svg";
import Telegram from "@/assets/icons/telegram.svg";

export default function About() {
  // const isDesktop = useResponsive("up", "md");
  // const isTablet = useResponsive("between", "sm", "md");
  // console.log(isDesktop, isTablet);
  const containerRef = useRef<any>(null);
  console.log(containerRef);
  const [containerWidth, setContainerWidth] = useState(1300);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef]);

  let images = [];
  for (let i = 0; i < 9; i++) {
    images.push(
      <div className="flex justify-center" key={i}>
        <img
          src={`assets/images/miss-review/${i + 1}.png`}
          className="rounded-md"
          width={200}
        ></img>
        <div className=" border-2 border-[#ffffff12]  bg-[#080808f6] text-start">
          <div className="p-2">ANDY GLABDA</div>
          <div className="px-2">
            Senior Business <br></br>BlockChain Development
          </div>
          <div className="mt-4 flex justify-start gap-4 border-t-2 border-[#ffffff12] bg-[#8664fb50] px-6 py-2">
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <Email />
            </a>
            <a href="#">
              <Telegram />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="aboutus"
      className="relative px-10 py-20 lg:px-20 "
      ref={containerRef}
    >
      <div className="text-center">
        <div className="text-[60px] font-bold">About US</div>
        <div>Our Team Of Crypto Marketing Specialists</div>
        <Button placeholder={undefined} className="mt-4 bg-[#8664fb] p-6">
          Get a free consultation
        </Button>
        <div className="mt-16 lg:mx-[100px] xl:mx-[200px] 2xl:mx-[300px]">
          HJ Media Consultants is a leading consultancy in the Web3 and
          cryptocurrency space, dedicated to empowering your blockchain projects
          with expert marketing, management, design, and development services.
          Our team brings deep industry knowledge and a tailored approach to
          each client, ensuring that every project aligns with both business
          requirements and industry standards. We pride ourselves on fostering
          strong relationships through continuous collaboration, transparency,
          and innovation. From crafting impactful marketing materials to
          navigating the complexities of exchange listings, our comprehensive
          services are designed to enhance visibility and drive success.
        </div>

        <div>
          <div className="relative z-40 mt-10">
            <Carousel
              height={300}
              width={(containerWidth * 2) / 4}
              yOrigin={42}
              yRadius={48}
              autoPlay={true}
            >
              {images}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
