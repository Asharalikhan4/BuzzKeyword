import { useState } from "react";

const SearchBar = () => {

    const [search, setSearch] = useState("");

    const categories = ["ring", "jacket", "jeans"];

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = async () => {
        if (categories.includes(search.toLowerCase().trim())) {
            try {
                const response = await fetch("https://buzzword-api.onrender.com/api/v1/keyword", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        word: search.toLowerCase(),
                    }),
                });
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        setSearch("");
    }

    return (
        <form className='mt-5' onSubmit={handleSubmit}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="test" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search..." onChange={handleInputChange} value={search} required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    )
}

export default SearchBar;