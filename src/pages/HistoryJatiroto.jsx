import React, { useMemo, useState } from 'react';
import { Logobar, Navbar, Sidebar } from "../components";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query'; //note: this is TanStack React Query V5

const Example = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const defaultURL = 'http://localhost:3000/hydra';
  const {
    data: { data = [], meta } = { data: [], meta: { url: defaultURL } }, // your data and api response will probably be different
    isError,
    isRefetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      'table-data',
      columnFilters,
      globalFilter,
      pagination.pageIndex,
      pagination.pageSize,
      sorting,
    ],
    queryFn: async () => {
      const fetchURL = new URL('/api/data', 'https://www.material-react-table.com'); // Updated URL

      fetchURL.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`);
      fetchURL.searchParams.set('size', `${pagination.pageSize}`);
      fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
      fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

      const response = await fetch(fetchURL.href);
      const json = await response.json();
      return json;
    },
    placeholderData: keepPreviousData,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'temperature',
        header: 'Temperature',
      },
      {
        accessorKey: 'humidity',
        header: 'Humidity',
      },
      {
        accessorKey: 'NO2',
        header: 'NO2',
      },
      {
        accessorKey: 'PM10',
        header: 'PM10',
      },
      {
        accessorKey: 'PM2_5',
        header: 'PM2.5',
      },
      {
        accessorFn: (row) => new Date(row.time),
        id: 'time',
        header: 'Time',
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleString(),
        filterFn: 'greaterThan',
        filterVariant: 'date',
        enableGlobalFilter: false,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { showColumnFilters: true },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    muiToolbarAlertBannerProps: isError
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    renderTopToolbarCustomActions: () => (
      <Tooltip arrow title="Refresh Data">
        <IconButton onClick={() => refetch()}>
          <RefreshIcon />
        </IconButton>
      </Tooltip>
    ),
    rowCount: meta?.totalRowCount ?? 0,
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      sorting,
    },
  });

  return <MaterialReactTable table={table} />;
};

const queryClient = new QueryClient();

const ExampleWithReactQueryProvider = () => (
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

const HistoryJatiroto = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Logobar />
        </div>
        <div className="row-span-11">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-4 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Navbar />
        </div>
        <div className="row-span-11">
          <ExampleWithReactQueryProvider />
        </div>
      </div>
    </div>
  );
};

export default HistoryJatiroto;
