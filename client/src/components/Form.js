import React from 'react';

class Form extends React.Component {
  defaultValue = { item: '' }
  state = {...this.defaultValue}

  componentDidMount() {
    if (this.props.id)
    this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const menu = { ...this.state }
    this.props.submit(menu)
    this.setState({ ...this.defaultValue })
  }

  handleChange = (e) => {
    const { target: { item, value }} = e;
    this.setState({ [item]: value })
  }

  render() {
    const { item } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          item="item"
          placeholder="Item"
          defaultValue={item}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;