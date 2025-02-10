"use client";

// ** MUI Imports
import { Box, InputAdornment, MenuItem } from "@mui/material";

// ** Component Imports
import ToolbarTextField from "@/components/ui/ToolbarTextField";

// ** Third Party Imports
import { useQueryState } from "nuqs";
import { useDebouncedCallback } from "use-debounce";

// ** Icon Imports
import Search from "@/components/icons/Search";

// ** Constant Imports
import { INVOICE_STATUS_OPTIONS } from "@/constants/invoiceStatus.constants";

export default function InvoiceListForm() {
  // States
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [status, setStatus] = useQueryState("status", { defaultValue: "" });

  // Vars
  const handleSearch = useDebouncedCallback((value) => setSearch(value), 300);

  return (
    <Box display="flex" gap={2} alignItems="center">
      <ToolbarTextField
        defaultValue={search}
        placeholder="Search"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
        onChange={(event) => handleSearch(event.target.value)}
        sx={{ width: { md: "15rem" } }}
      />
      <ToolbarTextField
        defaultValue={status}
        placeholder="All Status"
        select
        onChange={(event) => setStatus(event.target.value)}
        sx={{ width: "10rem" }}
      >
        <MenuItem value="">All Status</MenuItem>
        {INVOICE_STATUS_OPTIONS.map(({ value, label }, index) => (
          <MenuItem key={value + index} value={value}>
            {label}
          </MenuItem>
        ))}
      </ToolbarTextField>
    </Box>
  );
}
