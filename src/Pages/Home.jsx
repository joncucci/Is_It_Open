import React, { useContext } from "react";

import Business from "./Business";
import Filter from "./Filter";
import { DataContext } from "../functions/provider";

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <div style={{ marginTop: 80, display: "flex", flexDirection: "row" }}>
      <Filter />
      <div style={{ marginLeft: 360, flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data === [] ? (
            <h2>Loading...</h2>
          ) : (
            data.map((business) => <Business business={business} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
