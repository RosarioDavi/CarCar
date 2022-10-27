import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer/new">Add Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson/new">Add SalesPerson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord/new">Create SalesRecord</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technician/new">Create Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service/new">Create Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/serviceappointmentlist/new">Service Appointment List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saleslist">Sales List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespersonhistory">SalesPerson History </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturerlist">Manufacturer List </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturer/new">Create Manufacturer </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehiclemodel">Vehicle Model List </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehiclemodel/new">Create Vehicle Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobile">Automobile List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobile/new">Create Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/serviceappointment/history">Service Appointment History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
