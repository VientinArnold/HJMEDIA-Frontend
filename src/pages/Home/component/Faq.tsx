import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import Plus from "@/assets/icons/smallplus.svg";
import Minus from "@/assets/images/minus.png";

export default function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div
      id="faq"
      className="relative mx-10 mt-48 lg:mx-[100px] xl:mx-[200px] 2xl:mx-[15%]"
    >
      <div>
        <div className="text-center">
          <div className=" text-[60px] font-bold">FAQ</div>
        </div>
        <div className="mt-16">
          Find answers to frequently asked questions about Subnet 27, our
          decentralized compute subnet built on the Bittensor protocol. Learn
          how to contribute resources, access computational power, and navigate
          our user-friendly dashboard. We’re here to help you.
        </div>
        <div className="mt-8 ">
          <Accordion placeholder={undefined} open={open === 1}>
            <AccordionHeader
              placeholder={undefined}
              onClick={() => handleOpen(1)}
              className="pr-10 text-white lg:text-[24px]"
            >
              What expertise does HJ Media Consultants offer in blockchain
              design and development?
              {open === 1 ? (
                <img
                  src={Minus}
                  width={24}
                  height={24}
                  className="absolute right-5 bg-black text-white"
                />
              ) : (
                <Plus width={24} height={24} className="absolute right-5 " />
              )}
            </AccordionHeader>
            <AccordionBody>
              HJ Media Consultants specializes in user-friendly, visually
              appealing designs and scalable, secure applications, including
              smart contracts and full-stack web and mobile platforms tailored
              to the blockchain and cryptocurrency industries. We have worked
              with numerous clients to bring their ideas to life.
            </AccordionBody>
          </Accordion>
          <Accordion placeholder={undefined} open={open === 2}>
            <AccordionHeader
              placeholder={undefined}
              onClick={() => handleOpen(2)}
              className="pr-10 text-white lg:text-[24px]"
            >
              How does your team manage projects to meet the fast-paced demands
              of the Web3 sector?
              {open === 2 ? (
                <img
                  src={Minus}
                  width={24}
                  height={24}
                  className="absolute right-5 bg-black text-white"
                />
              ) : (
                <Plus width={24} height={24} className="absolute right-5 " />
              )}
            </AccordionHeader>
            <AccordionBody>
              Our team employs agile project management techniques, regular
              training on blockchain technologies, and emphasizes open
              communication and accountability to efficiently deliver projects
              on schedule.
            </AccordionBody>
          </Accordion>
          <Accordion placeholder={undefined} open={open === 3}>
            <AccordionHeader
              placeholder={undefined}
              onClick={() => handleOpen(3)}
              className="relative  pr-10 text-white lg:text-[24px]"
            >
              Can you detail the types of marketing materials you create for
              blockchain projects?
              {open === 3 ? (
                <img
                  src={Minus}
                  width={24}
                  height={24}
                  className="absolute right-5 bg-black text-white"
                />
              ) : (
                <Plus width={24} height={24} className="absolute right-5 " />
              )}
            </AccordionHeader>
            <AccordionBody>
              We produce a variety of materials including articles, images,
              promotional videos, brochures, whitepapers, digital banners, and
              infographics, all customized to highlight the unique aspects of
              each project and crafted by our expert team of writers who
              specialize in the crypto and blockchain sector.
            </AccordionBody>
          </Accordion>
          <Accordion placeholder={undefined} open={open === 4}>
            <AccordionHeader
              placeholder={undefined}
              onClick={() => handleOpen(4)}
              className="pr-10 text-white lg:text-[24px]"
            >
              What strategies do you use for content distribution in the
              cryptocurrency field?
              {open === 4 ? (
                <img
                  src={Minus}
                  width={24}
                  height={24}
                  className="absolute right-5 bg-black text-white"
                />
              ) : (
                <Plus width={24} height={24} className="absolute right-5 " />
              )}
            </AccordionHeader>
            <AccordionBody>
              We use SEO, social media, email campaigns, and have partnerships
              with leading publishers and press release distributors to ensure
              broad and effective reach, along with performance tracking to
              refine distribution strategies.
            </AccordionBody>
          </Accordion>
          <Accordion placeholder={undefined} open={open === 5}>
            <AccordionHeader
              placeholder={undefined}
              onClick={() => handleOpen(5)}
              className="pr-10 text-white lg:text-[24px]"
            >
              How do you support companies in getting their cryptocurrency
              listed on exchanges?
              {open === 5 ? (
                <img
                  src={Minus}
                  width={24}
                  height={24}
                  className="absolute right-5 bg-black text-white"
                />
              ) : (
                <Plus width={24} height={24} className="absolute right-5 " />
              )}
            </AccordionHeader>
            <AccordionBody>
              We negotiate with exchanges to secure favorable terms, and provide
              ongoing support to manage exchange presence and liquidity,
              including training for teams on exchange operations and
              regulations.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
