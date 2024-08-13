import { Link } from "react-router-dom";

function ProductsSection({ products, color, backgroundColor, title, link }) {

    const productCards = products.map((product, index) => {
        return (
            <div className="flex flex-col w-32 gap-2" key={index}>
                <div className="w-32 h-32 border rounded-lg">
                    <img alt="..." className="rounded-lg" src={product.image} /></div>
                <div>
                    <h4 className="overflow-hidden text-sm font-medium max-h-10 text-ellipsis">{product.name}</h4>
                    <div className="font-bold text-[.7rem] text-gray-500">{product.weight}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="font-bold line-through text-[.6rem] text-gray-400">৳{product.old_price}</div>
                        <div className="text-xs font-bold">৳{product.price}</div>
                    </div>
                    <button
                        className="px-4 py-[.2rem] text-sm font-bold text-green-500 border border-green-500 rounded">Add</button>
                </div>
            </div>
        )
    })

    return (
        <section className="py-3 my-2" style={{ backgroundColor: backgroundColor }}> {/* change bg color */}
            <div className="flex justify-between px-2 font-medium sm:px-4" style={{ color: color }}> {/* change text color */}
                <h3>{title}</h3>
                <Link href={link} className="text-sm">see all</Link>
            </div>

            <div className="overflow-x-auto scroll-hidden">
                <div className="flex gap-5 px-2 pt-3 sm:px-4 w-fit">

                    {productCards}

                </div>
            </div>
        </section>
    );
}

export default ProductsSection;