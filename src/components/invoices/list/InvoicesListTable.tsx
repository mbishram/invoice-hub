"use client";

// ** React Imports
import { ChangeEvent, MouseEvent } from "react";

// ** MUI Imports
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

// ** Component Imports
import InvoicesListStatus from "@/components/invoices/list/InvoicesListStatus";
import InvoicesListTableAction from "@/components/invoices/list/InvoicesListTableAction";

// ** Third Party Imports
import { format } from "date-fns";

// ** Hook Imports
import { useInvoicesData } from "@/hooks/useInvoicesData";

// ** Util Imports
import { formatCurrency } from "@/utils/ui.utils";

export default function InvoicesListTable() {
  // States
  const { rowsPerPage, page, data, count, setRowsPerPage, setPage } =
    useInvoicesData();

  // Vars
  const handleChangePage = async (
    _: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    await setPage(newPage);
  };

  const handleChangeRowsPerPage = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    await setRowsPerPage(parseInt(event.target.value, 10));
    await setPage(0);
  };

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          {count && data && data.length ? (
            <>
              <TableBody>
                {data.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>
                      <Typography>{invoice.name}</Typography>
                      <Typography color="text.secondary" fontWeight="600">
                        {invoice.number}
                      </Typography>
                    </TableCell>
                    <TableCell>{format(invoice.dueDate, "PP")}</TableCell>
                    <TableCell>
                      <InvoicesListStatus status={invoice.status} />
                    </TableCell>
                    <TableCell>
                      {formatCurrency(Number(invoice.amount))}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <InvoicesListTableAction data={invoice} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={count}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    slotProps={{
                      select: {
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                      },
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                  There&apos;s no data to show! Add one on &apos;Add
                  Invoice&apos; page
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </CardContent>
    </Card>
  );
}
