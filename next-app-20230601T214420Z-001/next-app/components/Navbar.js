"use client"; 
function Navbar () {
    return (
   
     <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Fédération Tunisienne de Football <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Matches</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Classment">Classement</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Ticket">Tickets</a>
          <a class="dropdown-item" href="/Tshirt">T-shirt</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Equipments</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/Stade">Stades</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
    </ul>
    
  </div>
</nav>
      </header>
    
    );
   }
   export default Navbar ; 