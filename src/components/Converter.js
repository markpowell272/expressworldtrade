import React from "react";
import "../css/General.css";
import CountUp from "react-countup";

const Converter = () => {
  return (
    <div className="general-container">
      <div className="body">
        <div className="d-lg-flex align-items-center mb-5">
          <div style={{ flex: 1 }} className="text-center">
            <h1>Currency Convertor</h1>
            <p>
              Inform your decisions with timely dispatches from our teams of
              global analysts
            </p>
            <crypto-converter-widget
              shadow
              symbol
              live
              background-color="#383a59"
              border-radius="0.60rem"
              fiat="united-states-dollar"
              crypto="bitcoin"
              amount="1"
              decimal-places="2"
            ></crypto-converter-widget>
          </div>
          <div className="m-3"></div>
          <div style={{ flex: 1 }}>
            <iframe
              scrolling="no"
              allowtransparency="true"
              frameborder="0"
              src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22width%22%3A350%2C%22height%22%3A400%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22US%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU40%22%2C%22d%22%3A%22DAX%20Index%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22d%22%3A%22UK%20100%22%7D%5D%2C%22originalTitle%22%3A%22Indices%22%7D%2C%7B%22title%22%3A%22Futures%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%5D%2C%22originalTitle%22%3A%22Futures%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME%3AGE1!%22%2C%22d%22%3A%22Eurodollar%22%7D%2C%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%2C%22d%22%3A%22EUR%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%2C%22d%22%3A%22GBP%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%2C%22d%22%3A%22USD%2FJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%2C%22d%22%3A%22USD%2FCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%2C%22d%22%3A%22AUD%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%2C%22d%22%3A%22USD%2FCAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%22portalworld.tradeints.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22portalworld.tradeints.com%2F%22%7D"
              style={{
                width: "100%",
                height: "500px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
      <div id="statistics">
        <h1 className="text-center mt-5 mb-4">Statistics in Numbers</h1>
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="text-center" style={{ flex: 1 }}>
            <h1>
              <CountUp end={82} duration={5} />
            </h1>
            <h3>Countries</h3>
          </div>
          <div className="text-center" style={{ flex: 1 }}>
            <h1>
              <CountUp end={388} duration={5} />+
            </h1>
            <h3>Countries</h3>
          </div>
          <div className="text-center" style={{ flex: 1 }}>
            <h1>
              <CountUp end={1000} duration={5} />+
            </h1>
            <h3>Countries</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
