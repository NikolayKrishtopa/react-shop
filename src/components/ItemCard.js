export default function ItemCard(props) {
  const { item, onClickBuy } = props

  const {
    displayName: name,
    price,
    displayAssets: poster,
    displayType: type,
  } = item
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={poster[0].background}
          onClick={() => onClickBuy(item)}
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name}
        </span>
        <span className="right">{type}</span>
        <p>{price.regularPrice !== 0 ? price.regularPrice : 1260}</p>
      </div>
    </div>
  )
}
