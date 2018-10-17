import React from 'react';

class Footer extends React.Component {
  render() {
    const getDate = () => new Date().getFullYear();

    return (
      <footer id="main-footer" className="text-center p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="small">
                Copyright &copy;
                <span id="year">{getDate()} </span>
                <a
                  className="twitterLink"
                  href="https://twitter.com/vidalglez27"
                >
                  <img
                    src="/img/twitter-logo.png"
                    alt="twitter-logo"
                    id="twitter-logo"
                  />{' '}
                  Web Development: Vidal Gonz&aacute;lez
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
