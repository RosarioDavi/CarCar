import React from 'react';

class CreateServiceAppointment extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            customer: '',
            appointment_date: '',
            service_reason: '',
            assigned_technician: '',
            time: '',
            technicians: [],
            autos: [],
            customers: []
        };
        this.handleAutoMobileChange = this.handleAutoMobileChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);   
        this.handleAppointmentDateChange=this.handleAppointmentDateChange.bind(this);
        this.handleServiceReasonChange=this.handleServiceReasonChange.bind(this);
        this.handleAssignedTechnicianChange=this.handleAssignedTechnicianChange.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
    }


    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.autos;
        delete data.technicians;
        delete data.customers;
        
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
            auto: '',
            automobile: '',
            customer: '',
            appointment_date: '',
            service_reason: '',
            assigned_technician: '',
            time: '',
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

    handleTimeChange(event){
        const value = event.target.value;
        this.setState({time: value})
    }
    
async componentDidMount(){
    var url = 'http://localhost:8080/api/technicians/'
    var response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        this.setState({technicians: data.technicians});
    }
    url = 'http://localhost:8100/api/automobiles/'
    response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        this.setState({autos: data.autos});
    }

    url = 'http://localhost:8080/api/customers/'
    response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        this.setState({customers: data.customers});
    }
    
} 



render() {
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Service</h1>
            <form onSubmit={this.handleSubmitChange} id="create-service-form">


              <div className="mb-3">
                  <select onChange={this.handleCustomerChange} value={this.state.customer} required id="customer" name="customer" className="form-select">
                    <option value="">Customer</option>
                    {this.state.customers.map(customer => {
                          return (
                          <option key={customer.phone_number} value={customer.id}>
                              {customer.name}
                          </option>
                          );
                      })}
                  </select>
                </div>

              <div className="mb-3">
                  <select onChange={this.handleAutoMobileChange} value={this.state.auto} required id="auto" name="auto" className="form-select">
                    <option value="">Automobile VIN</option>
                    {this.state.autos.map(auto => {
                          return (
                          <option key={auto.vin} value={auto.vin}>
                              {auto.vin}
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
                <input onChange={this.handleTimeChange} value={this.state.time} placeholder="Appointment Time" required type="time" name="time" id="time" className="form-control" />
                <label htmlFor="time">Appointment Time</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleServiceReasonChange} value={this.state.service_reason} placeholder="Service Reason" required type="text" name="service_reason" id="service_reason" className="form-control" />
                <label htmlFor=" service_reason">Service Reason</label>
              </div>
              <div className="mb-3">
                  <select onChange={this.handleAssignedTechnicianChange} value={this.state.assigned_technician} required id="technician" name="technician" className="form-select">
                    <option value="">Assigned Technician</option>
                    {this.state.technicians.map(technician => {
                          return (
                          <option key={technician.employee_number} value={technician.id}>
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