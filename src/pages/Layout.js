import { Outlet } from "react-router-dom";
import BottomMenu from "./partial/BottomMenu";

// data
import bottomMenu from "./../data/bottomMenu";

function Layout() {

    return (
        <>
            <div className="border-x max-w-[45rem] mx-auto">
                <Outlet />
            </div>

            {/* space */}
            <div className="h-20"></div>

            {/* bottom menu */}
            <BottomMenu menu={bottomMenu} />
        </>
    );
}


export default Layout;