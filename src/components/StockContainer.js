import React from "react";
import Stock from "./Stock";

function StockContainer({
  stockList,
  sendToPortfolio,
  portfolioList,
  removeFromPortfolio,
}) {
  const stockCards = stockList.map((stock) => (
    <Stock
      portfolioList={portfolioList}
      stock={stock}
      key={stock.id}
      sendToPortfolio={sendToPortfolio}
      removeFromPortfolio={removeFromPortfolio}
    />
  ));
  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
