// ** React Imports
import { Dispatch, ReactNode, SetStateAction, useEffect, useMemo } from "react";

// ** MUI Imports
import { Alert as MuiAlert, AlertProps, Fade, Typography } from "@mui/material";

// ** Icon Imports
import { Block, CheckBox, Help, Info, Warning } from "@mui/icons-material";

// ** Type Imports
import { Alert } from "@/lib/types/alert";

export type InlineAlertProps = {
  header: ReactNode;
  content: ReactNode;
  setData: Dispatch<SetStateAction<Alert>>;
} & Omit<AlertProps, "children" | "icon">;

export default function InlineAlert({
  sx,
  header,
  content,
  severity = "success",
  hidden = true,
  setData,
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

  // Lifecycles
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (!hidden) {
      // Hide alert automatically after 8 seconds
      timer = setTimeout(
        () =>
          setData({
            hidden: true,
            header: "",
            content: "",
            severity: undefined,
          }),
        8000,
      );
    }

    return () => {
      clearTimeout(timer);
    };
  }, [hidden, setData]);

  return (
    <Fade in={!hidden}>
      <MuiAlert
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
      </MuiAlert>
    </Fade>
  );
}
