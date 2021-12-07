export interface DataTableColumn {
  columnDef: string;
  header: string;
  cell?: (any) => string;
  actions?: TableAction[]
}

export interface TableAction {
  label: string;
  action: (any) => void
}
