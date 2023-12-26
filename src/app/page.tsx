"use client"

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };
  return (
    <main>
      <h1>Home</h1>
      <Button appearance="success" rounded='large'>Hello</Button>
      <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleSelect}
        variant="PRIMARY"
        title="Yes This Shit"
      />
    </main>
  )
}
