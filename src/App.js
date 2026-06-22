import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2 style={{ color: "#ff385c" }}>Airbnb</h2>

        <input
          type="text"
          placeholder="Search by location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
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
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          {filteredProperties.map((property) => (
            <div
              key={property._id}
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
             <button
                 style={{
                 background: "none",
                 border: "none",
                 fontSize: "24px",
                 cursor: "pointer",
                 float: "right"
                }}
              >
               ❤️
             </button>

                 <h3>{property.title}</h3>
                 <p>📍 {property.location}</p>
                <p>₹{property.price}/night</p>
                <p>⭐ {property.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;