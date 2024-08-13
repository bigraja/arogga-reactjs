import { Link, useLocation } from "react-router-dom";

function BottomMenu({ menu }) {

    const pathname = useLocation().pathname;
    const filterA = "invert(23%) sepia(61%) saturate(3297%) hue-rotate(151deg) brightness(92%) contrast(96%)";
    const filterB = "invert(62%) sepia(17%) saturate(362%) hue-rotate(176deg) brightness(90%) contrast(87%)";

    const menuItems = menu.map((item, index) => {
        return (
            <Link to={item.link} key={index}
                className={"flex flex-col items-center justify-center h-full px-1" + (pathname === item.link ? " border-t-[3px] border-green-600 text-green-600" : "")}>
                <img src={item.svg_icon} alt="..." style={(pathname === item.link ? { filter: filterA } : { filter: filterB })} />
                <span>{item.label}</span>
            </Link>
        )
    });

    return (
        <div className="fixed bottom-0 w-full bg-white">
            <div className="border-x max-w-[45rem] mx-auto border-t h-20">
                <div className="flex justify-between h-full px-2 text-sm font-semibold text-[#8693a6]">

                    {menuItems}

                </div>
            </div>
        </div>
    );
}

export default BottomMenu;