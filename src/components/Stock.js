import React from "react";

function Stock({ stock, sendToPortfolio, portfolioList, removeFromPortfolio }) {
  function handleClick(stock) {
    if (portfolioList.includes(stock)) {
      removeFromPortfolio(stock);
    } else sendToPortfolio(stock);
  }

  return (
    <div>
      <div className="card" onClick={() => handleClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">
            {stock.ticker}: {stock.price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
