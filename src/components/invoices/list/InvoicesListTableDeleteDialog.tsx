// ** React Imports
import { Dispatch, SetStateAction } from "react";

// ** MUI Imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";

// ** Third Party Imports
import toast from "react-hot-toast";

// ** Schema Imports
import dbV1 from "@/lib/schemas/v1.schemas";

// ** Type Imports
import { Invoice } from "@/lib/types/invoice";

type InvoiceListTableDeleteModalProps = Omit<DialogProps, "children"> & {
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Invoice;
};

export default function InvoicesListTableDeleteDialog({
  data,
  setOpen,
  ...props
}: InvoiceListTableDeleteModalProps) {
  // Vars
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await dbV1.invoices.update(data.id, { discardedAt: new Date() });
      // Using toast instead of InlineAlert for convenience
      toast.success("Invoice deleted successfully!");
    } catch (error) {
      console.error(error);
      // Using toast instead of InlineAlert for convenience
      toast.error("Failed to delete invoice!");
    } finally {
      handleClose();
    }
  };

  return (
    <Dialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={handleClose}
      {...props}
    >
      <DialogTitle id="alert-dialog-title">
        Delete invoice number {data.number}?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete invoice number{" "}
          <strong>&quot;{data.number}&quot;</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
