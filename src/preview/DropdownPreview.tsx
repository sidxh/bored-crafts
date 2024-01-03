"use client"

import Dropdown from "@/components/Dropdown";

export default function DropdownPreview(){
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (selectedOption: string) => {
        console.log('Selected option:', selectedOption);
    }

    return(
        <div>
            <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleSelect}
            variant="PRIMARY"
            title="Yes This Shit"
            />
        </div>
    )
}