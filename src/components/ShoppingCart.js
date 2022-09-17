import CartItem from './CartItem'

export default function ShoppingCart(props) {
  const { cartList, onClose, onChangeList } = props

  function handleRemoveItem(item) {
    onChangeList(cartList.filter((e) => e.mainId !== item.mainId))
  }

  function handleIncreaseItem(item) {
    onChangeList(
      cartList.map((e) =>
        e.mainId === item.mainId ? { ...e, qty: e.qty + 1 } : e
      )
    )
  }

  function handleDecreaseItem(item) {
    onChangeList(
      cartList
        .map((e) => (e.mainId === item.mainId ? { ...e, qty: e.qty - 1 } : e))
        .filter((e) => e.qty > 0)
    )
  }

  return (
    <div className="cart">
      <ul className="collection with-header cart__content">
        <i
          className="material-icons medium cart__closeButton white-text"
          onClick={onClose}
        >
          close
        </i>
        <li className="collection-header teal lighten-1 white-text">
          <h4>Shopping cart</h4>{' '}
        </li>
        {cartList.length ? (
          cartList.map((e) => (
            <CartItem
              key={e.mainId}
              item={e}
              onRemove={handleRemoveItem}
              onIncrease={handleIncreaseItem}
              onDecrease={handleDecreaseItem}
            />
          ))
        ) : (
          <li className="collection-item">
            <span>Your cart is empty</span>
          </li>
        )}

        <li className="collection-item teal lighten-1 white-text">
          <span>Your total: </span>
          {cartList.reduce((sum, e) => e.price.regularPrice * e.qty + sum, 0)}$
        </li>
        <li className="collection-item">
          {' '}
          <button
            className="waves-effect waves-light btn"
            disabled={!cartList.length}
            onClick={onClose}
          >
            Proceed to checkout
          </button>
        </li>
      </ul>
    </div>
  )
}
