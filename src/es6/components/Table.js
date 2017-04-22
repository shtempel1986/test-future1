import Row from "./Row";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Table";
        this.state = {
            data: this.props.initialData
        };
    }

    render() {
        let rows = [], data, month = "";
        for (let i = 1; i < 5; i++) {
            if ((this.state.data.month + i) < 10) {
                month = `0${this.state.data.month + i - 1}`;
            }
            else  month = `${this.state.data.month + i - 1}`;
            data = {
                number: i + 1,
                date: `${month}.16`,
                overpayment: this.state.data.overpayment * i,
                balance: this.state.data.balance - 10000 * (i - 1),
                mainDebt: this.state.data.mainDebt,
                accrued: this.state.data.accrued,
                payment: this.state.data.payment
            };
            rows.push(<Row data={data} number={i} addPayment={true} key={i} disabled={i === 1}/>);
        }
        return (
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>Сумма <br/>переплат</th>
                    <th>Остаток <br/>задолжности</th>
                    <th>Основной <br/>долг</th>
                    <th>Начисленные <br/>проценты</th>
                    <th>Платеж</th>
                    <th className="payment-col"></th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}