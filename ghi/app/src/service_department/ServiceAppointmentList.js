import React from 'react';

class ServiceAppointmentList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            services :[]
        }
       }

       async loadServiceAppointment(){
        const response = await fetch('http://localhost:8080/api/pending/');
        if (response.ok) {
          const data = await response.json();
          this.setState({services:data.services})
        } else {
          console.error(response);
        }
      }

      async componentDidMount(){
        this.loadServiceAppointment()

      }

      async delete(id){
        await fetch(`http://localhost:8080/api/service/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            }).then(() => {
                let updatedservice = [...this.state.services].filter(i => i.id !== id);
                this.setState({services : updatedservice});
            });
      }

       async finished(complete) {
        console.log(complete)
        const url = `http://localhost:8080/api/pending/${complete}/`
        const fetchConfig = {
          method: "put",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            finished: true
          })
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          console.log({"Success": "completed appointment"})
        } else {
            console.log({"Failed": "Did not completed appointment"})
        }
    }



      render () {
        return (
            <div className="container">
                <h1>Service Appointment List</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Technician</th>
                                <th>Reason</th>
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
                                <td><button onClick={() => this.delete(service.id)}>Cancel</button></td>
                                <td><button onClick={() => this.finished(service.id)}>Finished</button></td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
              </div>
        );
    }
}
export default ServiceAppointmentList

































































