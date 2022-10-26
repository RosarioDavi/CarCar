import React from 'react';

class SalesHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salesperson: '',
            salesrecords: [],
            salespersons:[]
        }
    
        this.handleChange = this.handleChange.bind(this);
    }

    async loadSalesRecord() {
        const response = await fetch('http://localhost:8090/api/salesrecords/');
        if (response.ok) {
          const data = await response.json();
          this.setState({salesrecords : data.salesrecords})
        } else {
          console.error(response);
        }
    }

    async loadSalesPerson() {
        const response = await fetch('http://localhost:8090/api/salespersons/');
        if (response.ok) {
          const data = await response.json();
          this.setState({salespersons : data.salespersons})
        } else {
          console.error(response);
        }
    }

    async componentDidMount() {
        this.loadSalesRecord()
        this.loadSalesPerson()
    }
    
    handleChange(event) {
        const value = event.target.value
        this.setState({salesperson: value})
    }

    render () {
        return (
            <div className="container">
            <h1>Sales Person History</h1>
                <select onChange={this.handleChange} value={this.state.salesperson} required id="salesperson" name="salesperson" className="form-select">
                    <option value="">Select SalesPerson</option>
                    {this.state.salespersons.map(salesperson => {
                        return (
                        <option key={salesperson.employee_id} value={salesperson.employee_id}>
                            { salesperson.name }
                        </option>
                        );
                    })}
                </select>
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SalesPerson</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Sales Price</th>
                  </tr>
                </thead>
                <tbody>          
                  {this.state.salesrecords.filter(salesrecord => salesrecord.salesperson.employee_id.toString() === this.state.salesperson).map(salesrecord => {
                    return (
                      <tr key={salesrecord.id}>
                        <td>{ salesrecord.salesperson.name }</td>
                        <td>{ salesrecord.customer.name }</td>
                        <td>{ salesrecord.automobile.vin }</td>
                        <td>{ salesrecord.price }</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        );
    }
}
export default SalesHistory;