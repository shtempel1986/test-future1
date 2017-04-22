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
                            React.createElement("img", { src: "../img/close.jpg", alt: "" })
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
                        React.createElement("img", { src: "../img/close.jpg", alt: "" })
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