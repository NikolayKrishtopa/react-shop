export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper red accent-2 header">
        <a href="#" className="brand-logo">
          React-Shop <span className="author">by Nikolay Krishtopa</span>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/NikolayKrishtopa/React-shop"
              target="blank"
            >
              Project Repo
            </a>
          </li>
          <li>
            <a href="https://github.com/NikolayKrishtopa" target="blank">
              My github page
            </a>
          </li>
          <li>
            <a href="mailto:nikolay.krishtopa@gmail.com" target="blank">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
