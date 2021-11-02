import PropTypes from 'prop-types'
import React from 'react'
import Logo from "../assets/svg/KRWLogo.inline.svg"

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <Logo/>
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hi, I'm Kyle.</h1>
        <p>
          I'm a front end developer and designer with a specialty in Liquid theming and templating on the Shopify platform. <br />I'm based in Victoria, B.C. with my wife and twin toddlers. 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
