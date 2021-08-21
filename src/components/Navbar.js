import PropTypes from "prop-types";

export function Navbar(props) {
  // const dark = props.dark ? "dark" : "light";

  let toggles = document.getElementsByName('toggle');
  const toggling = (event) => {

    toggles.forEach((toggle) => {
      if (toggle.id !== event.target.id) {
        toggle.checked = false;
      }
      else if (props.mode !== event.target.id && event.target.checked) {
        props.toggleMode(event.target.id);
      }
      else {
        props.toggleMode("light");
      }
    })

    

  }


  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light" : "dark"} bg-${props.mode === "light" ? "light" : "dark"}`}
    >
      <div className="container-fluid" >
        <a className="navbar-brand" style={{ color: props.mode === "light" ? "black" : props.mode === "dark" ? "white" : props.mode }} href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" style={{ color: props.mode === "light" ? "black" : props.mode === "dark" ? "white" : props.mode }} aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-3" >
            <input
              className="form-check-input"
              type="checkbox"
              id="dark"
              name="toggle"
              onClick={toggling}
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" style={{ "fontWeight": "bold" }}>
              {props.mode === 'dark' ? "Light Mode" : "Dark Mode"}
            </label>
          </div>

          <div className="form-check form-switch mx-3" >
            <input
              className="form-check-input"
              type="checkbox"
              id="purple"
              name="toggle"
              onClick={toggling}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: "purple", "fontWeight": "bold" }}>
              {props.mode === 'purple' ? "Light Mode" : "Purple Mode"}
            </label>
          </div>

          <div className="form-check form-switch mx-3" >
            <input
              className="form-check-input"
              type="checkbox"
              id="orange"
              name="toggle"
              onClick={toggling}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: "orange", "fontWeight": "bold" }}>
              {props.mode === 'orange' ? "Light Mode" : "Orange Mode"}
            </label>
          </div>

          <div className="form-check form-switch mx-3" >
            <input
              className="form-check-input"
              type="checkbox"
              id="pink"
              name="toggle"
              onClick={toggling}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: "pink", "fontWeight": "bold" }}>
              {props.mode === 'pink' ? "Light Mode" : "Pink Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Text Utils",
  aboutText: "About",
};
