function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+'];
const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add' };


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      calc: '0',
      lastPressed: undefined,
      operation: undefined });_defineProperty(this, "handleClick",


    e => {
      const { calc, lastPressed, operation } = this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case 'AC':{
            this.setState({
              calc: '0' });

            break;
          }

        case '=':{
            const result = eval(calc);
            this.setState({
              calc: result });

            break;
          }

        case '.':{
            let nums = calc.split(/[+\-*/]/);
            let num = nums.slice(-1)[0];
            if (!num.includes('.')) {
              this.setState({
                calc: calc + '.' });

            }
            break;
          }

        default:{
            let temp = undefined;
            if (ops.includes(innerText)) {
              if (ops.includes(lastPressed) && innerText !== '-') {
                const lastNumberIdx = calc.split('').reverse().findIndex(num => num.includes(+num));
                temp = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
              } else {
                temp = ` ${calc} ${innerText} `;
              }
            } else {
              temp = calc == '0' ? innerText : calc + innerText;
            }

            this.setState({
              calc: temp,
              lastPressed: innerText });

          }}

    });}

  render() {
    const { calc } = this.state;

    return (
      React.createElement("div", { className: "calculator" },
      React.createElement("div", { id: "display", className: "display" },
      calc),

      React.createElement("div", { className: "nums-container" },
      React.createElement("button", {
        id: "clear",
        className: "light-gray big-h ac",
        onClick: this.handleClick }, "AC"),


      nums.map((num) =>
      React.createElement("button", { className: `dark-gray ${num == 0 && 'big-h'}`,
        key: num,
        onClick: this.handleClick,
        id: ids[num] },
      num)),

      React.createElement("button", { id: "decimal", className: "light-gray", onClick: this.handleClick }, ".")),

      React.createElement("div", { className: "ops-container" },
      ops.map((op) =>
      React.createElement("button", { className: "orange",
        key: op,
        onClick: this.handleClick,
        id: ids[op] },
      op)),

      React.createElement("button", {
        id: "equals",
        className: "orange",
        onClick: this.handleClick }, "="))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("main"));