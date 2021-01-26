import React from 'react';
import api from '../tests/api';

export default class TesteAxios extends React.Component {

    state = {
        filmes: [],
    }

    async componentDidMount(){
        const response = await api.get();
        console.log(response.data)

        this.setState({ filmes: response.data })
    }

    render(){

        const {filmes} = this.state;

        return(
            <div>
                <h1>Listagem</h1>
               {filmes.map(filme => (
                   <li key={filme.show.id}>
                       
                       {filme.show.name}
                       <p>{filme.show.genres}</p>
                       <p>{filme.show.language}</p>
                       <p>{filme.show.external}</p>
                   </li>
               ))}
            </div>
        )
    }
}