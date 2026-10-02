import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div>
      <button onClick={ ()=> {
        setTheme('dark')
      }}>Change Theme</button>
    </div>
  )
}

export default Button
