import React, { useState } from 'react'
import clsx from 'clsx'
import { motion } from "framer-motion"

const CardsFlip = () => {
  const TABS = ["Saved", "Unsaved", "Cool"]
  const [activeTab, setActiveTab] = useState(TABS[0]);
  return (
    <div className='w-fit'>
      {TABS.map((tab) => (
        <motion.li
          layout
          className={clsx(
            "relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors flex",
            activeTab === tab ? "text-gray-800" : "text-gray-700",
          )}
          tabIndex={0}
          key={tab}
          onFocus={() => setActiveTab(tab)}
          onMouseOver={() => setActiveTab(tab)}
          onMouseLeave={() => setActiveTab(tab)}
        >
          {activeTab === tab ? (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-lg bg-black/5"
            />
          ) : null}
          <span className="relative text-inherit">{tab}</span>
        </motion.li>
      ))}
    </div>
  )
}

export default CardsFlip
