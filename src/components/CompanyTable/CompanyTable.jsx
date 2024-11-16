import React from "react";

const CompanyTable = ({companyDetails,companyName,rows}) => {
  return (
    <>
      <tr className="companyTable">
        <td rowSpan={rows}>{companyName}</td>
        <td rowSpan={rows}>{companyDetails.projectName}</td>
        <td rowSpan={rows}>
          project duration is {companyDetails.projectDuration}
        </td>
      </tr>
    </>
  );
};

export default CompanyTable;
