import React from 'react';
import './App.css';
import creatures from './data.js';
import ImageList from './MyImageList/ImageList.js';
import Header from './MyHeader/Header.js';
import './index.css';

export default class App extends React.Component {
  state = {
    url: '',
    title: '',
    description: '',
    keyword: '',
    horns: '',
  }

  handleKeywordChange = (e) => {
    this.setState({
      creature: e.target.value
    })
  }
  handleHornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  render() {
    console.log(this.state)
    const creatureOptions = creatures.map(
      creature =>
        <option key={creature.title} value={creature.keyword}>{creature.keyword}</option>
    )

    const filteredCreatures = creatures.filter((creature) => {
      if (!this.state.keyword && !this.state.horns) return true;

      if (this.state.keyword && !this.state.horns) {
        if (creature.keyword === this.state.keyword) return true;
      }

      if (Number(this.state.horns) && !this.state.keyword) {
        if (Number(creature.horns) === Number(this.state.horns)) return true;
      }

      if (Number(this.state.horns) && this.state.keyword) {
        if (Number(creature.horns) === Number(this.state.horns) && creature.keyword === this.state.keyword) return true;
      }

      return false;
      // if (creature.horns === Number(this.state.horns)) return true;

      // if (creature.keyword === this.state.keyword) return true;

      // return false;
    });

    return (
      <main>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Hanalei&display=swap');
</style>
        <Header />
        <section className='border'>
          <section className='colorful-backdrop'>
            <section className='form'>
              <form>
                <div>
                  <h2>Creature</h2>
                  <select
                    value={this.state.keyword}
                    // onChange={this.handleKeywordChange}
                    onChange={(e) => {
                      this.setState({
                        keyword: e.target.value
                      })
                    }}
                  >
                    {creatureOptions}
                  </select>
                </div>
                <div>
                  <h2>Horns</h2>
                  <select
                    value={this.state.horns}
                    // onChange={(e) => {
                    // this.setState({
                    //   horns: Number(e.target.value)
                    onChange={this.handleHornsChange}
                  // })
                  // }}
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                  </select>
                </div>
              </form>
            </section>
            <section className='key'>
              <h3 className='return-creature'>
                Creature: {this.state.keyword}
              </h3>
              <h3 className='return-horns'>
                Horns: {this.state.horns}
              </h3>
            </section>
            <ImageList creatures={filteredCreatures} />
          </section>
        </section>
      </main >
    )
  }
}

