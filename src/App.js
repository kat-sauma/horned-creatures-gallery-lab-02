import React from 'react';
import './App.css';
// import Header from './MyHeader/Header.js';
import creatures from './data.js';
import ImageList from './MyImageList/ImageList.js';

export default class App extends React.Component {
  state = {
    url: '',
    title: '',
    description: '',
    keyword: '',
    horns: '',
  }
  render() {
    return (
      <body>
        {/* <Header /> */}
        <ImageList creatures={creatures} />

        <div className='form'>
          <form>
            Creature
            <input
              value={this.state.keyword}
              onChange={this.handleCreatureChange}
            />
            Horns
            <select
              value={this.state.horns}
              onChange={(e) => {
                this.setState({
                  horns: e.target.value
                })
              }}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </select>
            <button>Submit</button>
          </form>
          <h3 className='return-creature'>
            Creature: {this.state.keyword}
          </h3>
          <h3 className='return-horns'>
            Horns: {this.state.horns}
          </h3>
        </div>
      </body>
    )
  }
}

