import React from 'react';

class AddSalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_id: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
    }


    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};
    
        const locationUrl = 'http://localhost:8090/api/salespersons/';
        const fetchConfig = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json',
          },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
          const newLocation = await response.json();
        
          const cleared = {
            name: '',
            employee_id: ''
          };
          this.setState(cleared);
        }    
    }
    
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleIdChange(event) {
        const value = event.target.value;
        this.setState({employee_id: value})
    }
   
    
    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a SalesPerson</h1>
                <form onSubmit={this.handleSubmitChange} id="add-salesperson-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleIdChange} value={this.state.employee_id} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" />
                    <label htmlFor="employee_id">Employee ID</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}
export default AddSalesPersonForm;