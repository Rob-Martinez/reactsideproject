import { Component } from "react";


class Card extends Component {

    render() {
        const { id, name, email } = this.props.cat
        return(
            <div key={id}>
                  <h1>{name}</h1>
                  <p>{email}</p>
            </div>
        );
    }
}

export default Card;