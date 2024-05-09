import Logo from "@/assets/images/logo.png";
import Menu from "@/assets/icons/smallplus.svg";
import { useMediaQuery } from "react-responsive";
import { Dialog } from "@material-tailwind/react";
import { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const isMobile = useMediaQuery({
    query: `(max-width: 960px)`,
  });
  const handleClick = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="bg fixed left-0 right-0 top-0  z-50 text-[24px] font-bold">
      {isMobile ? (
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-11 flex items-center justify-start gap-4">
            <div>
              <a href="#">
                <img src={Logo} width={100} height={100} />
              </a>
            </div>
            <div className="text-[24px] font-bold">HJ MEDIA</div>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onClick={() => handleClick()}
          >
            <Menu />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 items-center ">
          <div className="col-span-4 flex items-center justify-start gap-4">
            <a href="#">
              <div>
                <img src={Logo} width={100} height={100} />
              </div>
            </a>
            <div className="text-[24px] font-bold">HJ MEDIA</div>
          </div>
          <div className="col-span-1 items-center text-center">
            <a href="#">
              <div className="py-4 hover:bg-white hover:text-black">Home</div>
            </a>
          </div>
          <div className="col-span-1 items-center text-center">
            <a href="#service" className="">
              <div className="py-4 hover:bg-white hover:text-black">
                Services
              </div>
            </a>
          </div>
          <div className="col-span-1 items-center  text-center ">
            <a href="#blog">
              <div className="py-4 hover:bg-white hover:text-black">Blog</div>
            </a>
          </div>
          <div className="col-span-2 items-center  text-center">
            <a href="#aboutus">
              <div className="py-4 hover:bg-white hover:text-black">
                About Us
              </div>
            </a>
          </div>
          <div className="col-span-1 items-center text-center">
            <a href="#faq">
              <div className="py-4 hover:bg-white hover:text-black">FAQ</div>
            </a>
          </div>
          <div className="col-span-1 items-center text-center">
            <a href="#contact">
              <div className="py-4 hover:bg-white hover:text-black">
                Contact
              </div>
            </a>
          </div>
        </div>
      )}
      <Dialog
        placeholder={undefined}
        open={openNav}
        handler={handleClick}
        size="xxl"
        className="overflow-x-hidden bg-black"
      >
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-11 flex items-center justify-start gap-4">
            <div>
              <img src={Logo} width={100} height={100} />
            </div>
            <div className="text-[24px] font-bold">HJ MEDIA</div>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onClick={() => handleClick()}
          >
            <Menu />
          </div>
        </div>
        <div className="col-span-1 items-center text-center">
          <a href="#">
            <div
              className=" px-8 py-4 hover:bg-white hover:text-black"
              onClick={() => handleClick()}
            >
              Home
            </div>
          </a>
        </div>
        <div className="col-span-1 items-center text-center">
          <a href="#service" className="">
            <div
              className="px-8 py-4 hover:bg-white hover:text-black"
              onClick={() => handleClick()}
            >
              Services
            </div>
          </a>
        </div>
        <div className="col-span-1 items-center  text-center ">
          <a href="#blog">
            <div
              className="px-8 py-4 hover:bg-white hover:text-black"
              onClick={() => handleClick()}
            >
              Blog
            </div>
          </a>
        </div>
        <div className="col-span-1 items-center  text-center">
          <a href="#aboutus">
            <div
              className="px-8 py-4 hover:bg-white hover:text-black"
              onClick={() => handleClick()}
            >
              About Us
            </div>
          </a>
        </div>
        <div className="col-span-1 items-center text-center">
          <a href="#faq">
            <div
              className="px-8 py-4 hover:bg-white hover:text-black"
              onClick={() => handleClick()}
            >
              FAQ
            </div>
          </a>
        </div>
        <div className="col-span-1 items-center text-center">
          <a href="#contact">
            <div
              className="px-8 py-4 hover:bg-white hover:text-black"
              onClick={() => handleClick()}
            >
              Contact
            </div>
          </a>
        </div>
      </Dialog>
    </div>
  );
}
