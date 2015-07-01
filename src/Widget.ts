/// <reference path='../typings/react/react.d.ts' />
import React = require('react');

interface P {
  name?: string;
}

interface S {
  score?: number;
}

class Widget extends React.Component<P, S> {
  state: S = {
    score: 0
  }

  private _incrementScore = () => {
    this.setState({score: this.state.score + 1});
  }

  render() {
    return React.DOM.div({
      children: [
        this.props.name + ' Score: ' + this.state.score,
        React.DOM.button({
          onClick: this._incrementScore
        }, 'Increment Score')
      ]
    });
  }
}

React.render(React.createElement(Widget, {name: 'Hello world'}), document.getElementById('react'));
