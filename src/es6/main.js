
import Table from"./components/Table"

let data =
        {
            month: 5,
            overpayment : 30000,
            balance: 3450000,
            mainDebt: 10000,
            accrued: 30000,
            payment: 40000
        };

ReactDOM.render(
    <Table initialData={data}/>,
    document.getElementById("app")
);