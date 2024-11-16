import React from "react";
import CompanyTable from "../CompanyTable/CompanyTable";

const CompanyList = ({ companyDetails, companyName, filterData }) => {
  const rows = filterData.length + 1;

  return (
    <>
      {filterData.length ? (
        <CompanyTable
          rows={rows}
          companyDetails={companyDetails}
          companyName={companyName}
        />
      ) : null}

      {filterData.map((data, key) => {
        return (
          <tr key={key} className="member">
            {<td>{data.name}</td> || <td></td>}
            <td>{data.yearOfExperience}</td>
            <td>{data.position}</td>
            <td>{data.skills}</td>
          </tr>
        );
      })}
    </>
  );
};

export default CompanyList;
