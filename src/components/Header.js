import React from 'react'
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-gradient btn-link">
            <h1 style={{fontSize: 30}}>Hasnain</h1>
          </a>
          {/* Button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
}

export default Header
