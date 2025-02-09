// ** MUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  MenuItem,
} from "@mui/material";

// ** Component Imports
import LabeledTextField from "@/components/ui/LabeledTextField";
import LabeledDateField from "@/components/ui/LabeledDateField";
import LabeledCurrencyField from "@/components/ui/LabeledCurrencyField";

// ** Icon Imports
import { Add } from "@mui/icons-material";

// ** Config Imports
import { inter } from "@/configs/font.configs";

// ** Constant Imports
import { INVOICE_STATUS_OPTIONS } from "@/constants/invoiceStatus.constants";

export default function InvoicesAddForm() {
  return (
    <Card>
      <CardHeader
        title="Invoice Form"
        slotProps={{
          title: {
            className: inter.className,
          },
        }}
      />

      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LabeledTextField
              label="Name"
              name="name"
              placeholder="Enter your invoice name"
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LabeledTextField
              label="Number"
              name="number"
              placeholder="Enter your invoice number"
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LabeledDateField label="Due Date" name="dueDate" required />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LabeledCurrencyField
              label="Amount"
              name="amount"
              placeholder="Enter your invoice amount"
              required
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LabeledTextField
              label="Status"
              name="status"
              placeholder="Choose the status"
              required
              select
            >
              {INVOICE_STATUS_OPTIONS.map(({ value, label }, index) => (
                <MenuItem key={value + index} value={value}>
                  {label}
                </MenuItem>
              ))}
            </LabeledTextField>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ justifyContent: "end" }}>
        <Button variant="contained" size="large" startIcon={<Add />}>
          Add Invoice
        </Button>
      </CardActions>
    </Card>
  );
}
