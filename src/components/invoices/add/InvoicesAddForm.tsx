"use client";

// ** React Imports
import { useState } from "react";

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
import LabeledDatePicker from "@/components/ui/LabeledDatePicker";
import LabeledCurrencyField from "@/components/ui/LabeledCurrencyField";
import InlineAlert from "@/components/ui/InlineAlert";

// ** Third Party Imports
import { SubmitHandler, useForm } from "react-hook-form";
import { unformat } from "@react-input/number-format";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorMap } from "zod-validation-error";
import { useMask } from "@react-input/mask";

// ** Icon Imports
import { Add } from "@mui/icons-material";

// ** Util Imports
import { generateInvoiceNumber } from "@/utils/invoices.utils";

// ** Config Imports
import { inter } from "@/configs/font.configs";
import dbV1 from "@/lib/schemas/v1.schemas";

// ** Constant Imports
import { INVOICE_STATUS_OPTIONS } from "@/constants/invoiceStatus.constants";
import { APP_LOCALES } from "@/constants/app.constants";
import { INVOICE_NUMBER_PREFIX } from "@/constants/invoices.constants";

// ** Type Imports
import { Invoice } from "@/lib/types/invoice";
import { InvoiceStatus } from "@/lib/types/invoiceStatus";
import { Alert } from "@/lib/types/alert";

const schema = z.object({
  name: z.string().min(1),
  number: z.string().min(15),
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
  // States
  const [alertData, setAlertData] = useState<Alert>({
    hidden: true,
    header: "",
    content: "",
  });

  // Hooks
  const { control, handleSubmit, reset } = useForm<Invoice>({
    defaultValues: {
      name: "",
      number: generateInvoiceNumber(),
      dueDate: "",
      amount: "",
      status: "",
    },
    resolver: zodResolver(schema, { errorMap }),
  });
  // Invoice number format
  const numberInputRef = useMask({
    mask: INVOICE_NUMBER_PREFIX + "-______-____",
    replacement: { _: /\d/ },
  });

  // Vars
  const submitHandler: SubmitHandler<Invoice> = async (data) => {
    // Unformat amount
    data.amount = unformat(data.amount, APP_LOCALES);

    try {
      await dbV1.invoices.add(data);

      setAlertData({
        hidden: false,
        severity: "success",
        header: "Invoice added successfully!",
        content:
          "You can view and manage your invoice in the 'My Invoices' section.",
      });

      reset();
    } catch (error) {
      console.error(error);

      setAlertData({
        hidden: false,
        severity: "error",
        header: "Invoice failed to be added!",
        content: "Please try again in a couple of minutes.",
      });
    }
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
                inputRef={numberInputRef}
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <LabeledDatePicker
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

      <InlineAlert {...alertData} setData={setAlertData} sx={{ mt: 4 }} />
    </>
  );
}
