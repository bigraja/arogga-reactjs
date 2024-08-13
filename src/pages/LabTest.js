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

function LabTest() {

    return (
        <>
            <TopSection />
            <SearchSection />
            <SliderSection carouselImages={carouselImages} />

           
        </>
    );
}


export default LabTest;