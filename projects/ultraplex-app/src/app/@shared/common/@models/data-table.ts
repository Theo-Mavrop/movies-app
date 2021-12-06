export interface DataTableColumn {
  columnDef: string;
  header: string;
  cell: (any) => string;
}
