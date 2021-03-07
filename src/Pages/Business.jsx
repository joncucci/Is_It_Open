import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Business = (props) => {
  const { business } = props;
  return (
    <div
      style={{
        height: 250,
        width: "75%",
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 30,
        borderColor: "#444",
        border: "solid",
        borderWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 25
      }}
      key={business.name}
    >
      <img
        src={business.image_url}
        alt={business.name}
        align="left"
        style={{
          height: 200,
          width: 200,
          borderRadius: 20,
          objectFit: "cover"
        }}
      />
      <div style={{ marginLeft: 25, height: 200 }}>
        <a style={{ fontSize: 25 }} href={business.url}>{business.name}</a>
        <div style={{ display: "flex", flexDirection: "row", whiteSpace: "break-spaces" }}>
            <ReactStars value={business.rating} count={5} activeColor="#ffd700" size={24} />
            <p style={{ marginLeft: 10, fontSize: 20, marginTop: 4 }}>{business.rating} Stars</p>
            <p style={{ marginLeft: 20, fontSize: 20, marginTop: 4 }}>{business.miles} Miles</p>
            <p style={{ marginLeft: 20, fontSize: 20, marginTop: 4 }}>{business.capacity} Person Capacity</p>
            <p style={{ marginLeft: 20, fontSize: 20, marginTop: 4 }}>{business.price}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Icon icon={!business.open ? faTimes : faCheck} size="2x" color={!business.open ? "red" : "green"} />
            <p style={{ marginLeft: 7, paddingRight: 15, fontSize: 20, marginTop: 2 }}>Open</p>
            <Icon icon={!business.indoor ? faTimes : faCheck} size="2x" color={!business.indoor ? "red" : "green"} />
            <p style={{ marginLeft: 7, paddingRight: 15, fontSize: 20, marginTop: 2 }}>Indoor Dining</p>
            <Icon icon={!business.outdoor ? faTimes : faCheck} size="2x" color={!business.outdoor ? "red" : "green"} />
            <p style={{ marginLeft: 7, paddingRight: 15, fontSize: 20, marginTop: 2 }}>Outdoor Dining</p>
            <Icon icon={!business.delivery ? faTimes : faCheck} size="2x" color={!business.delivery ? "red" : "green"} />
            <p style={{ marginLeft: 7, paddingRight: 15, fontSize: 20, marginTop: 2 }}>Delivery</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", whiteSpace: "break-spaces" }}>
            <p style={{ marginLeft: 0, fontSize: 20, marginTop: 4 }}>{business.display_phone}</p>
            <p style={{ marginLeft: 20, fontSize: 20, marginTop: 4 }}>{typeof business.location.display_address === "string" ? business.location.display_address : business.location.display_address.join(", ")}</p>
        </div>
        <p style={{ }}>{business.description}</p>
      </div>
    </div>
  );
};

export default Business;
