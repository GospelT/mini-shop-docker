const express = require("express");
const axios = require("axios");

const app = express();

const USER_SERVICE = "http://localhost:8001";
const PRODUCT_SERVICE = "http://localhost:8002";

app.get("/dashboard", async (req, res) => {
  try {
    const users = await axios.get(`${USER_SERVICE}/users`);
    const products = await axios.get(`${PRODUCT_SERVICE}/products`);

    res.json({
      users: users.data,
      products: products.data
    });
  } catch (err) {
    res.status(500).json({ error: "Service unavailable" });
  }
});

app.listen(8000, () => {
  console.log("Gateway running on port 8000");
});