import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "@mui/material";

export const Restaurantscards = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [ratting, setratting] = useState(0);
  const [payment, setpayment] = useState("");

  const perPage = 5;

  const showData = (prop) => {
    setdata(prop);
  };

  async function getApiData(prop) {
    try {
      await axios(`http://localhost:3002/get-restaurants`, {
        method: "GET",
        params: {
          _page: page,
          _limit: perPage,
          rating_gte: ratting,
        },
      }).then((res) => {
        if (prop == "all") {
          showData(res.data);
        } else if (prop == "sortLow") {
          res.data.sort((a, b) => a.cost_for_two - b.cost_for_two);
          showData(res.data);
        } else if (prop == "sortHigh") {
          res.data.sort((a, b) => b.cost_for_two - a.cost_for_two);
          showData(res.data);
        }
      });
    } catch (error) {
      console.log("Error", error);
    }
  }

  const handleSort = (prop) => {
    if (prop == "low") {
      getApiData("sortLow");
    } else {
      getApiData("sortHigh");
    }
  };

  const handleRatting = (prop) => {
    setratting(prop);
  };

  const handlePaymentMethod = (prop) => {
    if (prop == "all") {
      getApiData("all");
      return;
    }
    var filtered = data.filter((elem) => {
      return elem.payment_methods == prop;
    });

    showData(filtered);
  };

  useEffect(() => {
    getApiData("all");
  }, [page, ratting]);

  return (
    <>
      <div>
        <ButtonGroup
          variant="contained"
          color="secondary"
          style={{ margin: "5px" }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSort("low");
            }}
          >
            Low To High
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSort("high");
            }}
          >
            High To Low
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup
          variant="text"
          color="error"
          style={{ margin: "5px", border: "1px solid red" }}
        >
          <Button onClick={() => handleRatting(1)}>1</Button>
          <Button onClick={() => handleRatting(2)}>2</Button>
          <Button onClick={() => handleRatting(3)}>3</Button>
          <Button onClick={() => handleRatting(4)}>4</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup variant="outlined">
          <Button onClick={() => handlePaymentMethod("cash")}>Cash</Button>
          <Button onClick={() => handlePaymentMethod("card")}>Card</Button>
          <Button onClick={() => handlePaymentMethod("both")}>Both</Button>
          <Button onClick={() => handlePaymentMethod("all")}>All</Button>
        </ButtonGroup>
      </div>
      {data.map(
        ({
          restaurant_name,
          id,
          categories,
          cost_for_two,
          minOrder,
          deliveryTime,
          payment_methods,
          rating,
          votes,
          reviews,
          image,
        }) => {
          return (
            <div key={id} style={{ border: "1px solid black" }}>
              <div
                style={{ display: "flex", flexDirection: "row", padding: 15 }}
              >
                <div style={{ flex: 1, alignSelf: "center" }}>
                  <img
                    src={image}
                    alt={restaurant_name}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div style={{ textAlign: "left", flex: 2, padding: 20 }}>
                  <h1 style={{ textAlign: "center" }}> {restaurant_name} </h1>
                  <p> {categories.join(", ")}</p>
                  <p> Cost for two: ₹{cost_for_two} </p>
                  <p>Min Order: ₹{minOrder}</p>
                  <p>Delivery Upto: {deliveryTime}</p>
                  <p>We accepts {payment_methods} for payments</p>
                </div>
                <div style={{ textAlign: "right", flex: 0.8, padding: 20 }}>
                  <div> ratting: {rating} </div>
                  <div> {votes} votes </div>
                  <div> {reviews} reviews </div>
                </div>
              </div>
              <Button variant="container" style={{ backgroundColor: "gray" }}>
                Order Online
              </Button>
            </div>
          );
        },
      )}
      <div>
        <Button
          disabled={page === 1}
          onClick={() => setpage((page) => page - 1)}
        >
          PREV
        </Button>
        {page}
        <Button
          disabled={data.length - 1 < page}
          onClick={() => setpage((page) => page + 1)}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};
