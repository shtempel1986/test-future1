"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Row = require("./Row");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.displayName = "Table";
        _this.state = {
            data: _this.props.initialData
        };
        return _this;
    }

    _createClass(Table, [{
        key: "render",
        value: function render() {
            var rows = [],
                data = void 0,
                month = "";
            for (var i = 1; i < 5; i++) {
                if (this.state.data.month + i < 10) {
                    month = "0" + (this.state.data.month + i - 1);
                } else month = "" + (this.state.data.month + i - 1);
                data = {
                    number: i + 1,
                    date: month + ".16",
                    overpayment: this.state.data.overpayment * i,
                    balance: this.state.data.balance - 10000 * (i - 1),
                    mainDebt: this.state.data.mainDebt,
                    accrued: this.state.data.accrued,
                    payment: this.state.data.payment
                };
                rows.push(React.createElement(_Row2.default, { data: data, number: i, addPayment: true, key: i, disabled: i === 1 }));
            }
            return React.createElement(
                "table",
                null,
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "\u2116"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "\u0414\u0430\u0442\u0430"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "\u0421\u0443\u043C\u043C\u0430 ",
                            React.createElement("br", null),
                            "\u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0442"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "\u041E\u0441\u0442\u0430\u0442\u043E\u043A ",
                            React.createElement("br", null),
                            "\u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 ",
                            React.createElement("br", null),
                            "\u0434\u043E\u043B\u0433"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 ",
                            React.createElement("br", null),
                            "\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "\u041F\u043B\u0430\u0442\u0435\u0436"
                        ),
                        React.createElement("th", { className: "payment-col" })
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    rows
                )
            );
        }
    }]);

    return Table;
}(React.Component);

exports.default = Table;