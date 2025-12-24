import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {
  
    // Obtener valor inicial del localStorage
  const [value, setValue] = useState(() => {
    try {
      const book = window.localStorage.getItem(key)
      return book ? JSON.parse(book) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // Actualizar localStorage cuando cambia el valor
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }, [key, value])

  return [value, setValue]
}