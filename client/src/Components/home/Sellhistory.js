import React from "react";
import "../home/sellhistory.css";
function Sellhistory() {
  return (
    <div class="body_viwe">
      <div class="card_viwe">
      <img src="chaldal_new_warehouses.png" alt="navdata" style={{width:"50%",paddingTop:"35px"}}/>
      </div>
      <div class="card_viwe">
      <div className="Sellhistory_text" style={{marginTop:"15%"}}>
          <h4 style={{color:"#fdd66f"}}>Dhaka</h4>
          <h4>Total Orders Placed</h4>
          <h4 style={{color:"#fdd66f"}}>2917252</h4>
          <h4>Total Savings</h4>
          <h4 style={{color:"#fdd66f"}}>৳247,966,420</h4>
          <h4>Time Saved</h4>
          <h4 style={{color:"#fdd66f"}}>2,187,939 hrs</h4>
      </div>
      </div>
    </div>
  );
}

export default Sellhistory;
