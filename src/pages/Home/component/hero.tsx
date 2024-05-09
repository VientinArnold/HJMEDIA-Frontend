import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative mt-32 px-4 py-4 text-start lg:px-20 lg:py-20">
      <div className="mx-10 lg:mx-[100px] xl:mx-[200px] 2xl:mx-[300px]">
        <div className="text-[32px] font-bold lg:text-[60px]">
          YOUR TRUSTED PR AND MARKETING AGENCY FOR WEB3
        </div>
        <div className="mt-4 text-[16px]  text-[#86f4e1] lg:text-[24px]">
          ONE STOP SHOP FOR BLOCKCHAIN AND CRYPTO COMPANIES
        </div>
        <div className="mt-4 text-[12px] lg:text-[18px]">
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
        <div className="mt-4 flex">
          <a href="#contact">
            <div className="border-4 border-[#1d1d1d88] px-8 py-4 hover:bg-white hover:text-black">
              Contact
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
