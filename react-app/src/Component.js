import React, { Component } from 'react';

class PersonList extends Component {
  render() {
    const list = [{name: 'John', age: 23}, {name: 'Ana', age: 34}];

    return (
      <div className="list">
        {
            list.map(person => 
                (<Person name={person.name} age={person.age}/>)
            )
        }
      </div>
    );
  }
}

export default PersonList;


function getUsers() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
}

