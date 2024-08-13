
function FeaturedBrands({ brands }) {
    return (<div className="px-2 my-4 sm:px-4">
        <h3>Featured Brands</h3>
        <div className="flex flex-wrap items-center justify-around gap-2 m-4 sm:gap-4">

            {
                brands.map((brand, index) => {
                    return (
                        <div className="w-24 h-24 rounded-full shadow" key={index}>
                            <img src={brand.image} alt={brand.alt} className="p-4 mx-auto max-w-24 max-h-24" />
                        </div>
                    )
                })
            }


        </div>
        <button className="w-full py-2 font-semibold text-center text-green-600 border border-green-600 rounded-lg">See All</button>
    </div>)
}

export default FeaturedBrands;