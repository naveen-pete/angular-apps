import { FieldItemOption } from './field-item-option';

export class FieldItem {
  key: string;
  label: string;
  value?: string;
  required?: boolean;
  maxlength?: number;
  type?: string;
  options?: FieldItemOption[];
  enabled?: boolean;
}
