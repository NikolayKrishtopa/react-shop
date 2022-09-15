export default function ItemsPerPageMenu(props) {
  const { value, onChange } = props

  return (
    <div>
      <h3>Show items per page</h3>
      <form>
        <label>
          <input
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange(5)}
          />
          <span>5</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange(10)}
          />
          <span>10</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="itemsPerPage"
            type="radio"
            value={value}
            onChange={(e) => onChange(20)}
          />
          <span>20</span>
        </label>
        <label>
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
