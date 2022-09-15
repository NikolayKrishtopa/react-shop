export default function TypeFilter(props) {
  const { value, onChangeValue, types } = props

  return (
    <select
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      className="input-field col s12 typeFilter"
    >
      <option value="">Choose type</option>
      {types.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  )
}
