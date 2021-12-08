import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export interface CreateDialogData {
  title: string;
  form : FormDialogData[]
}

export interface FormDialogData {
  label: string;
  controlName: string;
  controlType: string;
  control: FormGroup;
  options$?: Observable<OptionInfo[]>;
}

export interface OptionInfo {
  id: number;
  text: string;
}
