var ar = [], index;
class Part extends React.Component {
  render() {
    return (
      <div>{
        this.props.data.map((index) => {
          return <div><p>This is a test { index }</p></div>;
        })
      }</div>
    )
  }
}

for (index = 0; index < 100000; index += 1) {
  ar = ar.concat(index)
}

ReactDOM.render(<Part data={ar} />, document.querySelector("#app"));
