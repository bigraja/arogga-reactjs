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
import topbrands from "../data/topbrands.js";
import { Link } from "react-router-dom";

const topbrands1 = topbrands
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

function HealthCare() {

    return (
        <>
            <TopSection />
            <SearchSection />
            <SliderSection carouselImages={topbrands} />
            <CategorySection categorys={categorys} />

            <section className="py-3 my-2" >
                <div className="flex justify-between px-2 font-medium sm:px-4 dark:text-white">
                    <h3>All Brands</h3>
                    <Link href="/" className="text-sm">see all</Link>
                </div>

                <div className="overflow-x-auto scroll-hidden">
                    <div className="flex flex-wrap gap-5 px-2 pt-3 sm:px-4 w-fit">

                        {
                            topbrands1.map((brand, index) => {
                                return <img src={brand.image} alt={brand.alt} className="w-full" />
                            })
                        }

                    </div>
                </div>
            </section>

            <ProductsSection products={products} title="Clearance Sales" link="/" color="#" backgroundColor="#" />
        </>
    );
}


export default HealthCare;