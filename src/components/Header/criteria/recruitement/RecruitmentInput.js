import React from "react";

export const RecruitmentInput = ({ recruitmentData }) => {
  return (
    <>
      <p>Existing: {recruitmentData.existing}</p>
      <p>Registrations: {recruitmentData.registrations}</p>
      <p>NewCodes: {recruitmentData.newcodes}</p>
    </>
  );
};
