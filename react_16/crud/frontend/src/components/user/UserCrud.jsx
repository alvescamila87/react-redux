import React, { Component } from "react";
import Main from "../template/Main";
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Alterar e Excluir'
}

const baseURL = 'http://localhost:3001/users'
const initialState = { 
    users: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
    // inicializar estado
    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.initialState.user;
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        axios[method](url, user)
            .then(response => {
                const list = this.getUpdatedList(response.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        // removendo o usuário do parâmetro da lista
        const list = this.initialState.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Usuários
            </Main>
        )
    }
}