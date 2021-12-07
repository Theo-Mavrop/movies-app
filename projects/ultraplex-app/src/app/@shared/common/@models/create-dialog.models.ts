import { FormGroup } from "@angular/forms";

export interface CreateDialogData {
  title: string;
  form : FormDialogData[]
}

export interface FormDialogData {
  label: string;
  controlName: string;
  controlType: string;
  control: FormGroup;
}
