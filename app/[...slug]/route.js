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

export async function GET(req, { params }) {
    let [index] = params.slug;

    const dir = path.join(process.cwd());
    const fontBuffer = await fs.readFile(dir + "/app/[...slug]/font.ttf");

    const svg = await satori(getLayout(index), {
        width: 800,
        height: 400,
        fonts: [
            {
                name: "spaceMono",
                data: fontBuffer,
                weight: 800,
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
    return {
        type: "div",
        props: {
            style: {
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#191825",
                fontSize: 32,
                fontWeight: 900,
                backgroundImage:
                    "radial-gradient(#191825 6px, transparent 2px), radial-gradient(#191825 6px, #e5e5f7 2px)",
                backgroundSize: "36px 36px",
                backgroundPosition: "0 0,18px 18px",
            },
            children: [
                {
                    type: "svg",
                    props: {
                        width: 128,
                        height: 128,
                        viewBox: "0 0 128 128",
                        fill: "none",
                        style: {
                            borderRadius: "6px",
                            boxShadow:
                                "0 10px 15px -3px #865DFF75, 0 4px 6px -4px #865DFF75",
                        },
                        children: [
                            {
                                type: "rect",
                                props: {
                                    width: "128",
                                    height: "128",
                                    fill: "#865DFF",
                                },
                            },
                            {
                                type: "path",
                                props: {
                                    fill: "#191825",
                                    d: "M11.728 49.456V39.28h17.728V86H18.064V49.456h-6.336ZM36.943 62c0-7.339 1.407-13.12 4.224-17.344 2.858-4.224 7.445-6.336 13.76-6.336 6.314 0 10.88 2.112 13.696 6.336C71.48 48.88 72.91 54.661 72.91 62c0 7.424-1.429 13.248-4.287 17.472-2.817 4.224-7.382 6.336-13.697 6.336-6.314 0-10.9-2.112-13.76-6.336C38.35 75.248 36.944 69.424 36.944 62Zm25.215 0c0-4.31-.469-7.616-1.407-9.92-.94-2.347-2.88-3.52-5.825-3.52-2.944 0-4.885 1.173-5.824 3.52-.938 2.304-1.407 5.61-1.407 9.92 0 2.901.17 5.312.511 7.232.342 1.877 1.024 3.413 2.048 4.608 1.067 1.152 2.625 1.728 4.672 1.728 2.048 0 3.584-.576 4.608-1.728 1.067-1.195 1.771-2.73 2.113-4.608.34-1.92.511-4.33.511-7.232Zm16.534 0c0-7.339 1.409-13.12 4.225-17.344 2.858-4.224 7.445-6.336 13.76-6.336 6.314 0 10.88 2.112 13.696 6.336 2.858 4.224 4.288 10.005 4.288 17.344 0 7.424-1.43 13.248-4.288 17.472-2.816 4.224-7.382 6.336-13.697 6.336-6.314 0-10.9-2.112-13.76-6.336C80.1 75.248 78.692 69.424 78.692 62Zm25.217 0c0-4.31-.47-7.616-1.408-9.92-.939-2.347-2.88-3.52-5.825-3.52-2.944 0-4.885 1.173-5.823 3.52-.94 2.304-1.408 5.61-1.408 9.92 0 2.901.17 5.312.512 7.232.34 1.877 1.024 3.413 2.047 4.608 1.067 1.152 2.624 1.728 4.672 1.728 2.049 0 3.585-.576 4.609-1.728 1.066-1.195 1.77-2.73 2.112-4.608.341-1.92.512-4.33.512-7.232Z",
                                },
                            },
                        ],
                    },
                },

                // <div style={{ marginTop: 24, marginBottom: 24 }}>#Day 1</div>
                // <div>System of Equations</div>
                {
                    type: "div",
                    props: {
                        style: {
                            marginTop: 24,
                            marginBottom: 24,
                            fontSize: "1.2em",
                        },
                        children: "Day " + index,
                    },
                },
                {
                    type: "div",
                    props: {
                        tw: "text-base p-1 px-6 rounded-full bg-[#865DFF] text-white",
                        children: "#100-Days-of-Code",
                    },
                },
            ],
        },
    };
}
