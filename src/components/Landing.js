import '../styles/layout/landing/_main.scss';
import logoAwesome from '../images/awesome.svg';
import iconDesign from '../images/object-ungroup-solid.svg';
import iconKeyboard from '../images/keyboard-solid.svg';
import iconShare from '../images/share-nodes-solid.svg';
import '../styles/core/_variables.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <main className="main__container">
        <img className="main__logo" src={logoAwesome} alt="Logo" title="logo" />
        <h1 className="main__title">Create your business card</h1>
        <h2 className="main__subtitle">
          Create better professional contacts in an easy and comfortable way
        </h2>

        <div className="main__rectangle">
          <article className="main__article">
            <img
              className="main__article-image"
              src={iconDesign}
              alt="icon design"
              title="icon design"
            />
            <small className="main__article-text">Design</small>
          </article>
          <article className="main__article">
            <img
              className="main__article-image"
              src={iconKeyboard}
              alt="icon keyboard"
              title="icon keyboard"
            />
            <small className="main__article-text">Fill</small>
          </article>
          <article className="main__article">
            <img
              className="main__article-image"
              src={iconShare}
              alt="icon share"
              title="icon share"
            />
            <small className="main__article-text">Share</small>
          </article>
        </div>
        <nav className="main__link">
          <Link to="/Cards" className="main__link-cta">
            Start
          </Link>
        </nav>
      </main>
    </>
  );
}

export default App;
