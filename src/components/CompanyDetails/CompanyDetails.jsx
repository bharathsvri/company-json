import React, { useState } from 'react'
import OptionsOfExp from '../OptionsOfExp/OptionsOfExp'
import CheckRole from '../CheckRole/CheckRole'
import Details from '../Details/Details'

const CompanyDetails = () => {

  const [developerChecked,setDeveloperChecked] = useState(true);
  const [testerChecked,setTesterChecked] = useState(true);
  const [designerChecked,setDesignerChecked] = useState(true);

  const [optionValue,setOptionValue] = useState(0);


  return (
    <div className="CompanyDetails">
        <h2>Company Detail JSON</h2>
        <CheckRole 
          developerChecked={developerChecked}
          testerChecked={testerChecked}
          designerChecked={designerChecked}
          setDeveloperChecked={setDeveloperChecked}
          setTesterChecked={setTesterChecked}
          setDesignerChecked={setDesignerChecked}
        />
        <OptionsOfExp optionValue={optionValue} setOptionValue={setOptionValue} />
        <Details optionValue={optionValue} testerChecked={testerChecked} designerChecked={designerChecked} developerChecked={developerChecked} />
    </div>
  )
}

export default CompanyDetails