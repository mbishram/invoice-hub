// ** MUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

// ** Icon Imports
import { Add } from "@mui/icons-material";

// ** Config Imports
import { inter } from "@/configs/font.configs";

export default function InvoicesAddForm() {
  return (
    <Card>
      <CardHeader
        title="Tewt Title"
        slotProps={{
          title: {
            className: inter.className,
          },
        }}
      />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque
        fugiat magnam minus quidem ratione, sint. Accusamus illum, in ipsa
        laudantium minima nisi odit pariatur quos repellat repellendus
        repudiandae, sed?
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button variant="contained" size="large" startIcon={<Add />}>
          Add Invoice
        </Button>
      </CardActions>
    </Card>
  );
}
