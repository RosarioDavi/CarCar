import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddCustomerForm from './sales_department/AddCustomerForm';
import AddSalesPersonForm from './sales_department/AddSalesPersonForm';
import CreateTechnician from './service_department/CreateTechnician';
import CreateServiceAppointment from './service_department/CreateServiceAppointment';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home">
            <Route index element={<MainPage />} />
          </Route>
          <Route path="customer">
            <Route path="new" element={<AddCustomerForm />} />
          </Route>
          <Route path="salesperson">
            <Route path="new" element={<AddSalesPersonForm />} />
          </Route>
          <Route path="technician">
            <Route path="new" element={<CreateTechnician />} />
          </Route>
          <Route path="service">
            <Route path="new" element={<CreateServiceAppointment/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
