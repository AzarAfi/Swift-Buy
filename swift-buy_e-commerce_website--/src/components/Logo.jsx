import React from 'react'

const Logo = ({h,w}) => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width={w} height={h}>
 {/*  <!-- Background Rectangle --> */}
  <rect x="0" y="0" width="200" height="60" rx="10" ry="10" fill="#007bff"/>

  {/* <!-- Text "Swift" --> */}
  <text x="20" y="35" font-family="Arial, sans-serif" font-size="24" fill="white">Swift</text>

  {/* <!-- Text "-buy" --> */}
  <text x="90" y="35" font-family="Arial, sans-serif" font-size="24" fill="yellow">-buy</text>

  {/* <!-- Shopping Cart Icon (Simple) --> */}
  <circle cx="170" cy="30" r="10" fill="white"/>
  <rect x="165" y="24" width="10" height="12" fill="white"/>
  <line x1="170" y1="30" x2="170" y2="40" stroke="white" stroke-width="2"/>
  <line x1="165" y1="30" x2="160" y2="30" stroke="white" stroke-width="2"/>
  <line x1="175" y1="30" x2="180" y2="30" stroke="white" stroke-width="2"/>
</svg>

    </>
  )
}

export default Logo