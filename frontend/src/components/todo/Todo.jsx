import React, { Component } from 'react'
import PageHeader from '../header/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  render() {
    return (
      <div className="">
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}
