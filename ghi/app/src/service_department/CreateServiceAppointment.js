import React from 'react';

class CreateServiceAppointment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            customer: '',
            appointment_date: '',
            service_reason: '',
            technician: '',
            technicians: [],
            automobiles: [],
        };
        this.handleAutoMobileChange = this.handleAutoMobileChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);   
        this.handleAppointmentDateChange=this.handleAppointmentDateChange.bind(this);
        this.handleServiceReasonChange=this.handleServiceReasonChange.bind(this);
        this.handleAssignedTechnicianChange=this.handleAssignedTechnicianChange.bind(this);
    }


    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};

        const locationUrl = 'http://localhost:8080/api/service/';
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

    handleAutoMobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
    }

    handleAppointmentDateChange(event) {
        const value = event.target.value;
        this.setState({appointment_date: value})
    }

    handleServiceReasonChange(event){
        const value = event.target.value;
        this.setState({service_reason: value})
    }

    handleAssignedTechnicianChange(event){
        const value = event.target.value;
        this.setState({assigned_technician: value})
    }
async componentDidMount(){
    var url = 'http://localhost:8080/api/technicians/'
    var response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        this.setState({technicians: data.technicians});
    }
    url = 'http://localhost:8080/api/service/'
    response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        this.setState({services: data.services});
    }
} 



render() {
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Service</h1>
            <form onSubmit={this.handleSubmitChange} id="create-service-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleCustomerChange} value={this.state.customer} placeholder="Customer" required type="text" name="customer" id="name" className="form-control" />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="mb-3">
                  <select onChange={this.handleAutoMobileChange} value={this.state.service} required id="Automobile" name="Automobile" className="form-select">
                    <option value="">Automobile VIN</option>
                    {this.state.services.map(service => {
                          return (
                          <option key={service.vin} value={service.vin}>
                              {service.vin}
                          </option>
                          );
                      })}
                  </select>
                </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleAppointmentDateChange} value={this.state.appointment_date} placeholder="Appointment Date" required type="date" name="appointment_date" id="appointment_date" className="form-control" />
                <label htmlFor="appointment_date">Appointment Date</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleServiceReasonChange} value={this.state.service_reason} placeholder="Service Reason" required type="text" name="service_reason" id="service_reason" className="form-control" />
                <label htmlFor=" service_reason">Service Reason</label>
              </div>
              <div className="mb-3">
                  <select onChange={this.handleAssignedTechnicianChange} value={this.state.technician} required id="assigned_technician" name="assigned_technician" className="form-select">
                    <option value="">Assigned Technician</option>
                    {this.state.technicians.map(technician => {
                          return (
                          <option key={technician.employee_number} value={technician.employee_number}>
                              {technician.name}
                          </option>
                          );
                      })}
                  </select>
                </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

}

export default CreateServiceAppointment