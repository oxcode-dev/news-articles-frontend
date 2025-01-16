import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function MultiSelectDropdown({ formFieldName, options }) {
    const dropdownRef = useRef(null)
    const [showDropdown, setShowDropdown] = useState <Boolean>(true)

    const handleClickOutside = () => setShowDropdown(false)
        
    const handleClickInside = () => setShowDropdown(true)
    useOnClickOutside(dropdownRef, handleClickOutside)

    return (
        <>
            <div ref={dropdownRef} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm relative">
                <a href="#" onClick={() => handleClickInside()}>
                    Select
                </a>
                {
                    showDropdown ? 
                    <div className="absolute top-10 bg-white border h-40 overflow-y-hidden w-full">
                        <ul className="h-full overflow-y-auto">
                            {options.map((option: any, i: number) => {
                                return (
                                    <li key={i}>
                                        <a href="#" className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200">
                                            <span className="ml-1">{option}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div> : null
                }
            </div>
         </>
    );
}