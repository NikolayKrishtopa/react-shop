export default function ItemsPerPageMenu(props) {
  const { value, onChange } = props

  return (
    <div className="itemsPerPage">
      <h3 className="itemsPerPage__title">Show items per page</h3>
      <form className="itemsPerPage__form">
        <label className="radio">
          <input
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange(5)}
          />
          <span>5</span>
        </label>
        <label className="radio">
          <input
            checked={value === 10}
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange(10)}
          />
          <span>10</span>
        </label>
        <label className="radio">
          <input
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange(20)}
          />
          <span>20</span>
        </label>
        <label className="radio">
          <input
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange('')}
          />
          <span>all</span>
        </label>
      </form>
    </div>
  )
}
