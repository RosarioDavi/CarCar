import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddCustomerForm from './sales_department/AddCustomerForm';
import AddSalesPersonForm from './sales_department/AddSalesPersonForm';
import CreateTechnician from './service_department/CreateTechnician';
import CreateServiceAppointment from './service_department/CreateServiceAppointment';
import CreateSaleRecordForm from './sales_department/CreateSaleRecordForm';
import SalesList from './sales_department/SalesList';
import SalesHistory from './sales_department/SalesHistory';
import ManufacturerList from './inventory/ManufacturerList';
import CreateManufacturerForm from './inventory/CreateManufacturerForm';
import VehicleModelList from './inventory/VehicleModelList';
import CreateVehicleModelForm from './inventory/CreateVehicleModelForm';

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
          <Route path="salesrecord">
            <Route path="new" element={<CreateSaleRecordForm />} />
          </Route>
          <Route>
            <Route path="saleslist" element={<SalesList />} />
          </Route>
          <Route>
            <Route path="salespersonhistory" element={<SalesHistory />} />
          </Route>
          <Route>
            <Route path="manufacturerlist" element={<ManufacturerList/>} />
          </Route>
          <Route path="manufacturer">
            <Route path="new" element={<CreateManufacturerForm/>} />
          </Route>
          <Route>
            <Route path="vehiclemodel" element={<VehicleModelList/>} />
          </Route>
          <Route path="vehiclemodel">
            <Route path="new" element={<CreateVehicleModelForm/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
