import Gradient from "@/components/landing/Gradient.jsx";
import Logo, { LogoColumn } from "@/components/landing/Logo.jsx";
import TimeLine from "@/components/landing/Timeline.jsx";
import Subscribe from "@/components/landing/Subscribe.jsx";
import Header from "@/components/landing/Header.jsx";
import Banner from "@/components/landing/Banner.jsx";
import Footer from "@/components/landing/Footer.jsx";

export default function (props) {
    return (
        <>
            <Header />
            <Banner />
            <TimeLine />
            <Subscribe />
            <Footer />
        </>
    );
}
