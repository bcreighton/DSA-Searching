import {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    search: null,
    tries: null,
    error: null,
  }

  resetSearch = () => {
    return this.setState({
      search: null,
      tries: null,
    })
  }

  setSearch = (search, tries) => {
    this.resetSearch()
    return this.setState({
      search,
      tries,
      error: null,
    })
  }

  linearSearch = (search) => {
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i] === search) {
          return this.setSearch(search, i + 1);
      }
  }
  return this.setSearch(-1);
  }

  binarySearch = (search, data, start, end, count) => {
    data = (data === undefined) ? this.state.data : data;
    count = (count === undefined) ? 0 : count;
    count++;

    const sortedData = data.sort();
    start = (start === undefined) ? 0 : start;
    end = (end === undefined) ? sortedData.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = sortedData[index];

    // console.log(start, end);
    if (item === search) {
        return this.setSearch(search, count)
    }
    else if (item < search) {
        return this.binarySearch(search, sortedData, index + 1, end, count);
    }
    else if (item > search) {
        return this.binarySearch(search, sortedData, start, index - 1, count);
    }
}

  handleSubmit = e => {
    e.preventDefault();
    const {
        search,
    } = e.target;

    const searchVal = {
      search: search.value,
    }
    this.setState({error: null})
    // this.linearSearch(searchVal)
    this.binarySearch(parseInt(searchVal.search))
  }

render() {

  const searchResult = this.state.search;
  const tries = this.state.tries;

  return (
    <div className="App">
      <header className="App-header">
        <div>
            <section className="container searchForm">
              <form 
                id="searchForm"
                onSubmit={this.handleSubmit}
              >
                <input 
                  type="text" 
                  id='search' 
                  name='search' 
                />
                <label 
                  htmlFor="search">
                  Search
                </label>
                    <button type='submit'>Search</button>
              </form>
            </section>

            {(searchResult !== null) ? `${searchResult} took ${tries} tries to find` : 'No Result'}
        </div>
      </header>
    </div>
  );
}
}

export default App;
