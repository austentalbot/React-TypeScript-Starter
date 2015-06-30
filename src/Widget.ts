/// <reference path='../typings/react/react.d.ts' />
import React = require('react');

interface P {
  name: string;
}

interface S {
  score: number;
}

class Widget extends React.Component<P, S> {

}

React.render(React.createElement(Widget, {name: 'Hello world'}), document.getElementById('react'));
