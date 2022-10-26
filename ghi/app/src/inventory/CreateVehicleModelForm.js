import React from 'react';

class CreateVehicleModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          picture_url: '',
          manufacturer_id: '',
          manufacturers: []
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
    }


    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);
        delete data.manufacturers;
    
        const locationUrl = 'http://localhost:8100/api/models/';
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
            picture_url: '',
            manufacturer_id: '',
            manufacturer: ''
          };
          this.setState(cleared);
        }    
    }
    
    handleNameChange(event) {
      const value = event.target.value;
      this.setState({name: value})
    }

    handlePictureChange(event) {
      const value = event.target.value;
      this.setState({picture_url: value})
    }

    handleManufacturerChange(event) {
      const value = event.target.value;
      this.setState({manufacturer_id: value})
    }
   
    async componentDidMount() {
      var url = 'http://localhost:8100/api/manufacturers/';
  
      var response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        this.setState({manufacturers: data.manufacturers})
      }
    }    

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create Vehicle Model</h1>
                <form onSubmit={this.handleSubmitChange} id="create-vehiclemodel-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePictureChange} value={this.state.picture_url} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                  </div>
                  <div className="mb-3">
                  <select onChange={this.handleManufacturerChange} value={this.state.manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                  <option value="">Choose a Manufacturer</option>
                    {this.state.manufacturers.map(manufacturer => {
                        return (
                        <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.name}
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
export default CreateVehicleModelForm;