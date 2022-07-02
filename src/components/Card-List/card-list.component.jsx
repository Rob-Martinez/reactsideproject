import { Component } from "react";
import Card from '../Card/card.component'

class CardList extends Component {
    render() {
        const { cats } =this.props
        return(
        <div>
          {cats.map((cat) => {
              return (
                <Card cat={cat}/>
              )
          })}
        </div>
        );
    }
}

export default CardList;