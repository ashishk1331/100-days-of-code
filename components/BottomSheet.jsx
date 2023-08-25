export default function BottomSheet({ setDay, ImageRef, downloadImage }) {
    return (
        <div className="absolute inset-x-0 bottom-0 w-fill md:w-fit flex flex-wrap gap-6 items-center justify-between md:justify-start p-4 px-8 m-4 mb-12 md:mb-4 md:mx-auto rounded bg-violet-50 border-2 border-violet-300">
            <div className="sm:col-span-3">
                <label
                    htmlFor="day"
                    className="block text-xs font-medium leading-6 text-gray-900"
                >
                    Day
                </label>
                <div className="mt-2">
                    <select
                        onChange={(e) => setDay(e.target.value)}
                        id="day"
                        name="day"
                        autoComplete="day-number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        {Array(100)
                            .fill("")
                            .map((_, index) => (
                                <option key={index}>{index + 1}</option>
                            ))}
                    </select>
                </div>
            </div>

            <button
                onClick={downloadImage}
                className="h-fit rounded-md bg-indigo-600 px-3 py-2 text-md  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Copy
            </button>
        </div>
    );
}
