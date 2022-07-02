import { Component } from 'react';
import SearchBox from './components/Search-Box/search-box.component'
import CardList from './components/Card-List/card-list.component';
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
    })
  }

  render() {
    const { cats, search } = this.state;
    const { onSearchChange } = this;
    const filtercats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(search)
    })

    return (
      <div>
        <SearchBox 
          onChange={onSearchChange}
          className='cats-search-box'
          placeholder='Search Cats'
        />
        <CardList cats={filtercats}/>
      </div>
    );
  }
}

export default App;
