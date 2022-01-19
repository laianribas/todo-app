import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/todos">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/todos">
                Tarefas
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
