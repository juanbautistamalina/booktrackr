// Web Component Nativo
class BookTrackrAvatar extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de HTMLElement (todos los elementos html heredan de esa clase)
    this.attachShadow({ mode: 'open' }) // crear un shadow DOM para encapsular estilos y estructura
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`
  }

  render() {
    const service = this.getAttribute('service') ?? 'github'
    const username = this.getAttribute('username') ?? 'juanbautistamalina'
    const size = this.getAttribute('size') ?? '45'

    const url = this.createUrl(service, username)

    this.shadowRoot.innerHTML = `
    <style>
      img {
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: flex;
      }
    </style>

      <img 
        src="${url}" 
        alt="Avatar de ${username}" 
        class="avatar"
      />
    `
  }

  // este método se ejecuta cuando el componente se agrega al DOM
  connectedCallback() {
    this.render()
  }
}

// Registrar el componente: define("nombre-etiqueta", ClaseDelComponente)
customElements.define('booktrackr-avatar', BookTrackrAvatar)