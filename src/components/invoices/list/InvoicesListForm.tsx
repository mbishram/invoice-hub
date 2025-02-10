"use client";

// ** MUI Imports
import { Box, InputAdornment, MenuItem } from "@mui/material";

// ** Component Imports
import ToolbarTextField from "@/components/ui/ToolbarTextField";

// ** Third Party Imports
import { useDebouncedCallback } from "use-debounce";

// ** Hook Imports
import { useInvoicesData } from "@/hooks/useInvoicesData";

// ** Icon Imports
import Search from "@/components/icons/Search";

// ** Constant Imports
import { INVOICE_STATUS_OPTIONS } from "@/constants/invoiceStatus.constants";

export default function InvoicesListForm() {
  // States
  const { search, status, setSearch, setStatus, setPage } = useInvoicesData();

  // Vars
  const handleSearch = useDebouncedCallback(async (value) => {
    await setSearch(value);
    await setPage(0);
  }, 300);

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
        value={status}
        placeholder="All Status"
        select
        onChange={async (event) => {
          await setStatus(event.target.value);
          await setPage(0);
        }}
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
