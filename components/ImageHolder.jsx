import { forwardRef } from "react";

export default const ImageHolder = forwardRef(function ImageHolder({ day, title }, ref) {
    day = day || 1;
    title = title || "Apples and Oranges";
    return (
        <img
            src={`/${day}/${title}`}
            alt={title}
            className="m-auto rounded-md"
            ref={ref}
        />
    );
});