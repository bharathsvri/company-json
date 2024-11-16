import React from "react";

const CheckRole = ({developerChecked,testerChecked,designerChecked,setDeveloperChecked,setTesterChecked,setDesignerChecked}) => {
  return (
    <div className="checkRole">
      <section className="developer">
        <input type="checkbox" name="developer" id="developer" checked={developerChecked} onChange={()=> setDeveloperChecked(bool => bool ? setDeveloperChecked(false) : setDeveloperChecked(true)) } />
        <label htmlFor="developer">Developer</label>
      </section>
      <section className="tester">
        <input type="checkbox" name="tester" id="tester" checked={testerChecked} onChange={()=> setTesterChecked(bool => bool ? setTesterChecked(false) : setTesterChecked(true)) }/>
        <label htmlFor="tester">Tester</label>
      </section>
      <section className="designer">
        <input type="checkbox" name="designer" id="designer" checked={designerChecked} onChange={()=> setDesignerChecked(bool => bool ? setDesignerChecked(false) : setDesignerChecked(true)) } />
        <label htmlFor="designer">Designer</label>
      </section>
    </div>
  );
};

export default CheckRole;
