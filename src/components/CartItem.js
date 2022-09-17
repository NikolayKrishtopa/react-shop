export default function CartItem(props) {
  const { onIncrease, onDecrease, onRemove, item } = props
  return (
    <li className="collection-item cart__item">
      <span>{item.displayName}</span>
      <span>Your price: {item.price.regularPrice}$</span>
      <span> Qty: {item.qty}</span>
      <span> Subtotal: {item.price.regularPrice * item.qty}</span>
      <i
        className="material-icons cart__increaseButton teal-text text-lighten-1 cart__itemIcon"
        onClick={() => onIncrease(item)}
      >
        add
      </i>
      <i
        className="material-icons cart__increaseButton teal-text text-lighten-1 cart__itemIcon"
        onClick={() => onDecrease(item)}
      >
        remove
      </i>
      <i
        className="material-icons cart__increaseButton teal-text text-lighten-1 cart__itemIcon"
        onClick={() => onRemove(item)}
      >
        delete
      </i>
    </li>
  )
}
