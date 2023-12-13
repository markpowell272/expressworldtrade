import React from "react";
import "../css/General.css";

const Analysis = () => {
  return (
    <div className="general-container">
      <div className="body">
        <div>
          <iframe
            id="tradingview_0ceb8"
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_0ceb8&amp;symbol=BITSTAMP%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=dark&amp;style=3&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=portalworld.tradeints.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BITSTAMP%3ABTCUSD#%7B%22page-uri%22%3A%22portalworld.tradeints.com%2F%22%7D"
            style={{ width: "100%", height: "500px" }}
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="d-lg-flex align-items-center mt-3">
          <div className="bg-dark" style={{ flex: 1, width: "100%" }}>
            <h4 className="text-center text-light m-0 p-3">LATEST DEPOSITS</h4>
            <table className="table border col">
              <tr>
                <td>William James</td>
                <td></td>
                <td>$ 7,100.00</td>
              </tr>
              <tr>
                <td>Larry Ward</td>
                <td></td>
                <td>$ 11,050.00</td>
              </tr>
              <tr>
                <td>Oscar Clarke</td>
                <td></td>
                <td>$ 21,600.00</td>
              </tr>
              <tr>
                <td>Jedediah Collins</td>
                <td></td>
                <td>$ 9,800.00</td>
              </tr>
              <tr>
                <td>Austyn Emard</td>
                <td></td>
                <td>$ 15,250.00</td>
              </tr>
              <tr>
                <td>Maron Jane</td>
                <td></td>
                <td>$ 3,700.00</td>
              </tr>
              <tr>
                <td>Finn</td>
                <td></td>
                <td>$ 17,810.00</td>
              </tr>
            </table>
          </div>
          <div className="m-3"></div>
          <div className="bg-dark" style={{ flex: 1, width: "100%" }}>
            <h4 className="text-center text-light m-0 p-3">
              LATEST WITHDRAWALS
            </h4>
            <table className="table border col">
              <tr>
                <td>Motalo</td>
                <td></td>
                <td>$ 27,100.00</td>
              </tr>
              <tr>
                <td>Miracle</td>
                <td></td>
                <td>$ 91,050.00</td>
              </tr>
              <tr>
                <td>Olufunmi Miracle</td>
                <td></td>
                <td>$ 51,600.00</td>
              </tr>
              <tr>
                <td>Festus</td>
                <td></td>
                <td>$ 87,800.00</td>
              </tr>
              <tr>
                <td>Thiago Mina</td>
                <td></td>
                <td>$ 75,300.00</td>
              </tr>
              <tr>
                <td>Sharon A.</td>
                <td></td>
                <td>$ 35,000.00</td>
              </tr>
              <tr>
                <td>Finn</td>
                <td></td>
                <td>$ 47,550.00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
