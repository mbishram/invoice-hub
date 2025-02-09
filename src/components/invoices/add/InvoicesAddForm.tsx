// ** MUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

// ** Component Imports
import LabeledTextField from "@/components/ui/LabeledTextField";

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
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button variant="contained" size="large" startIcon={<Add />}>
          Add Invoice
        </Button>
      </CardActions>
    </Card>
  );
}
