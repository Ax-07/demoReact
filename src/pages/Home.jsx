import { HeroBanner } from "../components/HeroBanner";
import { Gallery } from "../layouts/Gallery";
import heroImg from "../assets/images/e270fc8fc902a1eb738458e7b29c1899.jpg";

export const Home = () => {
    const heroTitle = "Chez vous, partout et ailleurs"
    return ( 
        <>
            <HeroBanner src="home" heroTitle={heroTitle} heroImg={heroImg} />
            <Gallery />
        </>
    );
};