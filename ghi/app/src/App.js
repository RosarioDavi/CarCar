import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddCustomerForm from './sales_department/AddCustomerForm';
import AddSalesPersonForm from './sales_department/AddSalesPersonForm';
import CreateSaleRecordForm from './sales_department/CreateSaleRecordForm';
import SalesList from './sales_department/SalesList';
import SalesHistory from './sales_department/SalesHistory';

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
          <Route path="salesrecord">
            <Route path="new" element={<CreateSaleRecordForm />} />
          </Route>
          <Route>
            <Route path="saleslist" element={<SalesList />} />
          </Route>
          <Route>
            <Route path="salespersonhistory" element={<SalesHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
