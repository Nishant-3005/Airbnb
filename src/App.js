import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: "1px solid #ddd",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ color: "#ff385c" }}>Airbnb</h2>

        <input
          type="text"
          placeholder="Search destinations"
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "20px",
            border: "1px solid gray",
          }}
        />

        <button
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#ff385c",
            color: "white",
          }}
        >
          Login
        </button>
      </nav>

      <div style={{ padding: "20px" }}>
        <h1>Find your next stay</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
                alt="property"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{property.title}</h3>
                <p>📍 {property.location}</p>
                <p>₹{property.price}/night</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;