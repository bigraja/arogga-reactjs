import TopSection from "./partial/TopSection";
import SearchSection from "./partial/SearchSection";
import SliderSection from "./partial/SliderSection";
import ActionBoxSection from "./partial/ActionBoxSection";
import ProductsSection from "./partial/ProductsSection";
import CategorySection from "./partial/CategorySection";

// data
import carouselImages from "./../data/carouselImages";
import topbrands from "./../data/topbrands.js";
import products from "./../data/products";
import categorys from "../data/categorys.js";
import { Link } from "react-router-dom";

const products2 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products3 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

function Beauty() {

    return (
        <>
            <TopSection />
            <SearchSection />
            <SliderSection carouselImages={carouselImages} />

            <ProductsSection products={products} title="Top Trending Products" link="/" color="#000" backgroundColor="#fff" />

            {/* top Deals */}

            <ProductsSection products={products2} title="Newly Lanched Items" link="/" color="#000" backgroundColor="#fff" />
            <ProductsSection products={products3} title="All About Your Face" link="/" color="#eca8cd" backgroundColor="#eca8cd1a" />

            <section className="py-3 my-2" >
                <div className="flex justify-between px-2 font-medium sm:px-4">
                    <h3>Top Brand</h3>
                    <Link href="/" className="text-sm">see all</Link>
                </div>

                <div className="overflow-x-auto scroll-hidden">
                    <div className="flex flex-wrap gap-5 px-2 pt-3 sm:px-4 w-fit">

                        {
                            topbrands.map((brand, index) => {
                                return <img src={brand.image} alt={brand.alt} className="w-full" />
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
}


export default Beauty;