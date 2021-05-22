import React, { useEffect, useState } from "react";
import "./style.css";
import { MainService } from "./service/MainService";
import download from "./assets/download.jpg";
const mainService = new MainService();
export default function App() {
  const [allButtons, setAllButtons] = useState(null);
  const [launchSuccess, launchAllSuccess] = useState(null);
  const [landSuccess, landAllSuccess] = useState(null);
  const [product, setProduct] = useState([]);

  const years = [];
  for (let i = 2006; i <= 2021; i++) {
    years.push(i);
  }

  useEffect(() => {
    mainService
      .getAllData()
      .then((productsList) => {
        console.log(productsList, "response");
        setProduct(productsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onBtnClick = (e) => {
    console.log(e);
    setAllButtons(e);
    mainService
      .getAllData(e, launchSuccess, landSuccess)
      .then((productsList) => {
        console.log(productsList, "response");
        setProduct(productsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onBtnLaunchAllSuccess = (e) => {
    console.log(e);
    launchAllSuccess(e);
    mainService
      .getAllData(allButtons, e, landSuccess)
      .then((productsList) => {
        console.log(productsList, "response");
        setProduct(productsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onBtnLandSuccessful = (e) => {
    console.log(e);
    landAllSuccess(e);
    mainService
      .getAllData(allButtons, launchSuccess, e)
      .then((productsList) => {
        console.log(productsList, "response");
        setProduct(productsList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid conn">
      <div className="row">
        <div className="col-12">
          <h2>SpacesX Launch Programme</h2>
        </div>
      </div>
      <div className="row">
        <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="inner">
            <p className="bold">Filter</p>
            <p className="marg2">Launch Year</p>
            <div className="row">
              {years.map((year) => {
                return (
                  <div className="col-6 ">
                    <button
                      onClick={(e) => onBtnClick(year)}
                      className="btn btn-outline-primary"
                    >
                      {year}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="col12 launchYear">
              <p className="marg0">Successful Launch</p>
              <button
                onClick={(e) => onBtnLaunchAllSuccess(true)}
                className="btn btn-outline-primary"
              >
                True
              </button>
              <button
                onClick={(e) => onBtnLaunchAllSuccess(false)}
                className="btn btn-outline-primary"
              >
                False
              </button>
            </div>
            <div className="clearfix" />
            <div className="col12 launchYear">
              <p className="marg0">Successful Landing</p>
              <button
                onClick={(e) => onBtnLandSuccessful(true)}
                className="btn btn-outline-primary"
              >
                True
              </button>
              <button
                onClick={(e) => onBtnLandSuccessful(false)}
                className="btn btn-outline-primary"
              >
                False
              </button>
            </div>

            <div className="clearfix" />
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 items1">
          <div className="row">
            {product.map((product) => (
              <div
                key={product.flight_number}
                className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 marginBottom15"
              >
                <div className="inner">
                  <img
                    src={product.mission_patch}
                    className="full-width imgBg"
                    alt={product.mission_name}
                  />
                  <div className="clearfix" />
                  <p className="productName bold margBot5">
                    {product.mission_name} #{product.flight_number}
                  </p>
                  <div className="clearfix" />
                  <p className="bold margBot5">
                    Mission Ids:
                    <span className="normal blueClr">{product.mission_id}</span>
                  </p>
                  <div className="clearfix" />
                  <p className="bold margBot5">
                    Launch Year:{" "}
                    <span className="normal blueClr">
                      {product.launch_year}
                    </span>
                  </p>
                  <div className="clearfix" />
                  <p className="bold margBot5">
                    Successful Launch:{" "}
                    <span className="normal blueClr">
                    {product.launch_success ? "true" : "false"}
                      {product.launch_success}
                    </span>
                  </p>
                  <div className="clearfix" />
                  <p className="bold margBot5">
                    Successful Landing:{" "}
                    <span className="normal blueClr">
                     {product.land_success ? "true" : "false"}
          
                      {product.land_success}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
