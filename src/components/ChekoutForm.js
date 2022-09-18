export default function CheckoutForm(props) {
  const { onClose } = props
  return (
    <div className="row  checkoutForm">
      <i
        className="material-icons cart__closeButton cart__closeButton_type_form dark-blue-text"
        onClick={onClose}
      >
        close
      </i>
      <form className="col s12">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate" />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <button className="waves-effect waves-light btn">
          Place your order
        </button>
      </form>
    </div>
  )
}
