import React from 'react';
import './App.css';
// import Header from './MyHeader/Header.js';
import creatures from './data.js';
import ImageList from './MyImageList/ImageList.js';
import Header from './MyHeader/Header.js';

export default class App extends React.Component {
  state = {
    url: '',
    title: '',
    description: '',
    keyword: '',
    horns: '',
  }

  render() {
    const creatureOptions = creatures.map(
      creature =>
        <option key={creature.name} value={creature.keyword}>{creature.keyword}</option>
    )

    const filteredCreatures = creatures.filter((creature) => {
      if (!this.state.keyword && !this.state.horns) return true;

      if (creature.horns === Number(this.state.horns)) return true;

      if (creature.keyword === this.state.keyword) return true;

      return false;
    });

    return (
      <body>
        <Header />
        <section className='form'>
          <form>
            Creature
              <select
              value={this.state.keyword}
              onChange={(e) => {
                this.setState({
                  keyword: e.target.value
                })
              }}
            >
              {creatureOptions}
            </select>
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
          </form>
          <h3 className='return-creature'>
            Creature: {this.state.keyword}
          </h3>
          <h3 className='return-horns'>
            Horns: {this.state.horns}
          </h3>
        </section>
        <ImageList creatures={filteredCreatures} />
      </body>
    )
  }
}

