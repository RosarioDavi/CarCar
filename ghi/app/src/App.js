import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddCustomerForm from './sales_department/AddCustomerForm';
import AddSalesPersonForm from './sales_department/AddSalesPersonForm';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
