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
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-dsc", label: "Sort By Name (A-Z)" },
          { value: "name-asc", label: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (Low First)" },
          { value: "regularPrice-desc", label: "Sort By Price (High First)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity (Low Cap)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity (High Cap)" },
        ]}
      />
    </TableOperations>
  );
}
