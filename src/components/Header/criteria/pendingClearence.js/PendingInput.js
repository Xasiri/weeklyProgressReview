import React from "react";

const PendingInput = ({ pendingData }) => {
  return (
    <>
      <p>Proposals: {pendingData.proposals}</p>
      <p>Suspense: {pendingData.suspense}</p>

      <p>Renewals: {pendingData.renewals}</p>
      <p>Revivals: {pendingData.revivals}</p>
    </>
  );
};

export default PendingInput;
