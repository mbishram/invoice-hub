"use client";

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
import InlineAlert from "@/components/ui/InlineAlert";

// ** Third Party Imports
import { SubmitHandler, useForm } from "react-hook-form";
import { unformat } from "@react-input/number-format";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorMap } from "zod-validation-error";

// ** Icon Imports
import { Add } from "@mui/icons-material";

// ** Config Imports
import { inter } from "@/configs/font.configs";

// ** Constant Imports
import { INVOICE_STATUS_OPTIONS } from "@/constants/invoiceStatus.constants";
import { APP_LOCALES } from "@/constants/app.constants";

// ** Type Imports
import { Invoice } from "@/lib/types/invoice";
import { InvoiceStatus } from "@/lib/types/invoiceStatus";

const schema = z.object({
  name: z.string().min(1),
  number: z.string().min(1),
  dueDate: z.date(),
  amount: z.string().min(1),
  status: z.enum(
    INVOICE_STATUS_OPTIONS.map(({ value }) => value) as [
      InvoiceStatus,
      ...InvoiceStatus[],
    ],
  ),
});

export default function InvoicesAddForm() {
  // Hooks
  const { control, handleSubmit } = useForm<Invoice>({
    defaultValues: {
      name: "",
      number: "",
      dueDate: "",
      amount: "",
      status: "",
    },
    resolver: zodResolver(schema, { errorMap }),
  });

  // Vars
  const submitHandler: SubmitHandler<Invoice> = (data) => {
    data.amount = unformat(data.amount, APP_LOCALES);

    console.log("_TST", data);
  };

  return (
    <>
      <Card component="form" onSubmit={handleSubmit(submitHandler)}>
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
                control={control}
                label="Name"
                name="name"
                placeholder="Enter your invoice name"
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <LabeledTextField
                control={control}
                label="Number"
                name="number"
                placeholder="Enter your invoice number"
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <LabeledDateField
                control={control}
                label="Due Date"
                name="dueDate"
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <LabeledCurrencyField
                control={control}
                label="Amount"
                name="amount"
                placeholder="Enter your invoice amount"
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <LabeledTextField
                control={control}
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<Add />}
          >
            Add Invoice
          </Button>
        </CardActions>
      </Card>

      <InlineAlert
        hidden={false}
        severity="success"
        header="Invoice added successfully!"
        content="You can view and manage your invoice in the &#39;My Invoices&#39; section."
        sx={{ mt: 4 }}
      />
    </>
  );
}
