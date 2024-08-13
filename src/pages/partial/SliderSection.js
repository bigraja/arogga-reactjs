import { Carousel } from "flowbite-react";

function SliderSection({ carouselImages }) {

    const img = carouselImages.map((image, key) => {
        return <img src={image.image} alt={image.alt} key={key} />
    });

    return (
        <section className="relative w-full px-2 h-44 sm:h-72 md:h-80 sm:px-4">
            <Carousel>{img}</Carousel>
        </section>
    )
}

export default SliderSection;