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

      {/* Example of a simple navbar */}
      <Navbar backgroundColor="#4CAF50" textColor="#fff">
        <h1>My Website</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Navbar>

      {/* Example of a sticky navbar */}
      <Navbar sticky backgroundColor="#333" textColor="#fff">
        <h1>Sticky Navbar</h1>
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
        </ul>
      </Navbar>


    </main>
  )
}
