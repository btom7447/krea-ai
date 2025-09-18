import FluxCarousel from "../general/FluxCarousel";
import WannCarousel from "../general/WannCarousel";

export default function CarouselSection() {
    return (
        <section className="p-5 pb-15 lg:p-10 bg-white dark:bg-black grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-10 items-start">
            <WannCarousel />
            <FluxCarousel />
        </section>
    )
}