export default function CartButton(props) {
  const { itemsQty } = props
  return (
    <button className="purple lighten-2 cartButton">
      <i className="medium material-icons cartButton__icon">shopping_cart</i>
      {itemsQty >= 0 && <p className="cartButton__qty">{itemsQty}</p>}
    </button>
  )
}
