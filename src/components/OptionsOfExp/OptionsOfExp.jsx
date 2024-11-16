import React from "react";
import { data } from "../../assets/data";

const OptionsOfExp = ({setOptionValue}) => {

  const nokiaExp =  data.nokia.members.map(a => a.yearOfExperience)
  const microsoftExp =  data.microsoft.members.map(a => a.yearOfExperience)
  const appleExp =  data.apple.members.map(a => a.yearOfExperience)

  const exp =[...nokiaExp,...microsoftExp,...appleExp].sort((a,b)=> a-b);

  const removeDuplicate = new Set(exp)
  const expValue = [...removeDuplicate];  

  return (
    <div className="checkExp">
      <label htmlFor="experience">Year of Experience</label>
      <select name="experience" id="experience" onChange={e => setOptionValue(e.target.value)
      }>
        <option value="">All</option>
        
        {
          expValue.map( (exp,key) => <option value={exp} key={key}>{exp}</option> )
        }

      </select>
    </div>
  );
};

export default OptionsOfExp;
