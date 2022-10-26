import React from 'react';

class ManufacturerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: []
        }
    }

    async loadManufacturer() {
        const response = await fetch('http://localhost:8100/api/manufacturers/');
        if (response.ok) {
          const data = await response.json();
          this.setState({manufacturers : data.manufacturers})
        } else {
          console.error(response);
        }
      }

    async componentDidMount() {
        this.loadManufacturer()
    }

    render () {
        return (
            <div className="container">
                <h1>Manufacturers</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>          
                        {this.state.manufacturers.map(manufacturer => {
                            return (
                            <tr key={manufacturer.id}>
                                <td>{ manufacturer.name }</td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
              </div>
        );
    }
}
export default ManufacturerList