// ** React Imports
import { useMemo } from "react";

// ** Third Party Imports
import { parseAsInteger, useQueryState } from "nuqs";
import { useLiveQuery } from "dexie-react-hooks";

// ** Schema Imports
import dbV1 from "@/lib/schemas/v1.schemas";

/**
 * Handle invoices data query
 */
export function useInvoicesData() {
  // States
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [status, setStatus] = useQueryState("status", { defaultValue: "" });
  const [rowsPerPage, setRowsPerPage] = useQueryState(
    "rowsPerPage",
    parseAsInteger.withDefault(10),
  );
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(0));

  // Hooks
  // Query for search and status filter
  const query = useMemo(
    () =>
      dbV1.invoices
        .filter((invoice) =>
          search
            ? invoice.name.toLowerCase().includes(search.toLowerCase()) ||
              invoice.number.toLowerCase().includes(search.toLowerCase())
            : true,
        )
        .filter((invoice) => (status ? invoice.status === status : true)),
    [search, status],
  );
  const data = useLiveQuery(
    () =>
      query
        .clone() // Need to clone the query. There's some wonky interaction if it isn't cloned
        .offset(page * rowsPerPage)
        .limit(rowsPerPage)
        .toArray(),
    [query, page, rowsPerPage],
  );
  const count = useLiveQuery(() => query.clone().count(), [query]); // Need to clone the query. There's some wonky interaction if it isn't cloned

  return {
    search,
    status,
    rowsPerPage,
    page,
    data,
    count,
    setSearch,
    setStatus,
    setRowsPerPage,
    setPage,
  };
}
