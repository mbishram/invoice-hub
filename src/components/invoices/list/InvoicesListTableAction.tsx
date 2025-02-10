// ** React Imports
import { useState, MouseEvent } from "react";

// ** MUI Imports
import { IconButton, MenuItem, Menu as MuiMenu } from "@mui/material";
import { Menu } from "@mui/icons-material";

// ** Type Imports
import { Invoice } from "@/lib/types/invoice";

export default function InvoicesListTableAction({ id }: Pick<Invoice, "id">) {
  // States
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Vars
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="invoiceButton"
        aria-controls={open ? "invoiceMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-label="Invoice action"
        onClick={handleClick}
      >
        <Menu fontSize="inherit" />
      </IconButton>
      <MuiMenu
        id="invoiceMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "invoiceButton",
        }}
      >
        <MenuItem onClick={handleClose}>Update</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            console.log("_TST", id);
          }}
          sx={{ color: "error.main" }}
        >
          Delete
        </MenuItem>
      </MuiMenu>
    </>
  );
}
