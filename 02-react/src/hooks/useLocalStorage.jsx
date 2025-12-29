import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {

  /* 
    Obtener valor inicial del localStorage:
   * Si books existe en localStorage, quiere decir que ya hay libros guardados/editados
   * Si no, usar el valor inicial (data.json) 
  */
 
  const [value, setValue] = useState(() => {
    try {
      const books = window.localStorage.getItem(key)
      return books ? JSON.parse(books) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // Actualizar localStorage cuando cambia el valor, es decir, cuando se agrega/edita/elimina un libro
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }, [key, value])

  return [value, setValue]
}