"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Addpayment = require("./Addpayment");

var _Addpayment2 = _interopRequireDefault(_Addpayment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Павел on 22.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Row = function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row(props) {
        _classCallCheck(this, Row);

        var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

        _this.state = {
            data: _this.props.data,
            rowNumber: _this.props.number,
            payment: _this.props.addPayment,
            disabled: _this.props.disabled ? "disabled" : null
        };
        return _this;
    }

    _createClass(Row, [{
        key: "render",
        value: function render() {
            if (this.state.payment) return React.createElement(
                "tr",
                { className: this.state.disabled },
                React.createElement(
                    "td",
                    null,
                    this.state.data.number,
                    " "
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.data.date
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.data.overpayment,
                    " \u20BD"
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.data.balance,
                    " \u20BD"
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.data.mainDebt,
                    " \u20BD"
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.data.accrued,
                    " \u20BD"
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.data.payment,
                    " \u20BD"
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(_Addpayment2.default, { disabled: this.state.disabled })
                )
            );
        }
    }]);

    return Row;
}(React.Component);

exports.default = Row;