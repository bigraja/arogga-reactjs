import { Outlet } from "react-router-dom";
import BottomMenu from "./partial/BottomMenu";

// data
import bottomMenu from "./../data/bottomMenu";

function Layout() {

    return (
        <>
            <div className="border-x dark:border-gray-700 max-w-[45rem] min-h-[90vh] mx-auto">
                <Outlet />
            </div>

            {/* space */}
            <div className="h-20 dark:bg-black"></div>

            {/* bottom menu */}
            <BottomMenu menu={bottomMenu} />
        </>
    );
}


export default Layout;