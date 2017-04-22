/**
 * Created by Павел on 22.04.2017.
 */
import AddPayment from "./Addpayment"
export default class Row extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            rowNumber: this.props.number,
            payment: this.props.addPayment,
            disabled: this.props.disabled?"disabled":null
        }
    }
    render(){
        if (this.state.payment)
        return(
            <tr className={this.state.disabled}>
                <td>{this.state.data.number} </td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.overpayment} ₽</td>
                <td>{this.state.data.balance} ₽</td>
                <td>{this.state.data.mainDebt} ₽</td>
                <td>{this.state.data.accrued} ₽</td>
                <td>{this.state.data.payment} ₽</td>
                <td>
                    <AddPayment disabled={this.state.disabled}/>
                </td>
            </tr>
        );
    };
}
