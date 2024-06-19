"use client"

import Dropdown from "@/components/Dropdown";

export default function DropdownPreview(){
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (selectedOption: string) => {
        console.log('Selected option:', selectedOption);
    }

    return(
        <div className="flex gap-20 justify-center">
            <Dropdown
            options={options}
            onSelect={handleSelect}
            variant="default"
            title="Yes This Shit"
            />
            <Dropdown
            options={options}
            onSelect={handleSelect}
            variant="primary"
            title="Yes This Shit"
            />
            <Dropdown
            options={options}
            onSelect={handleSelect}
            variant="secondary"
            title="Yes This Shit"
            />
        </div>
    )
}