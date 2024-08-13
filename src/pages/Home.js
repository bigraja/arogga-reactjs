import TopSection from "./partial/TopSection";
import SearchSection from "./partial/SearchSection";
import SliderSection from "./partial/SliderSection";
import ActionBoxSection from "./partial/ActionBoxSection";
import ProductsSection from "./partial/ProductsSection";
import CategorySection from "./partial/CategorySection";
import FeaturedBrands from "./partial/FeaturedBrands.js";

// data
import carouselImages from "./../data/carouselImages";
import actionBoxes from "./../data/actionBoxes";
import categorys from "../data/categorys.js";
import brands from "../data/brands.js";
import products from "./../data/products";

// image load
import banner from "./../images/banner.webp";
import banner2 from "./../images/banner2.webp";

const products2 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products3 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products4 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products5 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products6 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products7 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products8 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const products9 = products
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

function Home() {

    return (
        <>
            <TopSection />
            <SearchSection />
            <SliderSection carouselImages={carouselImages} />
            <ActionBoxSection actionBoxes={actionBoxes} />
            <ProductsSection products={products} title="Best Selling Products" link="/" color="#" backgroundColor="#" />

            <div className="p-2 mx-2 mt-4 bg-[#fd81811a] rounded-lg text-[#fd6a6a] items-center justify-between sm:mx-4 flex">
                <span>
                    <svg className="inline me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M2 12.0017C2 9.60167 2.7375 7.50167 4.2125 5.70167C5.6875 3.90167 7.55 2.75167 9.8 2.25167C10.1333 2.16834 10.4167 2.20167 10.65 2.35167C10.8833 2.50167 11 2.73501 11 3.05167C11 3.38501 10.8917 3.64751 10.675 3.83917C10.4583 4.03084 10.1833 4.17667 9.85 4.27667C8.13333 4.74334 6.72917 5.68084 5.6375 7.08917C4.54583 8.49751 4 10.135 4 12.0017C4 12.735 4.09167 13.4392 4.275 14.1142C4.45833 14.7892 4.71667 15.4183 5.05 16.0017C5.21667 16.285 5.29583 16.5683 5.2875 16.8517C5.27917 17.135 5.15833 17.3933 4.925 17.6267C4.70833 17.8433 4.475 17.935 4.225 17.9017C3.975 17.8683 3.76667 17.7183 3.6 17.4517C3.08333 16.6517 2.6875 15.7975 2.4125 14.8892C2.1375 13.9808 2 13.0183 2 12.0017ZM12 22.0017C10.9833 22.0017 10.0125 21.86 9.0875 21.5767C8.1625 21.2933 7.3 20.8933 6.5 20.3767C6.25 20.21 6.10833 19.9975 6.075 19.7392C6.04167 19.4808 6.125 19.2433 6.325 19.0267C6.54167 18.7933 6.79167 18.6767 7.075 18.6767C7.35833 18.6767 7.64167 18.76 7.925 18.9267C8.525 19.2767 9.16667 19.5433 9.85 19.7267C10.5333 19.91 11.25 20.0017 12 20.0017C12.75 20.0017 13.4667 19.91 14.15 19.7267C14.8333 19.5433 15.475 19.2767 16.075 18.9267C16.3583 18.76 16.6417 18.6725 16.925 18.6642C17.2083 18.6558 17.4583 18.7683 17.675 19.0017C17.875 19.2183 17.9583 19.46 17.925 19.7267C17.8917 19.9933 17.75 20.21 17.5 20.3767C16.7 20.8933 15.8375 21.2933 14.9125 21.5767C13.9875 21.86 13.0167 22.0017 12 22.0017ZM22 12.0017C22 13.0183 21.8625 13.9808 21.5875 14.8892C21.3125 15.7975 20.9167 16.6517 20.4 17.4517C20.2333 17.7183 20.025 17.8683 19.775 17.9017C19.525 17.935 19.2917 17.8433 19.075 17.6267C18.8417 17.3933 18.7208 17.135 18.7125 16.8517C18.7042 16.5683 18.7833 16.285 18.95 16.0017C19.2833 15.4183 19.5417 14.7892 19.725 14.1142C19.9083 13.4392 20 12.735 20 12.0017C20 10.135 19.4542 8.49751 18.3625 7.08917C17.2708 5.68084 15.8667 4.74334 14.15 4.27667C13.8167 4.17667 13.5417 4.03084 13.325 3.83917C13.1083 3.64751 13 3.38501 13 3.05167C13 2.73501 13.1167 2.50167 13.35 2.35167C13.5833 2.20167 13.8667 2.16834 14.2 2.25167C16.45 2.75167 18.3125 3.90167 19.7875 5.70167C21.2625 7.50167 22 9.60167 22 12.0017ZM9.5 15.5767V8.42667C9.5 8.22667 9.5875 8.07667 9.7625 7.97667C9.9375 7.87667 10.1083 7.88501 10.275 8.00167L15.85 11.5767C16 11.6767 16.075 11.8183 16.075 12.0017C16.075 12.185 16 12.3267 15.85 12.4267L10.275 16.0017C10.1083 16.1183 9.9375 16.1267 9.7625 16.0267C9.5875 15.9267 9.5 15.7767 9.5 15.5767Z" fill="currentColor"></path>
                        </g>
                    </svg>
                    How to order from Arogga app?
                </span>
                <span>1:38</span>
            </div>

            <CategorySection categorys={categorys} />

            <div className="px-2 my-4 sm:px-4">
                <img src={banner} alt="..." className="w-full rounded-lg" />
            </div>

            <FeaturedBrands brands={brands} />

            <ProductsSection products={products} title="Newly Launched Iems" link="/" color="#" backgroundColor="#" />
            <ProductsSection products={products2} title="Everyday Essentials" link="/" color="#" backgroundColor="#" />
            <ProductsSection products={products3} title="Summer Deals of the Week" link="/" color="#0da2b4" backgroundColor="#0da2b41a" />

            <div className="px-2 my-4 sm:px-4">
                <img src={banner2} alt="..." className="w-full rounded-lg" />
            </div>

            <ProductsSection products={products4} title="Baby Care" link="/" color="#0b600e" backgroundColor="#0b600e1a" />
            <ProductsSection products={products5} title="Cat Food" link="/" color="#eca8cd" backgroundColor="#eca8cd1a" />
            <ProductsSection products={products6} title="Kitten Food" link="/" color="#48c3c5" backgroundColor="#48c3c51a" />
            <ProductsSection products={products7} title="Antiseptic Cream & Spray" link="/" color="#" backgroundColor="#" />
            <ProductsSection products={products8} title="Diabetes Care" link="/" color="#ba880d " backgroundColor="#ba880d1a" />
            <ProductsSection products={products9} title="Beauty Suppliments" link="/" color="#" backgroundColor="#" />


        </>
    );
}

export default Home;