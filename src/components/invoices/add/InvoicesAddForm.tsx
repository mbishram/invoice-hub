// ** MUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
        <LabeledTextField
          label="Test Label"
          name="test"
          placeholder="Enter your invoice name"
          required
        />
        <LabeledDateField
          label="Date"
          name="date"
          required
          GroupProps={{ mt: 2 }}
        />
        <LabeledCurrencyField
          label="Currency"
          name="test"
          placeholder="Enter your invoice name"
          required
          GroupProps={{ mt: 2 }}
        />
        <LabeledTextField
          label="Test Label"
          name="test"
          placeholder="Enter your invoice name"
          required
          GroupProps={{ mt: 2 }}
          select
        >
          <MenuItem value={1}>Test</MenuItem>
        </LabeledTextField>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button variant="contained" size="large" startIcon={<Add />}>
          Add Invoice
        </Button>
      </CardActions>
    </Card>
  );
}
