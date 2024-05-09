import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div id="contact" className="relative mx-10 my-20 lg:mx-32 2xl:mx-96 ">
      <div className="grid grid-cols-3 lg:grid-cols-4 ">
        <div className="lg:col-span-1"></div>
        <div className="col-span-3">
          <div className="text-[60px] font-bold">Contact</div>
          <div className="mt-8 lg:grid lg:grid-cols-4">
            <div className="col-span-1">
              <div className="text-[24px] font-bold">
                NAME<span className="text-[#e30303]">*</span>
              </div>
            </div>
            <div className="col-span-3 mt-4 lg:mt-0">
              <input
                className="inputstyle w-full bg-transparent px-2 py-3 text-[12px] outline-none"
                placeholder="Your name"
              ></input>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-4">
            <div className="col-span-1">
              <div className="text-[24px] font-bold">
                EMAIL<span className="text-[#e30303]">*</span>
              </div>
            </div>
            <div className="col-span-3 mt-4 lg:mt-0">
              <input
                className="inputstyle w-full bg-transparent px-2 py-3 text-[12px] outline-none"
                placeholder="Your name"
              ></input>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-4">
            <div className="col-span-1">
              <div className="text-[24px] font-bold">
                YOUR WEBSITE<span className="text-[#e30303]">*</span>
              </div>
            </div>
            <div className="col-span-3 mt-4 lg:mt-0">
              <input
                className="inputstyle w-full bg-transparent px-2 py-3 text-[12px] outline-none"
                placeholder="Your name"
              ></input>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-4">
            <div className="col-span-1">
              <div className="text-[24px] font-bold">
                MESSAGE<span className="text-[#e30303]">*</span>
              </div>
            </div>
            <div className="col-span-3 mt-4 lg:mt-0">
              <input
                className="inputstyle w-full bg-transparent px-2 py-3 text-[12px] outline-none"
                placeholder="Your name"
              ></input>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Link to="/">
              <div className="border-4 border-[#1d1d1d88] px-8 py-4 text-[24px] font-bold hover:bg-white hover:text-black">
                Send
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
