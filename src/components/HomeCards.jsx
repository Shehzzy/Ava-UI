import React from "react";

function HomeCards({ img, CardHeading, CardPara }) {
  return (
    <>
      <div className="cardd">
        <img src={img} />
        <h4 className="mt-2">{CardHeading}</h4>
        <p className="text-start p-2">{CardPara}</p>
      </div>
    </>
  );
}

export default HomeCards;
