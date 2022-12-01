import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query.trim()) {
      toast('Введите данные в поле ввода');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.resetForm();
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <FcSearch />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            value={this.state.query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
