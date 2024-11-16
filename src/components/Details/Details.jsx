import React, { useState } from "react";
import { data } from "../../assets/data";
import CompanyList from "../CompanyList/CompanyList";

const Details = ({
  optionValue,
  testerChecked,
  designerChecked,
  developerChecked,
}) => {
  const [mainData, setMainData] = useState(data);

  // testerChecked && designerChecked ? a.position.toLowerCase() !== "tester and designer" : true

  /*
     Filter Data: 

     optionvalue true : filter yearOfExperience == optionValue
     optionvalue false : filter yearofExperience >=0, All data are show
    
    */

  const filterNokiaData = data.nokia.members.filter((a) => {
    return (
      (optionValue
        ? a.yearOfExperience == optionValue
        : a.yearOfExperience >= optionValue) &&
      (!testerChecked ? a.position !== "tester" : true) &&
      (!designerChecked ? a.position !== "designer" : true) &&
      (testerChecked || designerChecked
        ? true
        : a.position !== "tester and designer") &&
      (!developerChecked
        ? a.position.toLowerCase() !== "front-end developer" &&
          a.position.toLowerCase() !== "back-end developer" &&
          a.position.toLowerCase() !== "junior developer" &&
          a.position.toLowerCase() !== "developer"
        : true)
    );
  });

  const filterMicrosoftData = data.microsoft.members.filter(
    (a) =>
      (optionValue
        ? a.yearOfExperience == optionValue
        : a.yearOfExperience >= optionValue) &&
      (!testerChecked ? a.position !== "tester" : true) &&
      (!designerChecked ? a.position !== "designer" : true) &&
      (!developerChecked
        ? a.position.toLowerCase() !== "front-end developer" &&
          a.position.toLowerCase() !== "back-end developer" &&
          a.position.toLowerCase() !== "junior developer" &&
          a.position.toLowerCase() !== "developer"
        : true) &&
      (testerChecked || designerChecked
        ? true
        : a.position !== "tester and designer")
  );

  const filterAppleData = data.apple.members.filter(
    (a) =>
      (optionValue
        ? a.yearOfExperience == optionValue
        : a.yearOfExperience >= optionValue) &&
      (!testerChecked ? a.position !== "tester" : true) &&
      (!designerChecked ? a.position !== "designer" : true) &&
      (!developerChecked
        ? a.position.toLowerCase() !== "front-end developer" &&
          a.position.toLowerCase() !== "back-end developer" &&
          a.position.toLowerCase() !== "junior developer" &&
          a.position.toLowerCase() !== "developer"
        : true) &&
      (testerChecked || designerChecked
        ? true
        : a.position !== "tester and designer")
  );

  return (
    <div className="Details">
      <table border={1} cellPadding={10} cellSpacing={0}>
        {developerChecked || testerChecked || designerChecked ? (
          <thead>
            <tr>
              <th rowSpan={2}>Company Name</th>
              <th rowSpan={2}>Project</th>
              <th rowSpan={2}>Project Details</th>
              <th colSpan={4}>Members</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Experience</th>
              <th>Position</th>
              <th>Skills</th>
            </tr>
          </thead>
        ) : (
          <div>
            <h3 style={{ padding: "30px" }}>Searching the data not here...</h3>
          </div>
        )}
        <tbody>
          <CompanyList
            companyDetails={mainData.nokia}
            companyName={"nokia"}
            filterData={filterNokiaData}
          />
          <CompanyList
            companyDetails={mainData.microsoft}
            companyName={"microsoft"}
            filterData={filterMicrosoftData}
          />
          <CompanyList
            companyDetails={mainData.apple}
            companyName={"apple"}
            filterData={filterAppleData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Details;
