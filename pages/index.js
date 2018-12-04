export default () => (
  <div className='page'>
    <div className='content'>
      <img className='logo' src='/static/img/logo.png' alt='Tortas Margo'/>
    </div>
    <style jsx>{`
      body {
        position: relative;
      }
      .logo {
        max-width: 90vw;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}</style>
  </div>
)
