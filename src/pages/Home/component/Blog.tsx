import { Link } from "react-router-dom";
import pic1 from "@/assets/images/1.png";
import pic2 from "@/assets/images/2.jpg";
import pic3 from "@/assets/images/3.png";

export default function Blog() {
  return (
    <div
      id="blog"
      className="relative mt-12 px-10 lg:mt-48 lg:px-20 2xl:px-64 "
    >
      <div className="text-center">
        <div className="text-[60px] font-bold">Crypto Blogs</div>
      </div>
      <hr className="my-10 text-[#343434]"></hr>
      <div>
        <div className="text-[20px] font-bold text-[#86f4e1]">Featured</div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 ">
          <div className="rounded-xl bg-[#ffffff12]">
            <div className="">
              <img src={pic2} />
            </div>
          </div>
          <div className="mt-4 lg:ml-32 lg:mt-0">
            <div className=" text-[24px] text-[#86f4e1]">
              <Link to="/">
                How to Manage Your Crypto Business Online Reputation?
              </Link>
            </div>
            <div>July 27, 2023 - Liam Quinlan-Stamp</div>
            <div className="mt-4 text-[24px] text-[#86f4e1] lg:mt-16">
              <Link to="/">Crypto SEO: Why is it important? </Link>
            </div>
            <div>March 28, 2022 - Liam Quinlan-Stamp</div>
          </div>
        </div>
        <div>
          <div className="mt-4 text-[24px] font-bold text-[#86f4e1]">
            The Role of Social Media in Crypto Marketing
          </div>
          <div>February 15, 2024 - Peter ZL</div>
        </div>
        <hr className="my-10 text-[#343434]"></hr>
        <div>
          <div className="text-[24px] font-bold text-[#86f4e1]">
            Latest News
          </div>
          <div>
            Get the latest news and marketing ploys with our Crypto Blog. Here
            we cover all things Crypto Marketing, including Crypto SEO,
            Influencer Marketing, and anything else that takes our interest!
          </div>
        </div>
        <div>
          <div className="mt-4 grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <img src={pic1} className="rounded-xl" />
              <Link to="/">
                <div className="mt-1 text-[#86f4e1]">Case Study</div>
              </Link>
              <Link to="/">
                <div className="mt-1 text-[#8664fb]">
                  Jurat BlockChains & JTC: A Coinpresso Client Case Study
                </div>
              </Link>
              <div className="mt-1">January 19, 2024 - Peter ZL</div>
            </div>
            <div>
              <img src={pic3} className="rounded-xl" />
              <Link to="/">
                <div className="mt-1 text-[#86f4e1]">Case Study</div>
              </Link>
              <Link to="/">
                <div className="mt-1 text-[#8664fb]">
                  Jurat BlockChains & JTC: A Coinpresso Client Case Study
                </div>
              </Link>
              <div className="mt-1">January 19, 2024 - Peter ZL</div>
            </div>
            <div>
              <img src={pic1} className="rounded-xl" />
              <Link to="/">
                <div className="mt-1 text-[#86f4e1]">Case Study</div>
              </Link>
              <Link to="/">
                <div className="mt-1 text-[#8664fb]">
                  Jurat BlockChains & JTC: A Coinpresso Client Case Study
                </div>
              </Link>
              <div className="mt-1">January 19, 2024 - Peter ZL</div>
            </div>
            <div>
              <img src={pic3} className="rounded-xl" />
              <Link to="/">
                <div className="mt-1 text-[#86f4e1]">Case Study</div>
              </Link>
              <Link to="/">
                <div className="mt-1 text-[#8664fb]">
                  Jurat BlockChains & JTC: A Coinpresso Client Case Study
                </div>
              </Link>
              <div className="mt-1">January 19, 2024 - Peter ZL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
