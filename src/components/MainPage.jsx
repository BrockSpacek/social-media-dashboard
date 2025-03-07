import React from 'react'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'
import { useState } from 'react'

const MainPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <div className={`${darkMode ? 'bg-[#1e202a]' : 'bg-white'} transition-colors duration-300 min-h-screen`}>
            <LargeCard darkMode={darkMode} toggleTheme={toggleTheme} />
            <SmallCard darkMode={darkMode} />
        </div>
    )
}

export default MainPage