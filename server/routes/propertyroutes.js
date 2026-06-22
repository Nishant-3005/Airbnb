const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const properties = [
    {
      id: 1,
      title: "Beach House",
      location: "Goa",
      price: 5000
    },
    {
      id: 2,
      title: "Mountain Cabin",
      location: "Manali",
      price: 3500
    },
    {
      id: 3,
      title: "Luxury Apartment",
      location: "Mumbai",
      price: 7000
    }
  ];

  res.json(properties);
});

module.exports = router;