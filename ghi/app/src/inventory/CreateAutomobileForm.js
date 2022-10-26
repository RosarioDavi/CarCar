import React from 'react';

class CreateAutomobileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          color: '',
          year: '',
          vin: '',
          model_id: '',
          models: []
        };

        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleVehicleModelChange = this.handleVehicleModelChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
    }


    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);
        delete data.models;
    
        const locationUrl = 'http://localhost:8100/api/automobiles/';
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
            color: '',
            year: '',
            vin: '',
            model_id: '',
            model: ''
          };
          this.setState(cleared);
        }    
    }
    
    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
      }

    handleYearChange(event) {
      const value = event.target.value;
      this.setState({year: value})
    }

    handleVinChange(event) {
      const value = event.target.value;
      this.setState({vin: value})
    }

    handleVehicleModelChange(event) {
      const value = event.target.value;
      this.setState({model_id: value})
    }
   
    async componentDidMount() {
      var url = 'http://localhost:8100/api/models/';
  
      var response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        this.setState({models: data.models})
      }
    }    

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add an Automobile to Inventory</h1>
                <form onSubmit={this.handleSubmitChange} id="add-automobile-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="name">Color</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleYearChange} value={this.state.year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                    <label htmlFor="year">Year</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleVinChange} value={this.state.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">VIN</label>
                  </div>
                  <div className="mb-3">
                  <select onChange={this.handleVehicleModelChange} value={this.state.model} required id="model" name="model" className="form-select">
                  <option value="">Choose a Vehicle Model</option>
                    {this.state.models.map(model => {
                        return (
                        <option key={model.id} value={model.id}>
                            {model.name}
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
export default CreateAutomobileForm;