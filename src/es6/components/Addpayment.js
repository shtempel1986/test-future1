/**
 * Created by Павел on 22.04.2017.
 */
export default class AddPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            paymentDone: false,
            addingPayment:true,
            disabled: this.props.disabled
        };
    }

    _modalOn(){
        this.setState({
            modalActive: true
        })
    }

    _paymentSuccess(){
        this.setState({
            modalActive: false,
            paymentDone: true,
            addingPayment: false
        })
    }

    _paymentCancel(){
        this.setState({
            modalActive: false,
            paymentDone: false,
            addingPayment:true
        })
    }

    render() {
        console.log(this.state.disabled);
        if (this.state.modalActive) {
            return (
                <div className="modal-wrapper">
                    <div className="modal">
                        <button className="close-modal" onClick={this._paymentCancel.bind(this)}>
                            <img src="../img/close.jpg" alt=""/>
                        </button>
                        <h2>Сумма платежа</h2>
                        <div className="payment-count">
                            10000 ₽
                        </div>
                        <button className="default" onClick={this._paymentSuccess.bind(this)}>Сохранить</button>
                    </div>
                </div>
            );
        }else if(this.state.paymentDone){
            return (
                <div className="payment">
                    <button className="cancel-payment" onClick={this._paymentCancel.bind(this)}>
                        <img src="../img/close.jpg" alt=""/>
                    </button>

                    <h3>10 000 ₽</h3>
                    <p>Экономия 25 000 ₽</p>
                </div>
            );
        } else {
            return(
                <button className="add-payment default" onClick={this._modalOn.bind(this)} disabled={this.state.disabled}>
                    Добавить платеж
                </button>
            );
        }
    }
}