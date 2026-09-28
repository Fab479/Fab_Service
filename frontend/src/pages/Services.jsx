import { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load services.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading services...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main className="services-page">
      <h1>Our Services</h1>

      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h2>{service.name}</h2>

            <p>₦{service.price.toLocaleString()}</p>

            <button className="service">Request Service</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Services;