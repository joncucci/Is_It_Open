import React, { useState, useContext } from "react";

import { DataContext } from "../functions/provider";

const Create = () => {
  const { business, setBusiness } = useContext(DataContext);

  const [newBusiness, setNewBusiness] = useState(business);

  const handleSubmit = () => {
    let old = business;

    setBusiness({ ...business, ...newBusiness });
    alert(`Your business has been ${old.name === "" ? "Created" : "Updated"}`);
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={mainForm}>
        <div>
          <label style={formTitle}>{`${
            business.name === "" ? "Create" : "Update"
          } Your Business`}</label>
        </div>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Business Name:</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.name}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, name: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Open:</p>
          <input
            type="checkbox"
            style={{ height: 25 }}
            checked={newBusiness.open}
            onChange={() =>
              setNewBusiness({ ...newBusiness, open: !newBusiness.open })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Indoor Dining:</p>
          <input
            type="checkbox"
            style={{ height: 25 }}
            checked={newBusiness.indoor}
            onChange={() =>
              setNewBusiness({ ...newBusiness, indoor: !newBusiness.indoor })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Outdoor Dining:</p>
          <input
            type="checkbox"
            style={{ height: 25 }}
            checked={newBusiness.outdoor}
            onChange={() =>
              setNewBusiness({ ...newBusiness, outdoor: !newBusiness.outdoor })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Delivery:</p>
          <input
            type="checkbox"
            style={{ height: 25 }}
            checked={newBusiness.delivery}
            onChange={() =>
              setNewBusiness({ ...newBusiness, delivery: !newBusiness.delivery })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Capacity:</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.capacity}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, capacity: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Image URL:</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.image_url}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, image_url: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Website URL:</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.url}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, url: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Price ($-$$$):</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.price}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, price: e.target.value })
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Address:</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.location.display_address}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, location: { display_address: e.target.value }})
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p style={{ width: "33%" }}>Phone Number:</p>
          <input
            type="text"
            style={{ height: 25 }}
            value={newBusiness.display_phone}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, display_phone: e.target.value })
            }
          />
        </label>
        <div onClick={handleSubmit} style={submitDown}>
          Submit
        </div>
      </form>
    </div>
  );
};
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#eee",
};

const formTitle = {
  width: "100%",
  textAlign: "center",
  marginBottom: 10,
  fontSize: 20,
  fontWeight: "bold",
  color: "#56A0FD",
};

const mainForm = {
  width: 600,
  marginTop: 120,
  backgroundColor: "white",
  borderRadius: 30,
  border: "solid",
  borderWidth: 0.5,
  borderColor: "#444",
  padding: 30,
};

const submitDown = {
  marginTop: 10,
  backgroundColor: "#56A0FD",
  border: "none",
  color: "white",
  height: 30,
  width: 80,
  borderRadius: 10,
  marginLeft: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Create;
