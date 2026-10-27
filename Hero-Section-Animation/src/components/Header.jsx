export default function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="ITZFIZZ home">ITZ<span>FIZZ</span><i aria-hidden="true">®</i></a>
    <p className="header-note">Independent thinking.<br />Uncommon momentum.</p>
    <a className="header-link" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
  </header>;
}
