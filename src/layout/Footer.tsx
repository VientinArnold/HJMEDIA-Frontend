import Logo from "@/assets/images/logo.png";
import Twitter from "@/assets/icons/github.svg";
import Telegram from "@/assets/icons/telegram.svg";

export default function Footer() {
  return (
    <div className="relative">
      <hr className="my-10 text-[#343434]"></hr>
      <div className="mt-10">
        <div className="lg:grid  lg:grid-cols-12 ">
          <div className="col-span-2 lg:col-span-9">
            <div className="flex items-center justify-center gap-4 py-10 lg:justify-start lg:px-12 ">
              <div>
                <a href="#">
                  <img src={Logo} width={100} height={100} />
                </a>
              </div>
              <div className="text-[24px] font-bold">HJ MEDIA</div>
            </div>
            <div className="text-[24px] font-bold lg:mb-36 lg:flex lg:justify-start lg:px-12">
              <div className=" items-center text-center">
                <a href="#">
                  <div className="px-8 py-4 hover:bg-white hover:text-black">
                    Home
                  </div>
                </a>
              </div>
              <div className=" items-center text-center">
                <a href="#service">
                  <div className="px-8 py-4 hover:bg-white hover:text-black">
                    Services
                  </div>
                </a>
              </div>
              <div className=" items-center  text-center ">
                <a href="#blog">
                  <div className="px-8 py-4 hover:bg-white hover:text-black">
                    Blog
                  </div>
                </a>
              </div>
              <div className=" items-center  text-center">
                <a href="#aboutus">
                  <div className="px-8 py-4 hover:bg-white hover:text-black">
                    About Us
                  </div>
                </a>
              </div>
              <div className=" items-center text-center">
                <a href="#faq">
                  <div className="px-8 py-4 hover:bg-white hover:text-black">
                    FAQ
                  </div>
                </a>
              </div>
              <div className=" items-center text-center">
                <a href="#contact">
                  <div className="px-8 py-4 hover:bg-white hover:text-black">
                    Contact
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-3 text-center text-[24px] ">
            <div className="px-10  lg:pt-24">
              <div>Contact: partners@ hjmediaconsultants.com</div>
            </div>
            <div className="flex justify-center gap-4 py-4">
              <a
                href="https://telegram.com/@hjmediaconsultants"
                target="_blank"
              >
                <Telegram />
              </a>

              <a href="https://twitter.com/HJMediaPartners" target="_blank">
                <Twitter />
              </a>
            </div>
            <div className="px-10">
              Address: 429 Commercial Space Chevelle Center Road Town , Tortola,
              British Virgin Islands.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
