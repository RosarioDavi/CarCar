import React from 'react';

class CreateSaleRecordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      automobile: '',
      salesperson: '',
      customer: '',
      price: '',
      autos: [],
      salespersons: [],
      customers: []
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
  }

  async handleSubmitChange(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.salespersons;
    delete data.customers;
    delete data.autos;

    const locationUrl = 'http://localhost:8090/api/salesrecords/';
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json',
      },
    };

    const autoUrl = `http://localhost:8100/api/automobiles/${data.automobile}/`;
    const editConfig = {
      method: "PUT",
      body: JSON.stringify({sold: true}),
      headers: {
          'Content-Type': 'application/json',
      },
    }

    const response = await fetch(locationUrl, fetchConfig);
    const response_auto = await fetch(autoUrl, editConfig);
    if (response.ok && response_auto.ok) {

      const cleared = {
          automobile: '',
          salesperson: '',
          customer: '',
          price: '',
      };

      this.setState(cleared);
      this.Auto();
    }

  }

  handleAutomobileChange(event) {
    const value = event.target.value;
    this.setState({automobile:value})
  }

  handleSalesPersonChange(event) {
    const value = event.target.value;
    this.setState({salesperson:value})
  }

  handleCustomerChange(event) {
    const value = event.target.value;
    this.setState({customer:value})
  }

  handlePriceChange(event) {
    const value = event.target.value;
    this.setState({price:value})
  }  



  async Auto() {
    var url = 'http://localhost:8100/api/automobiles/';

    var response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const filterdata = data.autos.filter(auto => auto.sold === false) 
      this.setState({autos: filterdata})
    }
  }
    
  async componentDidMount() {
    var url = 'http://localhost:8090/api/salespersons/';

    var response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({salespersons: data.salespersons})
    }
    
    url = 'http://localhost:8090/api/customers/';

    response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({customers: data.customers})
    }
  }

  render() {
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a SaleRecord</h1>
            <form onSubmit={this.handleSubmitChange} id="create-salerecord-form">
              <div className="mb-3">
                <select onChange={this.handleAutomobileChange} value={this.state.automobile} required id="automobile" name="automobile" className="form-select">
                  <option value="">Choose an Automobile</option>
                  {this.state.autos.map(automobile => {
                        return (
                        <option key={automobile.vin} value={automobile.vin}>
                            {automobile.vin}
                        </option>
                        );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleSalesPersonChange} value={this.state.salesperson} required id="salesperson" name="salesperson" className="form-select">
                  <option value="">Choose a SalesPerson</option>
                  {this.state.salespersons.map(salesperson => {
                        return (
                        <option key={salesperson.employee_id} value={salesperson.employee_id}>
                            {salesperson.name}
                        </option>
                        );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleCustomerChange} value={this.state.customer} required id="customer" name="customer" className="form-select">
                  <option value="">Choose a Customer</option>
                  {this.state.customers.map(customer => {
                        return (
                        <option key={customer.phone_number} value={customer.phone_number}>
                            {customer.name}
                        </option>
                        );
                    })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handlePriceChange} value={this.state.price} placeholder="Price" required type="number" name="price" id="price" className="form-control" />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateSaleRecordForm