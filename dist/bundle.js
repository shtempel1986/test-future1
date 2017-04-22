(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Павел on 22.04.2017.
 */
var AddPayment = function (_React$Component) {
    _inherits(AddPayment, _React$Component);

    function AddPayment(props) {
        _classCallCheck(this, AddPayment);

        var _this = _possibleConstructorReturn(this, (AddPayment.__proto__ || Object.getPrototypeOf(AddPayment)).call(this, props));

        _this.state = {
            modalActive: false,
            paymentDone: false,
            addingPayment: true,
            disabled: _this.props.disabled
        };
        return _this;
    }

    _createClass(AddPayment, [{
        key: "_modalOn",
        value: function _modalOn() {
            this.setState({
                modalActive: true
            });
        }
    }, {
        key: "_paymentSuccess",
        value: function _paymentSuccess() {
            this.setState({
                modalActive: false,
                paymentDone: true,
                addingPayment: false
            });
        }
    }, {
        key: "_paymentCancel",
        value: function _paymentCancel() {
            this.setState({
                modalActive: false,
                paymentDone: false,
                addingPayment: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.state.disabled);
            if (this.state.modalActive) {
                return React.createElement(
                    "div",
                    { className: "modal-wrapper" },
                    React.createElement(
                        "div",
                        { className: "modal" },
                        React.createElement(
                            "button",
                            { className: "close-modal", onClick: this._paymentCancel.bind(this) },
                            React.createElement("img", { src: "img/close.jpg", alt: "" })
                        ),
                        React.createElement(
                            "h2",
                            null,
                            "\u0421\u0443\u043C\u043C\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                        ),
                        React.createElement(
                            "div",
                            { className: "payment-count" },
                            "10000 \u20BD"
                        ),
                        React.createElement(
                            "button",
                            { className: "default", onClick: this._paymentSuccess.bind(this) },
                            "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
                        )
                    )
                );
            } else if (this.state.paymentDone) {
                return React.createElement(
                    "div",
                    { className: "payment" },
                    React.createElement(
                        "button",
                        { className: "cancel-payment", onClick: this._paymentCancel.bind(this) },
                        React.createElement("img", { src: "img/close.jpg", alt: "" })
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "10 000 \u20BD"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F 25 000 \u20BD"
                    )
                );
            } else {
                return React.createElement(
                    "button",
                    { className: "add-payment default", onClick: this._modalOn.bind(this), disabled: this.state.disabled },
                    "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436"
                );
            }
        }
    }]);

    return AddPayment;
}(React.Component);

exports.default = AddPayment;
},{}],2:[function(require,module,exports){
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
},{"./Addpayment":1}],3:[function(require,module,exports){
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
},{"./Row":2}],4:[function(require,module,exports){
"use strict";

var _Table = require("./components/Table");

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    month: 5,
    overpayment: 30000,
    balance: 3450000,
    mainDebt: 10000,
    accrued: 30000,
    payment: 40000
};

ReactDOM.render(React.createElement(_Table2.default, { initialData: data }), document.getElementById("app"));
},{"./components/Table":3}]},{},[4])