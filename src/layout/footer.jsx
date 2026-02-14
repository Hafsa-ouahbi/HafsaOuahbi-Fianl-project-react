import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
function Footer1() {
    return (
        <div className="w-[full] h-[60vh]  justify-center items-center bg-[#F0F0F0]">
            <div className=" flex justify-around items-center w-[90%] h-[80%]">
                <div className="flex flex-col w-[20%] justify-around h-[60%] ">
                    <h1 className="font-bold text-[#222222]">GET IN TOUCH</h1>
                    <p className="text-gray-500">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                    </p>
                    <div className="flex text-2xl  justify-around text-gray-500">
                         <FaFacebookF />
            <IoLogoTwitter />
            <FaPinterest />
            <FaGoogle />
            <FaInstagram />
                    </div>
                </div>
                <div className="flex flex-col h-[60%]  ">
                    <h1 className="font-bold text-[#222222]">CATEGORIES</h1>
                    <div className="flex flex-col text-gray-500 h-30 justify-around ">
                        <span>Men</span>
                    <span>Wimen</span>
                    <span>Dresses</span>
                    <span>Sungless</span>
                    </div>
                </div>
                <div className="flex flex-col h-[60%]  gap-8">
                     <h1 className="font-bold text-[#222222]">LINKS</h1>
                    <div className="flex text-gray-500 flex-col h-30 justify-around  ">
                        <span>Search</span>
                    <span>About Us</span>
                    <span>Contact Us</span>
                    <span>Returns</span>
                    </div>
                </div>
                <div className="flex flex-col h-[60%] gap-8 ">
                      <h1 className="font-bold text-[#222222]">HELP</h1>
                    <div className="flex text-gray-500 flex-col h-30 justify-around  ">
                        <span>Track Order</span>
                    <span>Returns</span>
                    <span>Shipping</span>
                    <span>FAQs</span>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[60%] justify-center gap-5">
                    <h1 className="font-bold text-[#222222]">NEWSLETTER</h1>
                    <input type="text" className="outline-0 border-b-1 border-gray-500 text-gray-500 "  placeholder="Email Address "/>
                    <button className="w-[150px] h-[40px] text-[#ffffff] bg-black rounded-3xl">SUBSCRIBE</button>
                </div>



            </div>
            
                <div className="flex items-center justify-center text-gray-500 ">
                    <p>Copyright Â©</p>
                    <h1>Shopify Theme Develoed by MassTechnologist </h1>
                    <p>All rights reserved.</p>
                </div>

        </div>
    );
}

export default Footer1;