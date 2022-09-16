import ItemCard from './ItemCard'

export default function Shop(props) {
  const { pageQty, page, onChangePage, items, itemsPerPage, onAddToCart } =
    props
  const pages = []
  for (let i = 1; i <= pageQty; i++) {
    pages.push(i)
  }
  return (
    <div className="shop">
      {pageQty > 0 && pageQty !== 1 && (
        <ul className="pagination">
          <li
            className="waves-effect"
            onClick={() => page > 1 && onChangePage(page - 1)}
          >
            <i className="material-icons">chevron_left</i>
          </li>
          {pages.map((e) => (
            <li
              key={e}
              className={`waves-effect ${page === e && 'active'}`}
              onClick={() => onChangePage(e)}
            >
              <a href="#!">{e}</a>
            </li>
          ))}

          <li
            className="waves-effect"
            onClick={() => page < pageQty && onChangePage(page + 1)}
          >
            <i className="material-icons">chevron_right</i>
          </li>
        </ul>
      )}
      {items ? (
        <div className="items">
          {itemsPerPage
            ? items
                .slice(itemsPerPage * (page - 1), itemsPerPage * page)
                .map((item) => (
                  <ItemCard
                    key={item.mainId}
                    item={item}
                    onClickBuy={onAddToCart}
                  />
                ))
            : items.map((item) => (
                <ItemCard
                  key={item.mainId}
                  item={item}
                  onClickBuy={onAddToCart}
                />
              ))}
        </div>
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  )
}
