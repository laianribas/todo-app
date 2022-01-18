import React from 'react'

const Menu = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
        <div className="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/todos">
                Tarefas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
