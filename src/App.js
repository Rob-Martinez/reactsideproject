import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats:[],
      search: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then((users) => this.setState(() => {
      return {cats:users};
    },
    () => {
      console.log(this.state.cats)
    }));
  }
  onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { search };
    },
    () => {
      console.log(search)
    })
  }

  render() {

    const filtercats = this.state.cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(this.state.search)
    })

    return (
    <div className="App">
     <input 
      className='search' 
      type="search" 
      placeholder="search cats"
      onChange={this.onSearchChange}
     />
      {filtercats.map((cat) => {
        return (
          <div key={cat.id}>
            <h1>{cat.name}</h1>
          </div>
        )
      })}
    </div>
  );
  }
}

export default App;
