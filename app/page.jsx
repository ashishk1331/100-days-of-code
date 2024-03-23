import Gradient from "@/components/landing/Gradient.jsx";
import Logo, { LogoColumn } from "@/components/landing/Logo.jsx";
import TimeLine from "@/components/landing/Timeline.jsx";
import Subscribe from "@/components/landing/Subscribe.jsx";
import Header from "@/components/landing/Header.jsx";

export default function (props) {
    return (
        <>
            <Header />
            <div className="relative w-full min-h-screen flex flex-col justify-center text-center text-white overflow-hidden" id="first">
                <Gradient />
                <div className="max-w-[720px] mx-auto z-30 p-8 md:p-0">
                    <LogoColumn className="w-full fill-white md:hidden" />
                    <Logo className="w-full fill-white hidden md:block" />
                </div>
            </div>
            {/*<TimeLine />*/}
            <Subscribe />
            <div className="relative w-full h-48 flex flex-col justify-center text-center text-white overflow-hidden">
                <Gradient />
            </div>
        </>
    );
}
