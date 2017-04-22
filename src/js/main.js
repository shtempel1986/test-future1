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