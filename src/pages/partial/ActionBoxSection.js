import { Link } from "react-router-dom";

function ActionBoxSection({ actionBoxes }) {

    const boxes = actionBoxes.map((box, key) => {
        return (
            <div className="relative mt-2" key={key}>
                <img src={box.image} className="absolute top-0 right-0 w-10" alt={box.alt} />
                <div className="flex flex-col justify-between p-2 custom-box" style={{ background: box.background_color }}>
                    <h3 className="text-lg font-bold whitespace-pre-line">{box.heading}</h3>
                    <h3 className="text-sm font-medium whitespace-pre-line line ">{box.title}</h3>
                    <Link to={box.link} style={{ color: box.color }} className="text-center text-[#47b24b] text-xs py-1 bg-white dark:bg-black rounded">{box.link_text}</Link>
                </div>
            </div>
        )
    });

    return (
        <section className="overflow-x-auto scroll-hidden">
            <div className="flex gap-5 px-2 sm:px-4 w-fit">
                {boxes}
            </div>
        </section>
    )
}

export default ActionBoxSection;