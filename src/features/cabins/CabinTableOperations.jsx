import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", lable: "All" },
          { value: "no-discount", lable: "No discount" },
          { value: "with-discount", lable: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-dsc", lable: "Sort By Name (A-Z)" },
          { value: "name-asc", lable: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", lable: "Sort By Price (Low First)" },
          { value: "regularPrice-desc", lable: "Sort By Price (High First)" },
          { value: "maxCapacity-asc", lable: "Sort By Capacity (Low Cap)" },
          { value: "maxCapacity-desc", lable: "Sort By Capacity (High Cap)" },
        ]}
      />
    </TableOperations>
  );
}
