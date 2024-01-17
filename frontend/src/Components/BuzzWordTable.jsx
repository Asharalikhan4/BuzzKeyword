import { useState, useEffect } from "react";

const buzzWordTable = () => {

    const [buzzWords, setBuzzWords] = useState([]);
    
    useEffect(() => {
        getBuzzWords();
    }, []);

    const getBuzzWords = async () => {
        try {
            const response = await fetch("https://buzzword-api.onrender.com/api/v1/keyword", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            setBuzzWords(result.keywords);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Word
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {buzzWords.map((buzzWord, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {buzzWord.word}
                            </th>
                            <td className="px-6 py-4">
                                {buzzWord.count}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default buzzWordTable;