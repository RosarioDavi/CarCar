    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phone_number: ''
        };
    }
    this.state method ie (Forms and Lists)
    




    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }
    handlechange will allow one handlechange over multiple however, name field in JSX needs to match ie. (Forms and Lists)





    this.Auto();
    Goes under line 51 in CreateSaleRecordForm


    async Auto() {
    var url = 'http://localhost:8100/api/automobiles/';

    var response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const filterdata = data.autos.filter(auto => auto.sold === false) 
      this.setState({autos: filterdata})
    }
  }
  Not sure if I got it working. Tried to separate component did mount.