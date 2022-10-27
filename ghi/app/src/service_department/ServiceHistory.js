import React from 'react'

class ServiceHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            services: '',
            services: []

        }

        // this.handleChange = this.handleChange.bind(this)
}

// handleChange(e){
//     let currentList = []
//     let newList = []

//     if(e.target.value !== ""){
//         currentList= this.state.vin;

//         newList = currentList.filter(auto.vin)
//         const filter = e.target.value.auto.vin()

//         return newList.includes(filter)
//     }

//     else{
//         newList = this.props.auto.vin
//     }

//     this.setState({
//         filtered:newList
//     })

// }




async loadServiceAppointment(){
    const response = await fetch('http://localhost:8080/api/service/');
    if (response.ok) {
      const data = await response.json();
      this.setState({services:data.services.filter((service)=>service.finished==true)})
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
            <h1>Service Appointments </h1>
            <div>
                <input type= 'text' className = 'input' placeholder='Search By VIN' />
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
                    {this.state.services.map(service => {
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