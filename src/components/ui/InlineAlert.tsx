// ** React Imports
import { ReactNode, useMemo } from "react";

// ** MUI Imports
import { Alert, AlertProps, Typography } from "@mui/material";

// ** Icon Imports
import { Block, CheckBox, Help, Info, Warning } from "@mui/icons-material";

type InlineAlertProps = {
  header: ReactNode;
  content: ReactNode;
} & Omit<AlertProps, "children" | "icon">;

export default function InlineAlert({
  sx,
  header,
  content,
  severity = "success",
  hidden,
  ...props
}: InlineAlertProps) {
  // Vars
  const icon = useMemo(() => {
    switch (severity) {
      case "success":
        return <CheckBox fontSize="large" />;
      case "error":
        return <Block fontSize="large" />;
      case "warning":
        return <Warning fontSize="large" />;
      case "info":
        return <Info fontSize="large" />;
      default:
        return <Help fontSize="large" />;
    }
  }, [severity]);

  if (hidden) return null;

  return (
    <Alert
      icon={icon}
      severity={severity}
      sx={{
        borderLeft: "6px solid",
        borderLeftColor: `${severity}.main`,
        py: 2,
        ...sx,
      }}
      {...props}
    >
      <Typography fontWeight={700} mb={1}>
        {header}
      </Typography>
      <Typography color="text.secondary">{content}</Typography>
    </Alert>
  );
}
