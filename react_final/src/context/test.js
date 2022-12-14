import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

import dummyData from '../dummyData'

const url = 'https://course-api.com/react-store-products'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      console.log(data);
      // const {drinks} = data;
      // if (drinks) {
      //   const newCocktails = drinks.map((item) => {
      //     const {
      //       idDrink,
      //       strDrink,
      //       strDrinkThumb,
      //       strAlcoholic,
      //       strGlass,
      //       strCategory
      //     } = item

      //     return {
      //       id: idDrink,
      //       name: strDrink,
      //       image: strDrinkThumb,
      //       info: strAlcoholic,
      //       glass: strGlass,
      //       category: strCategory
      //     }
      //   })
      //   setCocktails(newCocktails)
      // } else {
      //   setCocktails([])
      // }
      const newCocktails = data.map((item) => {
        const {id, name, price, image, colors, company, description, category, shipping} = item
        setCocktails(newCocktails);
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
