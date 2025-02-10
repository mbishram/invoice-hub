// ** React Imports
import { useMemo } from "react";

// ** MUI Imports
import { alpha, Chip, Palette, PaletteColor } from "@mui/material";

// ** Type Imports
import { InvoiceStatus } from "@/lib/types/invoiceStatus";

type InvoicesListStatusProps = {
  status: InvoiceStatus | "";
};

export default function InvoicesListStatus({
  status,
}: InvoicesListStatusProps) {
  // Vars
  const label = useMemo(() => {
    switch (status) {
      case "PENDING":
        return "Pending";
      case "PAID":
        return "Paid";
      case "UNPAID":
        return "Unpaid";
      default:
        return "Unknown";
    }
  }, [status]);

  const color = useMemo(() => {
    switch (status) {
      case "PENDING":
        return "warning";
      case "PAID":
        return "success";
      case "UNPAID":
        return "error";
      default:
        return "default";
    }
  }, [status]);

  return (
    <Chip
      variant="outlined"
      label={label}
      color={color}
      sx={(theme) => ({
        bgcolor: alpha(
          (theme.palette[color as keyof Palette] as PaletteColor).main,
          0.1,
        ),
        border: "none",
        "& .MuiChip-label": { fontWeight: "500" },
      })}
    />
  );
}
