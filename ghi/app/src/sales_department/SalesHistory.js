import React from 'react';

class SalesHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salesrecords: []
        }
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

    async componentDidMount() {
        this.loadSalesRecord()
    }
    
    render () {
        return (
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
                  {this.state.salesrecords.map(salesrecord => {
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
        );
    }
}
export default SalesHistory;