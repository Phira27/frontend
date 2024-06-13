import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { QueryClient, QueryClientProvider, keepPreviousData, useQuery } from '@tanstack/react-query'; //note: this is TanStack React Query V5

import { Logobar, Navbar, Sidebar } from "../components";

const ExampleWithHistorySenduro = () => {
  //manage our own state for stuff we want to pass to the API
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  //consider storing this code in a custom hook (i.e useFetchUsers)
  const {
    data: { data = [], meta } = {}, //your data and api response will probably be different
    isError,
    isRefetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      'table-data',
      columnFilters, //refetch when columnFilters changes
      globalFilter, //refetch when globalFilter changes
      pagination.pageIndex, //refetch when pagination.pageIndex changes
      pagination.pageSize, //refetch when pagination.pageSize changes
      sorting, //refetch when sorting changes
    ],
    queryFn: async () => {
      const fetchURL = new URL(
        '/api/data',
        process.env.NODE_ENV === 'production'
          ? 'https://www.material-react-table.com'
          : 'http://localhost:3000',
      );

      //read our state and pass it to the API as query params
      fetchURL.searchParams.set(
        'start',
        `${pagination.pageIndex * pagination.pageSize}`,
      );
      fetchURL.searchParams.set('size', `${pagination.pageSize}`);
      fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
      fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

      //use whatever fetch library you want, fetch, axios, etc
      const response = await fetch(fetchURL.href);
      const json = await response.json();
      return json;
    },
    placeholderData: keepPreviousData, //don't go to 0 rows when refetching or paginating to next page
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

  return (
    <QueryClientProvider client={new QueryClient()}>
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
            <MaterialReactTable table={table} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default ExampleWithHistorySenduro;
