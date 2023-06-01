export default function Navbar({ quotesMap, selection }) {
  return (
    <nav
      className="navbar navbar-expand sticky-top bg-dark px-5"
      data-bs-theme="dark"
    >
      <div className="d-flex w-100 justify-content-between">
        <p className="navbar-brand fw-semibold fs-3">Stoic philosophy</p>
        <div className="w-50">
          <ul className="navbar-nav justify-content-around">
            <li className="nav-item w-50">
              <label className="w-100">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value="person"
                  onChange={(e) => selection(e)}
                >
                  <option>Select author:</option>
                  <option value="all">All philosophers</option>
                  {quotesMap}
                </select>
              </label>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle hovering"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#1">
                    Marcus Aurelius
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#2">
                    Seneca
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#3">
                    Epictetus
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#4">
                    Zeno
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#5">
                    Musonius Rufus
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#6">
                    Diogenes
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
