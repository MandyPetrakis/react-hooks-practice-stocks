import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStockList(data));
  }, []);

  function sendToPortfolio(stock) {
    if (portfolioList.includes(stock)) {
      return null;
    } else setPortfolioList([...portfolioList, stock]);
  }
  function removeFromPortfolio(deletedStock) {
    const updatedList = portfolioList.filter((stock) => {
      if (stock.id === deletedStock.id) {
        return null;
      } else return stock;
    });
    setPortfolioList(updatedList);
  }

  function alpha() {
    const alphaList = [...stockList];
    alphaList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setStockList(alphaList);
  }

  function price() {
    const priceList = [...stockList];
    priceList.sort((a, b) => (a.price > b.price ? 1 : -1));
    setStockList(priceList);
  }

  function filterFun(value) {
    const filteredList = stockList.filter((stock) => stock.type === value);
    setStockList(filteredList);
  }

  return (
    <div>
      <SearchBar alpha={alpha} price={price} filterFun={filterFun} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            portfolioList={portfolioList}
            stockList={stockList}
            sendToPortfolio={sendToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            removeFromPortfolio={removeFromPortfolio}
            portfolioList={portfolioList}
            sendToPortfolio={sendToPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
