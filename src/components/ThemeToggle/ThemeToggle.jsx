'use client'
import './themeToggle.css'
import React, { useEffect } from 'react'

const ThemeToggle = ({ color }) => {
  useEffect(() => {
    const htmlTag = document.documentElement
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    )
    function switchTheme(e) {
      if (e.target.checked) {
        htmlTag.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark') //add this
      } else {
        htmlTag.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light') //add this
      }
    }
    toggleSwitch.addEventListener('change', switchTheme, false)

    const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null

    if (currentTheme) {
      htmlTag.setAttribute('data-theme', currentTheme)

      if (currentTheme === 'dark') {
        toggleSwitch.checked = true
      }
    }
  }, [])

  return (
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round" style={{ backgroundColor: color }}></div>
      </label>
    </div>
  )
}

export default ThemeToggle
