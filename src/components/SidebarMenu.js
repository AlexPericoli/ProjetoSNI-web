import React from "react";

export function MenuTitle({ title, icon }) {
   return (
      <div className="menu-title align-items-center">
         {icon}
         <div style={{ marginLeft: "15px" }}>{title.toUpperCase()}</div>
      </div>
   );
}

export function MenuItem({ title, icon }) {
   return (
      <div className="menu-item">
         <div>{title.toUpperCase()}</div>
      </div>
   );
}
