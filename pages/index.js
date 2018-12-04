import React from 'react'

export default class Index extends React.Component {
  render () {
    return (
      <div id='wrapper'>
        <Nav />
        <Main />
        <Footer />
      </div>
    )
  }
}

function Nav () {
  return (
    <nav id='nav'>
      <a href='#' className='icon fa-home'>
        <span>Inicio</span>
      </a>
      <a href='#work' className='icon fa-th'>
        <span>Productos</span>
      </a>
      <a href='#contact' className='icon fa-envelope'>
        <span>Contacto</span>
      </a>
      <a href='https://www.facebook.com/tortasmargo' className='icon fa-facebook' target='_blank' rel='noopener noreferrer'>
        <span>Facebook</span>
      </a>
    </nav>
  )
}

function Main () {
  return (
    <div id='main'>
      <Me />
      <Work />
      <Contact />
    </div>
  )
}

function Me () {
  return (
    <article id='home' className='panel intro'>
      <header>
        <h1>Tortas Margo</h1>
        <p>Tortas ricas y accesibles. A domicilio.</p>
        <ul>
          <li><em>Email:</em> <a href='mailto:info@tortasmargo.com'>info@tortasmargo.com</a></li>
          <li><em>Teléfono:</em> <a href='tel:+5491140954928'>(11) 4095-4928</a></li>
          <li><em>WhatsApp:</em> <a href='https://wa.me/+5491140954928'>+5491140954928</a></li>
        </ul>
      </header>
      <a href='#work' className='jumplink pic'>
        <span className='arrow icon fa-chevron-right'><span>See my work</span></span>
        <img className='pic-bg' src='/static/images/me2.jpg' alt='' />
        <img className='pic-fg' src='/static/images/noun_Cake_1103521_gray.svg' alt='' />
      </a>
    </article>
  )
}

function Work () {
  return (
    <article id='work' className='panel'>
      <header>
        <h2>Productos y Servicios</h2>
      </header>
      <p>Realizamos deliciosas tortas por encargo con envío a domicilio. Consulte también por otros productos dulces y salados.</p>
      <section>
        <div className='row'>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/domingo.png' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/happening.jpg' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/mariana.png' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/anioslocos.jpg' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/barbara.jpg' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/claudia.png' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/caprichosa.png' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/cheesecake.jpg' alt='' /></a>
          </div>
          <div className='col-4 col-6-medium col-12-small'>
            <a href='#' className='image fit'><img src='/static/images/tortas/dara.jpg' alt='' /></a>
          </div>
        </div>
      </section>
    </article>
  )
}

function Contact () {
  return (
    <article id='contact' className='panel'>
      <header>
        <h2>Contáctenos</h2>
        <p>Deje un mensaje con su consulta y nos contáctaremos con usted a la brevedad.</p>
      </header>
      <form action='https://formspree.io/info@tortasmargo.com' method='POST'>
        <input type='hidden' name='_language' value='es' />
        <input type='hidden' name='_next' value='/#' />
        <div>
          <div className='row'>
            <div className='col-6 col-12-medium'>
              <input type='text' name='nombre' placeholder='Nombre' />
            </div>
            <div className='col-6 col-12-medium'>
              <input type='email' name='email' placeholder='Email' />
            </div>
            <div className='col-12'>
              <input type='text' name='asunto' placeholder='Asunto' />
            </div>
            <div className='col-12'>
              <textarea name='mensaje' placeholder='Mensaje' rows='6'></textarea>
            </div>
            <div className='col-12'>
              <input type='submit' value='Enviar Mensaje' />
            </div>
          </div>
        </div>
      </form>
    </article>
  )
}

function Footer () {
  return (
    <div id='footer'>
      <ul className='copyright'>
        <li>&copy; Tortas Margo.</li><li>Diseño: HTML5 UP</li><li>Logo: Cake by SBTS from the Noun Project</li>
      </ul>
    </div>
  )
}
