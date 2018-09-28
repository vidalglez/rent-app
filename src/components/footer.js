import React from 'react';

class Footer extends React.Component {
  render() {
    const getDate = () => new Date().getFullYear();

    return (
      <footer id="main-footer" className="text-center p-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                Copyright &copy;
                <span id="year">{getDate()} </span>
                Vidal Gonz&aacute;lez
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
