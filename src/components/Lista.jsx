import React, { Component } from "react";
import './lista.css'

export default class Lista extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

        const response = await fetch(api)
        console.log(" res: ", response)

        const body = await response.json();
        console.log("body:", body);

        this.setState({ data: body })
    }


    render() {

        const users = this.state.data

        return (
            <div >{users.map((user) =>
                <div className="containerList" >
                <p className="usersList">
                    <p className="containerImg"><div className="idUser"><strong > ID:</strong>{user.id}</div><img className="img" src={user.img} alt="" />
                        <div className="userName"><strong> {user.username} </strong></div>
                    </p>

                    <h2 className="h2"> NOME: {user.name}</h2>

                    <div className="divButton">
                        <button className="button">Pagar</button>
                    </div>
                </p>
                </div>)}
                
            </div>
        )

    }



}