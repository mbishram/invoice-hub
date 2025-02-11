"use client";

// ** React Imports
import { useEffect, useState } from "react";

// ** Next Imports
import { useRouter } from "next/navigation";

// ** MUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  MenuItem,
  Skeleton,
} from "@mui/material";

// ** Component Imports
import LabeledTextField from "@/components/ui/LabeledTextField";
import LabeledDatePicker from "@/components/ui/LabeledDatePicker";
import LabeledCurrencyField from "@/components/ui/LabeledCurrencyField";
import InlineAlert from "@/components/ui/InlineAlert";

// ** Third Party Imports
import { SubmitHandler, useForm } from "react-hook-form";
import { unformat, format } from "@react-input/number-format";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorMap } from "zod-validation-error";
import { useMask } from "@react-input/mask";
import { useLiveQuery } from "dexie-react-hooks";
import toast from "react-hot-toast";

// ** Icon Imports
import { Add, Edit } from "@mui/icons-material";

// ** Util Imports
import { generateInvoiceNumber } from "@/utils/invoices.utils";

// ** Schema Imports
import dbV1 from "@/lib/schemas/v1.schemas";

// ** Config Imports
import { inter } from "@/configs/font.configs";

// ** Constant Imports
import { INVOICE_STATUS_OPTIONS } from "@/constants/invoiceStatus.constants";
import { APP_LOCALES } from "@/constants/app.constants";
import { INVOICE_NUMBER_PREFIX } from "@/constants/invoices.constants";

// ** Type Imports
import { Invoice } from "@/lib/types/invoice";
import { InvoiceStatus } from "@/lib/types/invoiceStatus";
import { Alert } from "@/lib/types/alert";

type InvoicesFormProps = { id?: number };

const schema = z.object({
  name: z.string().min(1),
  number: z.string().min(13),
  dueDate: z.date(),
  amount: z.string().min(1),
  status: z.enum(
    INVOICE_STATUS_OPTIONS.map(({ value }) => value) as [
      InvoiceStatus,
      ...InvoiceStatus[],
    ],
  ),
});

export default function InvoicesForm({ id }: InvoicesFormProps) {
  // States
  const data = useLiveQuery(
    () => (id !== undefined ? dbV1.invoices.get(id) : undefined),
    [id],
    null,
  );
  const [alertData, setAlertData] = useState<Alert>({
    hidden: true,
    header: "",
    content: "",
  });

  // Hooks
  const { control, handleSubmit, reset, setValue } = useForm<Invoice>({
    defaultValues: {
      name: "",
      number: "",
      dueDate: "",
      amount: "",
      status: "",
    },
    resolver: zodResolver(schema, { errorMap }),
  });
  // Invoice number format
  const numberInputRef = useMask({
    mask: INVOICE_NUMBER_PREFIX + "__________",
    replacement: { _: /\d/ },
  });
  const router = useRouter();

  // Vars
  const isEdit = !!id;
  // If data === null, it meant it's still loading
  const isLoading = data !== null;

  const submitHandler: SubmitHandler<Invoice> = async (data) => {
    // Unformat amount
    data.amount = unformat(data.amount, APP_LOCALES);

    try {
      if (isEdit) {
        await dbV1.invoices.update(id, { ...data, updatedAt: new Date() });
      } else {
        await dbV1.invoices.add({ ...data, createdAt: new Date() });
      }

      const successMessage = `Invoice ${isEdit ? "edited" : "added"} successfully!`;
      setAlertData({
        hidden: false,
        severity: "success",
        header: successMessage,
        content:
          "You can view and manage your invoice in the 'My Invoices' section.",
      });
      // Showing toast as well, The inline alert is not as nicely implemented as toast
      toast.success(successMessage);

      if (!isEdit) {
        reset();
        setValue("number", await generateInvoiceNumber());
      }
    } catch (error) {
      console.error(error);

      const errorMessage = `Failed to ${isEdit ? "edit" : "add"} invoice!`;
      setAlertData({
        hidden: false,
        severity: "error",
        header: errorMessage,
        content: "Please try again in a couple of minutes.",
      });
      // Showing toast as well, The inline alert is not as nicely implemented as toast
      toast.success(errorMessage);
    }
  };

  // Lifecycles
  useEffect(() => {
    if (setValue && !isEdit) {
      (async () => {
        setValue("number", await generateInvoiceNumber());
      })();
    }
  }, [setValue, isEdit]);

  useEffect(() => {
    // Don't do anything while loading
    if (isLoading && isEdit) {
      if (setValue && data) {
        // Set initial value if it's edit form
        setValue("name", data.name);
        setValue("number", data.number);
        setValue("dueDate", data.dueDate);
        setValue("amount", format(data.amount, { locales: APP_LOCALES }));
        setValue("status", data.status);
      } else {
        toast.error(`Something when wrong! Can't find invoice with id ${id}`);
        router.replace("/invoices/list");
      }
    }
  }, [setValue, isEdit, data, id, router, isLoading]);

  // Return skeleton if it's edit and loading
  if (isEdit && !data)
    return <Skeleton variant="rounded" width="100%" height={440} />;

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
            startIcon={isEdit ? <Edit /> : <Add />}
          >
            {isEdit ? "Edit" : "Add"} Invoice
          </Button>
        </CardActions>
      </Card>

      <InlineAlert {...alertData} setData={setAlertData} sx={{ mt: 4 }} />
    </>
  );
}
