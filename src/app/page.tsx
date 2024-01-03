"use client"

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";

export default function Home() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };
  return (
    <main>
      <h1>UI Crafts -- By Siddhant</h1>
      <p>currently in progress, one component at a time</p>
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
