var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path='../typings/react/react.d.ts' />
var React = require('react');
var Goal = (function (_super) {
    __extends(Goal, _super);
    function Goal() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            complete: false
        };
        this._toggleCompletion = function () {
            _this.setState({ complete: !_this.state.complete });
        };
    }
    Goal.prototype.render = function () {
        var status = 'Status: ' + (this.state.complete ? 'complete' : 'incomplete');
        return React.DOM.div({
            children: [
                React.DOM.div({}, this.props.name + ' - ' + status),
                React.DOM.button({
                    onClick: this._toggleCompletion
                }, 'Toggle completion')
            ]
        });
    };
    return Goal;
})(React.Component);
React.render(React.createElement(Goal, { name: 'Learn React and TypeScript' }), document.getElementById('react'));
