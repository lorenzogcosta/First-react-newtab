import React, { Component } from "react";
import './lista.css'
export default class Lista extends Component {


    state = {
        data: [],
        modalopen: (false),
        modalA: (true),
        modalD: (false)
    }


    async componentDidMount() {

        let bodyApi = this.state

        const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

        const response = await fetch(api)
        console.log(" res: ", response)

        const body = await response.json();
        console.log("body:", body);

        bodyApi.data = body

        this.setState(bodyApi)


    }



    mask() {
        document.querySelector(".spanError").innerHTML = "";

        let elemento = document.querySelector("#worthPayment");
        let valor = elemento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2}$)/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        elemento.value = valor

        if (valor === 'NaN') {
            elemento.value = '';
        }

        if (valor === 'null') {
            elemento.value = '';
        }

    }

    validForm() {


        let worth = document.querySelector("#worthPayment").value;
        let spanError = document.querySelector(".spanError");
        let eventerror = false;
        let modalReturn = document.getElementById('cards').value;




        if (worth === "") {

            eventerror = true;
            spanError.innerHTML = "Digite O Valor"

        }

        if (!eventerror) {

            // fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
            //     method: "POST",

            //     body: JSON.stringify({

            //         "transacao": [
            //             {
            //                 "card_number": string,
            //                 "cvv": number,
            //                 "expiry_date": string,
            //             }
            //         ]
            //     })
            // }
            // )

            console.log(worth)
            console.log(modalReturn)

        }

    }

    




    render() {

        const users = this.state.data

        let cards = [
            // valid card
            {
                card_number: '1111111111111111',
                cvv: 789,
                expiry_date: '01/18',
            },
            // invalid card
            {
                card_number: '4111111111111234',
                cvv: 123,
                expiry_date: '01/20',
            },
        ];


        return (
            <>
                <div >{users.map((user) =>
                    <div className="containerList" >
                        <p className="usersList">
                            <p className="containerImg"><div className="idUser"><strong > ID:</strong>{user.id}</div><img className="img" src={user.img} alt="" />
                                <div className="userName"><strong> {user.username} </strong></div>
                            </p>

                            <p className="h2"> NOME: {user.name}</p>

                            <div className="divButton">
                                <button onClick={() => this.setState({ modalopen: true })} className="button" >Pagar</button>
                            </div>
                        </p>
                    </div>)}

                </div>

                {/* MODAL DE SELECAO DE CARTOES */}

                <div onClick={() => { this.setState({ modalopen: false, modalA: false, modalD: false }) }} style={{ display: this.state.modalopen ? "block" : "none" }} className="backdrop">

                </div>
                <div style={{ display: this.state.modalopen ? "flex" : "none" }} className='cardsModal'>

                    <div className="inputPayment" >
                        <label htmlFor="worthPayment">Valor Do Pagamento</label><br />
                        <input onKeyPress={this.mask} id="worthPayment" type="text" placeholder="R$  DIGITE O VALOR" />
                    </div>
                    <div style={{ color: 'red' }} className="spanError"></div>

                    <div className="selectCard">
                        <label htmlFor="cardsLabel">Selecione o Cartao</label> <br />
                        <select name="cardsPayment" id="cards">
                            {cards.map((card) =>
                                <option>{card.card_number}</option>)}
                        </select><br />
                        <div>

                            <button onClick={this.validForm} className="second_button">Pagar</button>
                        </div>
                    </div>

                </div>
                {/* MODAL DE PAGAMENTO REALIZADO COM SUCESSO */}

                <div className="modalA" style={{ display: this.state.modalA ? "flex" : "none" }} >
                    Pagamento Realizado com Sucesso
                </div>



            </>
        )



    }




}