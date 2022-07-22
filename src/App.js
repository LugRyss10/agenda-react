import React from 'react';
import Add from './components/Add'
import List from './components/List'

function App() {
    return (
      <div class='p-3 mb-2 bg-dark'>
        <header class="navbar p-3 mb-3 col-12 alert alert-secondary">
          <h1> Agenda </h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Antu_view-calendar-agenda.svg/2048px-Antu_view-calendar-agenda.svg.png" width="60px" height="60px" alt="agenda"></img>
        </header>
        <div>
          <nav><Add/></nav>
          <nav><List/></nav>
        </div>
      </div>
    )
}

export default App