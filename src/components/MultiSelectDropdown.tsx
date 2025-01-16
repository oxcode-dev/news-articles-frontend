export default function MultiSelectDropdown({ formFieldName, options }) {
    return (
        <>
            <label className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm relative">
                <input type="checkbox" className="hidden peer"/>
                    {"Show the dropdown"}
                <div className="absolute top-10 bg-white border transition-opacity opacity-0     pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto h-40 overflow-y-hidden">
                    <ul className="">
                        {options.map((option: any, i: number) => {
                            return (
                                <li key={i}>
                                    <label className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200">
                                        <input
                                            type="checkbox"
                                            name={formFieldName}
                                            value={option}
                                            className="cursor-pointer"
                                        />
                                        <span className="ml-1">{option}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </label>
         </>
    );
}