import React from "react";

export default function Chart() {
  return (
    <div className="bg-white shadow-sm rounde-sm p-7">
      {/* head */}
      <div className="flex items-center justify-between">
        <span>Orders Over Time</span>
        <select name="update" id="update">
          <option value="Last 12 Hours" defaultValue="Last 12 Hours">
            Last 12 Hours
          </option>
          <option value="last 1 days" defaultValue="Last 12 Hours">
            Last 1 days
          </option>
          <option value="last 1 week" defaultValue="Last 12 Hours">
            Last 1 Week
          </option>
          <option value="last 1 month" defaultValue="Last 12 Hours">
            Last 1 month
          </option>
        </select>
      </div>
    </div>
  );
}
