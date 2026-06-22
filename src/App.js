import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/properties")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏠 Airbnb Clone (MERN)</h1>

      {properties.map((property) => (
        <div
          key={property.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h2>{property.title}</h2>
          <p>📍 {property.location}</p>
          <p>₹{property.price}/night</p>
        </div>
      ))}
    </div>
  );
}

export default App;