export default function Search(props) {
  const { search, onSearchChange, onSubmit } = props

  return (
    <div className="col s12 search">
      <form
        className="input-field"
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
      >
        <input
          id="search"
          placeholder="Search"
          type="search"
          className="validate search"
          value={search}
          onChange={onSearchChange}
        />
        {/* <label htmlFor="search">Search</label> */}
      </form>
    </div>
  )
}
