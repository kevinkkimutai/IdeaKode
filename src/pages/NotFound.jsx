import '../assets/notfound.module.css';

function NotFound() {
  const styles = `

  h1 {
    box-sizing: border-box;
    transform-style: preserve-3d;
    margin: 0;
    padding: 0;
    
  }
  @property --swing-x {
    initial-value: 0;
    inherits: false;
    syntax: '<integer>';
  }
  @property --swing-y {
    initial-value: 0;
    inherits: false;
    syntax: '<integer>';
  }
  broo {
    min-height: 100vh;
    display: flex;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    color: var(--color);
    perspective: 1200px;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    padding: .8rem 2rem;
    border-radius: 8px;
    font-size: 0.875rem;
    letter-spacing: 0.05rem;
  }
  p {
    font-weight: 100;
  }
  h1 {
    animation: swing var(--speed) infinite alternate ease-in-out;
    font-size: clamp(5rem, 40vmin, 20rem);
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    margin-bottom: 1rem;
    letter-spacing: 1rem;
    transform: translate3d(0, 0, 0vmin);
    --x: calc(50% + (var(--swing-x) * 0.5) * 1%);
    background: radial-gradient(var(--lit-header), var(--header) 45%) var(--x) 100%/200% 200%;
    -webkit-background-clip: text;
    color: transparent;
  
  }
  h1:after {
    animation: swing var(--speed) infinite alternate ease-in-out;
    content: "404";
    position: absolute;
    top: 0;
    left: 0;
    color: var(--shadow);
    filter: blur(1.5vmin);
    transform: scale(1.05) translate3d(0, 12%, -10vmin) translate(calc((var(--swing-x, 0) * 0.05) * 1%), calc((var(--swing-y) * 0.05) * 1%));
  }
  .cloak {
    animation: swing var(--speed) infinite alternate-reverse ease-in-out;
    height: 100%;
    width: 100%;
    transform-origin: 50% 30%;
    transform: rotate(calc(var(--swing-x) * -0.25deg));
    background: radial-gradient(40% 40% at 50% 42%, transparent, #000 35%);
  }
  .cloak__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .cloak__container {
    height: 250vmax;
    width: 250vmax;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .info {
    text-align: center;
    line-height: 1.5;
    max-width: clamp(16rem, 90vmin, 25rem);
  }
  .info > p {
    margin-bottom: 2rem;
  }
  @-moz-keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
  @-webkit-keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
  @-o-keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
  @keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  } 
  
  `
  return (
<div >
<style dangerouslySetInnerHTML={{ __html: styles }} />
     <broo>
     <h1 >404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info z-50">
        <h2 className="text-white text-3xl font-bold" >We can&apos;t find that page</h2>
        <p className="text-md">We&apos;re fairly sure that page used to be here, but seems to have gone missing. We do apologize on its behalf.</p>
        <a href="/dashboard" className="bg-blue-600 font-semibold" rel="noopener noreferrer">Home</a>
      </div>
     </broo>
    </div>
  )
}

export default NotFound