import React from "react";
import Stock from "./Stock";

function PortfolioContainer({
  portfolioList,
  sendToPortfolio,
  removeFromPortfolio,
}) {
  const portfolioCards = portfolioList.map((stock) => (
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
      <h2>My Portfolio</h2>
      {portfolioCards}
    </div>
  );
}

export default PortfolioContainer;
