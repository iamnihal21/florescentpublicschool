import React from 'react'

export const Logo = () => {
  return (
    <div className="custom-logo">
      <img
        src="/UI/button.svg" // Ensure this is in your /public folder
        alt="Florescent School Logo"
        style={{ 
          width: 'auto', 
          height: 'auto', // Standard height for the sidebar icon
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}

export default Logo