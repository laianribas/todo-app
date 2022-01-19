import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/todos">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/todos">
                Tarefas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
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
