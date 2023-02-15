import React from 'react'
import "./Header.css";

const Header = () => {

  function handleScroll() {
    window.scroll(0, 0);
  }

  return (
        <span onClick={handleScroll} className="header">🎬 MovieFlix 🎥</span>
  )
}

export default Header