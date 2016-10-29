class Part extends React.Component {
  constructor() {
    super();
    this.state = {"index": undefined};
  };
  componentDidMount() {
    this.setState({
      "index": ReactDOM.findDOMNode(this).parentNode.dataset.index
    });
  };
  render() {
    return <p>This is a test {this.state.index}</p>;
  };
};

document.querySelectorAll("div.test").forEach((el) => {
  ReactDOM.render(<Part/>, el);
});
