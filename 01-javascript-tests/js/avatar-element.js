// Web Component Nativo
class BookTrackrAvatar extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de HTMLElement
    this.attachShadow({ mode: 'open' })
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

  connectedCallback() {
    this.render()
  }
}

customElements.define('booktrackr-avatar', BookTrackrAvatar)