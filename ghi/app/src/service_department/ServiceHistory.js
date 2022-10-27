import React, { useState } from 'react'

class ServiceHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            services: [],
            fileredServices:[]
        }

        // this.handleChange = this.handleChange.bind(this)
}

    handleChange=async (e) => {
        const data = this.state.services
        await this.setState({userInput: e.target.value}) 
        if (this.state.userInput === ''){
            this.setState({fileredServices: data})
        }
        else{
            let datafilter = data.filter(service=>service.automobile.vin===this.state.userInput)
            this.setState({fileredServices: datafilter}) 

        }

    }

        

 


async loadServiceAppointment(){
    const response = await fetch('http://localhost:8080/api/service/');
    if (response.ok) {
      const data = await response.json();
      let completed =data.services.filter((service)=>service.finished==true)
      this.setState({services:completed,
      fileredServices : completed })
    } else {
      console.error(response);
    }
  }

  async componentDidMount(){
    this.loadServiceAppointment()

  }




 render () {
    return (
        <div className="container">
            <h1>Service Appointments History </h1>
            <div>
                <input type= 'text' className = 'input' onChange={(e)=>this.handleChange(e)} value={this.state.userInput} placeholder='Search By VIN' />
               
                    
                
            </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            
                        </tr>
                    </thead>
                    <tbody>          
                    {this.state.fileredServices.map(service => {
                        return (
                        <tr key={service.id}>
                            <td>{ service.automobile.vin}</td>
                            <td>{ service.customer.name}</td>
                            <td>{ service.appointment_date}</td>
                            <td>{service.time}</td>
                            <td>{ service.assigned_technician.name}</td>
                            <td>{ service.service_reason}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
          </div>
    );
}
}

export default ServiceHistory