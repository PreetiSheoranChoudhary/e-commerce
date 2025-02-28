




export default function SelectComponent(label, placeholder, value, onChange, options = []) {
    return (
        <div>
            <div className="relative">
                <p className="pt-0 pr-2 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600"> {label} </p>
                <select
                    value={value}
                    onChange={onChange}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300"
                >
                    {/* <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))} */}

                    {
                        options && options.length ?
                            options.map((optionItem) => (
                                <option key={optionItem.id} id={optionItem.id} value={optionItem.id}>{optionItem.label} </option>
                            )) : (<option is="" value={''} > Select </option>)}
                </select>
            </div>
        </div>
    );
}