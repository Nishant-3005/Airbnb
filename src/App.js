function App() {
  const properties = [
    {
      title: "Beach House",
      location: "Goa",
      price: "₹5000/night"
    },
    {
      title: "Mountain Cabin",
      location: "Manali",
      price: "₹3500/night"
    },
    {
      title: "Luxury Apartment",
      location: "Mumbai",
      price: "₹7000/night"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏠 BNB Clone</h1>

      {properties.map((property, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px"
          }}
        >
          <h2>{property.title}</h2>
          <p>{property.location}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;