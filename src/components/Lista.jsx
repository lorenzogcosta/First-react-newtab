import React, { Component } from "react";
import './lista.css'

import axios from "axios";
export default class Lista extends Component {


    state = {
        data: [],
        modalopen: (false),
        modalA: (false),
        modalD: (false),
        indexCartao: "",
        username: "",
        userid: "",
        cards: [
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
        ]
    }


    async componentDidMount() {

        this.handleChange = this.handleChange.bind(this);
        this.validForm = this.validForm.bind(this);

        let bodyApi = this.state

        const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

        const response = await fetch(api)
        console.log(" res: ", response)

        const body = await response.json();
        console.log("body:", body);

        bodyApi.data = body

        this.setState(bodyApi)


    }

    handleChange(event) {
        console.log("event.target.value ", event.target.value)

        this.setState({ indexCartao: event.target.value });
    }


    openModal(user) {
        console.log("USUARIO SELECIONADO ", user);

        this.setState({ modalopen: true, username: user.name, userid: user.id })


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

        console.log("indexCartao ", this.state.indexCartao);
        console.log("CARTAO SELECIONADO ", this.state.cards[this.state.indexCartao]);

        let worth = document.querySelector("#worthPayment").value;
        let spanError = document.querySelector(".spanError");
        let eventerror = false;
        // let modalReturn = document.getElementById('cards').value;




        if (worth === "") {

            eventerror = true;
            spanError.innerHTML = "Digite O Valor"

        }

        if (!eventerror) {

            if (this.state.indexCartao === '1') {

                this.setState({ modalA: true })

                console.log('cartao ok')
                console.log(worth)

                axios.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
                    // Card Info
                    {
                        card: (this.indexCartao),

                        // Destination User ID
                        destination_user_id: (this.state.userid),

                        // Value of the Transaction
                        value: (worth),
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });



            }

            if (this.state.indexCartao === '0') {

                this.setState({ modalD: true })

            }

        }

    }






    render() {

        const users = this.state.data



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
                                <button onClick={() => this.openModal(user)} className="button" >Pagar</button>
                            </div>
                        </p>
                    </div>)}

                </div>

                {/* MODAL DE SELECAO DE CARTOES */}

                <div onClick={() => { this.setState({ modalopen: false, modalA: false, modalD: false }) }} style={{ display: this.state.modalopen ? "block" : "none" }} className="backdrop">

                </div>
                <div style={{ display: this.state.modalopen ? "flex" : "none" }} className='cardsModal'>
                    <label style={{ color: "blueviolet" }}>Pagando {this.state.username}</label>
                    <div className="inputPayment" >
                        <label htmlFor="worthPayment">Valor Do Pagamento</label><br />
                        <input onKeyPress={this.mask} id="worthPayment" type="text" placeholder="R$  DIGITE O VALOR" />
                    </div>
                    <div style={{ color: 'red' }} className="spanError"></div>

                    <div className="selectCard">
                        <label htmlFor="cardsLabel">Selecione o Cartao</label> <br />
                        <select onChange={this.handleChange} >
                            {this.state.cards.map((card, i) =>
                                <option value={i}> {card.card_number}</option>)}
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

                {/* MODAL DE PAGAMENTO COM FALHA */}

                <div className="modalD" style={{ display: this.state.modalD ? "flex" : "none" }} >
                    Pagamento NAO Realizado
                </div>


            </>
        )



    }




}