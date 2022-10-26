import React from 'react';

class CreateTechnician extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_number: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);   
    }


    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};

        const locationUrl = 'http://localhost:8080/api/technicians/';
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
            employee_number: ''
        };
        this.setState(cleared);
        }    
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({employee_number: value})
    }

render() {
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form onSubmit={this.handleSubmitChange} id="create-technician-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleEmployeeNumberChange} value={this.state.employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

}

export default CreateTechnician
