export default function CartButton(props) {
  const { itemsQty, onClick } = props
  return (
    <button
      className="purple lighten-2  green accent-3 cartButton"
      onClick={onClick}
    >
      <i className="medium material-icons cartButton__icon">shopping_cart</i>
      {itemsQty > 0 && <p className="cartButton__qty">{itemsQty}</p>}
    </button>
  )
}
