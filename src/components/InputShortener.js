import React from 'react'
import { useState } from 'react';

export default function InputShortener({setInputValue}) {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }

  return (
    <div>
        <p>Paste a long URL</p> 
        <div className="flex max-w-md gap-x-4">
            <input
                value={value}
                onChange={(e) => {setValue(e.target.value)}} 
                id="link" name="link" type="text" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your url" />
            <button 
                onClick={handleClick}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Shorten</button>
        </div>
    </div>
    
  )
}
