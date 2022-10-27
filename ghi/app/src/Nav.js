import { NavLink } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavDropdown id="nav-dropdown" title="Sales" menuVariant="dark">
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/customer/new">Add Customer</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/salesperson/new">Add SalesPerson</NavDropdown.Item>
                </li>    
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/salesrecord/new">Create SalesRecord</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/saleslist">Sales List</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/salespersonhistory">SalesPerson History </NavDropdown.Item>
                </li>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown id="nav-dropdown" title="Service" menuVariant="dark">
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/technician/new">Create Technician</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/service/new">Create Service</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/serviceappointmentlist/new">Service Appointment List</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/serviceappointment/history">Service Appointment History</NavDropdown.Item>
                </li>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown id="nav-dropdown" title="Inventory" menuVariant="dark">
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/manufacturer/new">Create Manufacturer </NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/manufacturerlist">Manufacturer List </NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/vehiclemodel/new">Create Vehicle Model</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/vehiclemodel">Vehicle Model List </NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/automobile/new">Create Automobile</NavDropdown.Item>
                </li>
                <li className="nav-item">
                  <NavDropdown.Item as={Link} to="/automobile">Automobile List</NavDropdown.Item>
                </li>
              </NavDropdown>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
