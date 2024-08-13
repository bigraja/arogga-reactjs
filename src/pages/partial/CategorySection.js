import { Link } from "react-router-dom";

function CategorySection({ categorys }) {

    const box = categorys.map((category, index) => {
        return (
            <div key={index}>
                <Link to={category.link} className="h-20 rounded-lg">
                    <img alt="..." src={category.image} className="p-1 bg-[#e5f3f3] rounded-lg" />
                </Link>
                <h4 className="pt-2 text-sm font-normal text-center">{category.name}</h4>
            </div>
        )
    })

    return (
        <section className="px-2 sm:px-4">
            <h3 className="py-4 font-bold">Category</h3>
            <div className="grid grid-cols-4 gap-3 text-center">

                {box}

            </div>
        </section>
    );
}

export default CategorySection;