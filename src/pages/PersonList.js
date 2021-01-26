import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
      persons: [
        
      ]
    }

  
    componentDidMount() {
      axios.get(`http://localhost:3001/api/all`)
        .then(res => {
          const persons = res.data;
          try {
            JSON.parse(res.data)
          } catch (error) {
            console.log(error)
          }
          //const atualizar = JSON.parse(persons);
          this.setState({ persons });
        })
    }
  
    render() {
      return ( 
        <ul>
         { this.state.persons}
         
        </ul>
      )
    }
  }