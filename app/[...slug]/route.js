import { NextResponse } from "next/server";
import { ImageResponse } from "next/server";
import { optimize } from "svgo";
import path from "path";
import satori from "satori";
import { promises as fs } from "fs";

export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/svg";

const factor = 2;

export async function GET(req, { params }) {
    let [index] = params.slug;

    const dir = path.join(process.cwd());
    const PoppinsRegularBuffer = await fs.readFile(
        dir + "/app/[...slug]/Poppins-Regular.ttf",
    );
    const PoppinsMediumBuffer = await fs.readFile(
        dir + "/app/[...slug]/Poppins-Medium.ttf",
    );
    const PoppinsBoldBuffer = await fs.readFile(
        dir + "/app/[...slug]/Poppins-Bold.ttf",
    );
    const PoppinsBlackBuffer = await fs.readFile(
        dir + "/app/[...slug]/Poppins-Black.ttf",
    );

    const svg = await satori(getLayout(index), {
        width: 1200 * factor,
        height: 675 * factor,
        fonts: [
            {
                name: "poppins",
                data: PoppinsRegularBuffer,
                weight: 400,
                style: "normal",
            },
            {
                name: "poppins",
                data: PoppinsMediumBuffer,
                weight: 500,
                style: "normal",
            },
            {
                name: "poppins",
                data: PoppinsBoldBuffer,
                weight: 700,
                style: "normal",
            },
            {
                name: "poppins",
                data: PoppinsBlackBuffer,
                weight: 900,
                style: "normal",
            },
        ],
    });

    const result = optimize(svg, {
        path: "path-to.svg",
        multipass: true,
    });

    return new Response(result.data, {
        headers: {
            "Content-Type": "image/svg+xml",
        },
    });
}

