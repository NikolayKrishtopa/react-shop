import { useEffect } from 'react'

export default function Alert(props) {
  const { itemName, onClear } = props

  useEffect(() => {
    const timer = setTimeout(onClear, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [itemName])

  return (
    <div className="toast alert">
      <p className="toast-container">{`${itemName} was added into your shopping cart`}</p>
    </div>
  )
}
