class GroceryListItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      done: false
    };
    this.onListItemHover = this.onListItemHover.bind(this);
  }

  onListItemHover () {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'fontWeight': this.state.done ? '800' : '400'
    }
    return (
      <li style={style} onMouseOver={this.onListItemHover}>{this.props.item}</li>
    )
  }
};


class GroceryList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ul>
          {this.props.groceries.map(item =>
          <GroceryListItem item={item}/>)}
        </ul>
    )
  }
};





ReactDOM.render(
  <GroceryList groceries={['cucumber', 'banana']}/>, document.getElementById('app')
);