function getLayout(index) {
    while (index.length < 3) {
        index = "0" + index;
    }
    return (
        <div
            tw="w-full h-full flex flex-col p-24 items-center"
            style={{ gap: "8rem" }}
        >
            <svg
                viewBox="0 0 1200 675"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                tw="absolute inset-0 w-auto h-auto"
            >
                <g clip-path="url(#clip0_5_2)">
                    <rect width="1200" height="675" fill="white" />
                    <g clip-path="url(#clip1_5_2)">
                        <g opacity="0.83" filter="url(#filter0_f_5_2)">
                            <rect
                                x="2555.08"
                                y="712.801"
                                width="113.956"
                                height="3796.88"
                                transform="rotate(135 2555.08 712.801)"
                                fill="url(#paint0_linear_5_2)"
                            />
                        </g>
                        <g opacity="0.4" filter="url(#filter1_f_5_2)">
                            <rect
                                x="830.703"
                                y="-185.941"
                                width="206.559"
                                height="3796.88"
                                transform="rotate(-45 830.703 -185.941)"
                                fill="url(#paint1_linear_5_2)"
                            />
                        </g>
                        <g opacity="0.3" filter="url(#filter2_f_5_2)">
                            <rect
                                x="-586.297"
                                y="344.645"
                                width="645.793"
                                height="3796.88"
                                transform="rotate(-45 -586.297 344.645)"
                                fill="url(#paint2_linear_5_2)"
                            />
                        </g>
                    </g>
                    <path
                        opacity="0.1"
                        d="M24 821L24 -146"
                        stroke="url(#paint3_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M88 821L88 -146"
                        stroke="url(#paint4_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M152 821L152 -146"
                        stroke="url(#paint5_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M216 821L216 -146"
                        stroke="url(#paint6_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M280 821L280 -146"
                        stroke="url(#paint7_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M344 821L344 -146"
                        stroke="url(#paint8_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M408 821L408 -146"
                        stroke="url(#paint9_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M472 821L472 -146"
                        stroke="url(#paint10_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M536 821L536 -146"
                        stroke="url(#paint11_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M600 821L600 -146"
                        stroke="url(#paint12_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M664 821L664 -146"
                        stroke="url(#paint13_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M728 821L728 -146"
                        stroke="url(#paint14_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M792 821L792 -146"
                        stroke="url(#paint15_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M856 821L856 -146"
                        stroke="url(#paint16_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M920 821L920 -146"
                        stroke="url(#paint17_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M984 821L984 -146"
                        stroke="url(#paint18_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M1048 821L1048 -146"
                        stroke="url(#paint19_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M1112 821L1112 -146"
                        stroke="url(#paint20_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M1176 821L1176 -146"
                        stroke="url(#paint21_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 622H1560"
                        stroke="url(#paint22_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 558H1560"
                        stroke="url(#paint23_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 494H1560"
                        stroke="url(#paint24_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 430H1560"
                        stroke="url(#paint25_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 366H1560"
                        stroke="url(#paint26_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 302H1560"
                        stroke="url(#paint27_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 238H1560"
                        stroke="url(#paint28_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 174H1560"
                        stroke="url(#paint29_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 110H1560"
                        stroke="url(#paint30_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                    <path
                        opacity="0.1"
                        d="M-360 46H1560"
                        stroke="url(#paint31_linear_5_2)"
                        stroke-opacity="0.2"
                        stroke-width="3"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_5_2"
                        x="-705.793"
                        y="-2467.5"
                        width="3756.37"
                        height="3756.37"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="247.748"
                            result="effect1_foregroundBlur_5_2"
                        />
                    </filter>
                    <filter
                        id="filter1_f_5_2"
                        x="718.703"
                        y="-444"
                        width="3054.86"
                        height="3054.86"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="56"
                            result="effect1_foregroundBlur_5_2"
                        />
                    </filter>
                    <filter
                        id="filter2_f_5_2"
                        x="-986.297"
                        y="-512"
                        width="3941.45"
                        height="3941.45"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="200"
                            result="effect1_foregroundBlur_5_2"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_5_2"
                        x1="2612.06"
                        y1="712.801"
                        x2="2612.06"
                        y2="4509.68"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.121932" stop-color="#471EBC" />
                        <stop
                            offset="0.555273"
                            stop-color="#818CF8"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_5_2"
                        x1="1023.33"
                        y1="-378.244"
                        x2="373.952"
                        y2="2077.58"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#8B5CF6" />
                        <stop
                            offset="0.650052"
                            stop-color="#818CF8"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_5_2"
                        x1="-661.634"
                        y1="1777.77"
                        x2="1340.95"
                        y2="2773.27"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#F9A8D4" />
                        <stop
                            offset="0.277978"
                            stop-color="#2555FF"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_5_2"
                        x1="33.2538"
                        y1="-145.457"
                        x2="33.2536"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_5_2"
                        x1="97.2538"
                        y1="-145.457"
                        x2="97.2536"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear_5_2"
                        x1="161.254"
                        y1="-145.457"
                        x2="161.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear_5_2"
                        x1="225.254"
                        y1="-145.457"
                        x2="225.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint7_linear_5_2"
                        x1="289.254"
                        y1="-145.457"
                        x2="289.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint8_linear_5_2"
                        x1="353.254"
                        y1="-145.457"
                        x2="353.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint9_linear_5_2"
                        x1="417.254"
                        y1="-145.457"
                        x2="417.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint10_linear_5_2"
                        x1="481.254"
                        y1="-145.457"
                        x2="481.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint11_linear_5_2"
                        x1="545.254"
                        y1="-145.457"
                        x2="545.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint12_linear_5_2"
                        x1="609.254"
                        y1="-145.457"
                        x2="609.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint13_linear_5_2"
                        x1="673.254"
                        y1="-145.457"
                        x2="673.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint14_linear_5_2"
                        x1="737.254"
                        y1="-145.457"
                        x2="737.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint15_linear_5_2"
                        x1="801.254"
                        y1="-145.457"
                        x2="801.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint16_linear_5_2"
                        x1="865.254"
                        y1="-145.457"
                        x2="865.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint17_linear_5_2"
                        x1="929.254"
                        y1="-145.457"
                        x2="929.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint18_linear_5_2"
                        x1="993.254"
                        y1="-145.457"
                        x2="993.254"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint19_linear_5_2"
                        x1="1057.25"
                        y1="-145.457"
                        x2="1057.25"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint20_linear_5_2"
                        x1="1121.25"
                        y1="-145.457"
                        x2="1121.25"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint21_linear_5_2"
                        x1="1185.25"
                        y1="-145.457"
                        x2="1185.25"
                        y2="821.543"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint22_linear_5_2"
                        x1="1558.92"
                        y1="631.254"
                        x2="-361.079"
                        y2="631.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint23_linear_5_2"
                        x1="1558.92"
                        y1="567.254"
                        x2="-361.079"
                        y2="567.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint24_linear_5_2"
                        x1="1558.92"
                        y1="503.254"
                        x2="-361.079"
                        y2="503.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint25_linear_5_2"
                        x1="1558.92"
                        y1="439.254"
                        x2="-361.079"
                        y2="439.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint26_linear_5_2"
                        x1="1558.92"
                        y1="375.254"
                        x2="-361.079"
                        y2="375.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint27_linear_5_2"
                        x1="1558.92"
                        y1="311.254"
                        x2="-361.079"
                        y2="311.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint28_linear_5_2"
                        x1="1558.92"
                        y1="247.254"
                        x2="-361.079"
                        y2="247.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint29_linear_5_2"
                        x1="1558.92"
                        y1="183.254"
                        x2="-361.079"
                        y2="183.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint30_linear_5_2"
                        x1="1558.92"
                        y1="119.254"
                        x2="-361.079"
                        y2="119.253"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint31_linear_5_2"
                        x1="1558.92"
                        y1="55.2537"
                        x2="-361.079"
                        y2="55.2534"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#0F172A" stop-opacity="0" />
                        <stop
                            offset="0.258427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop offset="0.521348" stop-color="#0F172A" />
                        <stop
                            offset="0.78427"
                            stop-color="#0F172A"
                            stop-opacity="0.6"
                        />
                        <stop
                            offset="1"
                            stop-color="#0F172A"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <clipPath id="clip0_5_2">
                        <rect width="1200" height="675" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_5_2">
                        <rect
                            width="4630.41"
                            height="1925"
                            fill="white"
                            transform="translate(-1142 -634)"
                        />
                    </clipPath>
                </defs>
            </svg>
            <div tw="flex items-center w-full">
                <div tw="flex items-center gap-4">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        tw="w-24 h-24"
                    >
                        <rect width="48" height="48" rx="4.5" fill="#865DFF" />
                        <path
                            d="M4.39794 18.296V14.48H11.0459V32H6.77394V18.296H4.39794ZM13.8534 23C13.8534 20.248 14.3814 18.08 15.4374 16.496C16.5094 14.912 18.2294 14.12 20.5974 14.12C22.9654 14.12 24.6774 14.912 25.7334 16.496C26.8054 18.08 27.3414 20.248 27.3414 23C27.3414 25.784 26.8054 27.968 25.7334 29.552C24.6774 31.136 22.9654 31.928 20.5974 31.928C18.2294 31.928 16.5094 31.136 15.4374 29.552C14.3814 27.968 13.8534 25.784 13.8534 23ZM23.3094 23C23.3094 21.384 23.1334 20.144 22.7814 19.28C22.4294 18.4 21.7014 17.96 20.5974 17.96C19.4934 17.96 18.7654 18.4 18.4134 19.28C18.0614 20.144 17.8854 21.384 17.8854 23C17.8854 24.088 17.9494 24.992 18.0774 25.712C18.2054 26.416 18.4614 26.992 18.8454 27.44C19.2454 27.872 19.8294 28.088 20.5974 28.088C21.3654 28.088 21.9414 27.872 22.3254 27.44C22.7254 26.992 22.9894 26.416 23.1174 25.712C23.2454 24.992 23.3094 24.088 23.3094 23ZM29.5096 23C29.5096 20.248 30.0376 18.08 31.0936 16.496C32.1656 14.912 33.8856 14.12 36.2536 14.12C38.6216 14.12 40.3336 14.912 41.3896 16.496C42.4616 18.08 42.9976 20.248 42.9976 23C42.9976 25.784 42.4616 27.968 41.3896 29.552C40.3336 31.136 38.6216 31.928 36.2536 31.928C33.8856 31.928 32.1656 31.136 31.0936 29.552C30.0376 27.968 29.5096 25.784 29.5096 23ZM38.9656 23C38.9656 21.384 38.7896 20.144 38.4376 19.28C38.0856 18.4 37.3576 17.96 36.2536 17.96C35.1496 17.96 34.4216 18.4 34.0696 19.28C33.7176 20.144 33.5416 21.384 33.5416 23C33.5416 24.088 33.6056 24.992 33.7336 25.712C33.8616 26.416 34.1176 26.992 34.5016 27.44C34.9016 27.872 35.4856 28.088 36.2536 28.088C37.0216 28.088 37.5976 27.872 37.9816 27.44C38.3816 26.992 38.6456 26.416 38.7736 25.712C38.9016 24.992 38.9656 24.088 38.9656 23Z"
                            fill="black"
                        />
                    </svg>

                    <h1 tw="ml-8 mt-8 text-6xl">Days of Code</h1>
                </div>
                <div
                    tw="flex flex-col text-3xl ml-auto"
                    style={{ gap: "0.5rem", color: "#475569" }}
                >
                    <span>
                        All questions are hand picked by{" "}
                        <b tw="ml-4 text-black">@itsAnurag_sri</b>
                    </span>
                    <span>
                        This poster is made by{" "}
                        <b tw="ml-4 font-bold text-black">@ashishk1331</b>
                    </span>
                </div>
            </div>
            <div tw="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    tw="w-36 h-36"
                >
                    <path d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26ZM65.14,161.13l19.2-52.79,63.32,63.32-52.8,19.2ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"></path>
                </svg>
                <h1
                    tw="font-black"
                    style={{ fontSize: "24rem", color: "#8B5CF6" }}
                >
                    {index}
                </h1>
                <span tw="font-bold -mt-32" style={{ fontSize: "6rem" }}>
                    Day
                </span>
            </div>
        </div>
    );
}
