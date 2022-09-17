export default function ItemCard(props) {
  const { item, onClickBuy } = props

  const {
    displayName: name,
    price,
    displayAssets: poster,
    displayType: type,
  } = item
  return (
    <div className="card cyan lighten-5">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster[0].background} />
      </div>
      <div className="card-content card__content">
        <p className="right">{type}</p>
        <h3 className="card-title grey-text text-darken-4">{name}</h3>
      </div>
      <div className="card__buy">
        <button
          className="waves-effect waves-light btn"
          onClick={() => onClickBuy(item)}
        >
          Add to cart
        </button>
        <span className="right card__price">
          {price.regularPrice !== 0 ? price.regularPrice : 1260} $
        </span>
      </div>
    </div>
  )
}
