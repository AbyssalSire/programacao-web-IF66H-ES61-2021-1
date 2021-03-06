class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="../paginas/index.html">Página inicial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contato" >Contato</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="../paginas/login.html" >Login</a>
          </li>
        </ul>
      </nav>
        </header>`;

    }

}
customElements.define('header-component', Header);
