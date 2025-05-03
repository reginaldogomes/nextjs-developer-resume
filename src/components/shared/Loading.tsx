import { useState, useEffect } from 'react'

export const Loading = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center' }}>
      Carregando {dots}
    </div>
  )
}
