import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div>

    <footer>
      <p>Manthangour {year}</p>
    </footer>
    </div>
  )
}

export default Footer