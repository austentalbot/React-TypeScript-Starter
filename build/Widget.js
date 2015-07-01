var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path='../typings/react/react.d.ts' />
var React = require('react');
var Widget = (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            score: 0
        };
        this._incrementScore = function () {
            _this.setState({ score: _this.state.score + 1 });
        };
    }
    Widget.prototype.render = function () {
        return React.DOM.div({
            children: [
                this.props.name + ' Score: ' + this.state.score,
                React.DOM.button({
                    onClick: this._incrementScore
                }, 'Increment Score')
            ]
        });
    };
    return Widget;
})(React.Component);
React.render(React.createElement(Widget, { name: 'Hello world' }), document.getElementById('react'));
