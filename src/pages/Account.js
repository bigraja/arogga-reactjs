import { Link } from "react-router-dom";

// local files
import TopSection from "./partial/TopSection";
import SearchSection from "./partial/SearchSection";
import SliderSection from "./partial/SliderSection";
import ActionBoxSection from "./partial/ActionBoxSection";
import ProductsSection from "./partial/ProductsSection";
import CategorySection from "./partial/CategorySection";

// data
import carouselImages from "./../data/carouselImages";
import actionBoxes from "./../data/actionBoxes";
import products from "./../data/products";
import categorys from "../data/categorys.js";
import accountMenu1 from "../data/accountMenu1.js";
import accountMenu2 from "../data/accountMenu2.js";

function Account() {

    return (
        <>
            <div className="sticky top-0 z-50 flex items-center gap-2 px-2 py-3 bg-white sm:px-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill="currentColor" width="24"><path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z"></path></svg>
                <div className="font-semibold ">My Account</div>
            </div>

            <h3 className="mx-2 my-2 font-bold sm:mx-4">My Profile</h3>
            <p className="mx-2 my-2 text-xs text-gray-400 sm:mx-4">Log in or Register to view your complete profile</p>

            <div className="flex items-center justify-center gap-2 my-3 font-bold text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none"><path d="M9.8 11.2758C9.6 11.0758 9.50417 10.8341 9.5125 10.5508C9.52083 10.2674 9.625 10.0258 9.825 9.82578L12.65 7.00078H1.5C1.21667 7.00078 0.979167 6.90495 0.7875 6.71328C0.595833 6.52161 0.5 6.28411 0.5 6.00078C0.5 5.71745 0.595833 5.47995 0.7875 5.28828C0.979167 5.09661 1.21667 5.00078 1.5 5.00078H12.65L9.8 2.15078C9.6 1.95078 9.5 1.71328 9.5 1.43828C9.5 1.16328 9.6 0.925781 9.8 0.725781C10 0.525781 10.2375 0.425781 10.5125 0.425781C10.7875 0.425781 11.025 0.525781 11.225 0.725781L15.8 5.30078C15.9 5.40078 15.9708 5.50911 16.0125 5.62578C16.0542 5.74245 16.075 5.86745 16.075 6.00078C16.075 6.13411 16.0542 6.25911 16.0125 6.37578C15.9708 6.49245 15.9 6.60078 15.8 6.70078L11.2 11.3008C11.0167 11.4841 10.7875 11.5758 10.5125 11.5758C10.2375 11.5758 10 11.4758 9.8 11.2758Z" fill="currentCOlor"></path></svg>
                <span>Continue</span>
            </div>

            <AccountMenu menu={accountMenu1} />


            <div className="m-2 text-sm text-[#cbd5e0] md:mx-4">Legal & Support</div>

            <AccountMenu menu={accountMenu2} />

            <div className="m-2 text-sm text-[#cbd5e0] md:mx-4">Mobile Web Version 6.1.8</div>
        </>
    );
}


function AccountMenu({ menu }) {

    const filter = "invert(62%) sepia(17%) saturate(362%) hue-rotate(176deg) brightness(90%) contrast(87%)";

    const menuItems = menu.map((item, index) => {
        return (
            <Link to={item.link} className="flex items-center justify-between px-2 py-3 border-b" key={index}>
                <div className="flex gap-2">
                    <img src={item.svg_icon} alt="..." style={{ filter: filter }} />
                    <span>{item.label}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z"></path></svg>
            </Link>
        )
    });

    return (
        <div className="mx-2 text-[#8693a6] shadow text-sm font-medium rounded-md md:mx-4">
            {menuItems}
        </div>
    )
}


export default Account;