
"use client";
import { useState, useRef, forwardRef, useEffect } from "react";
import {
    getBlobFromImageElement,
    copyBlobToClipboard,
} from "copy-image-clipboard";
import BottomSheet from "@/components/BottomSheet";
import TopSheet from "@/components/TopSheet";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
    const success = () =>
        toast.custom(<TopSheet />, {
            duration: 800,
        });
    const [day, setDay] = useState(null);
    const ImageRef = useRef();

    function downloadImage() {
        getBlobFromImageElement(ImageRef.current)
            .then((blob) => {
                return copyBlobToClipboard(blob);
            })
            .then(() => {
                success();
            })
            .catch((e) => {
                console.log("Error: ", e.message);
            });
    }

    return (
        <div className="h-screen flex relative p-2 md:p-0">
            <Toaster />
            <ImageHolder day={day} ref={ImageRef} />
            <BottomSheet
                setDay={setDay}
                downloadImage={downloadImage}
            />
        </div>
    );
}

const ImageHolder = forwardRef(function ImageHolder({ day }, ref) {
    day = day || 1;
    return (
        <img
            src={`/${day}`}
            alt={"IMage for Day " + day}
            className="m-auto rounded-md w-3/4"
            ref={ref}
        />
    );
});