import React, { useState } from "react"

const useCounter = (max = 10) => {
  const [pagina, setPagina] = useState(1)
  const increment = () => {
    pagina >= max ? setPagina(pagina) : setPagina(pagina + 1)
  }
  const decrement = () => {
    pagina <= 1 ? setPagina(pagina) : setPagina(pagina - 1)
  }
  return { pagina, increment, decrement }
}

export default useCounter
