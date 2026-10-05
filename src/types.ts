export type FormCategory =
  | 'DMV'
  | 'Tax'
  | 'Employment'
  | 'Housing'
  | 'Business'
  | 'Healthcare'
  | 'Travel'
  | 'Personal';

export type Jurisdiction =
  | 'Federal'
  | 'State'
  | 'Generic'
  | 'California';

export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'date'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox';

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormField {
  id: string;
  label: string;
  type: FieldType;

  required?: boolean;

  placeholder?: string;

  helpText?: string;

  options?: SelectOption[];
}

export interface EForm {
  id: string;

  title: string;

  shortTitle?: string;

  description: string;

  category: FormCategory;

  jurisdiction: Jurisdiction;

  /**
   * Existing forms may use:
   *
   * state: 'California'
   */
  state?: string;

  /**
   * New 50-state system uses:
   *
   * stateCode: 'CA'
   */
  stateCode?: string;

  formNumber?: string;

  fields: FormField[];

  officialUrl?: string;

  officialSourceName?: string;
}

export type FormValues = Record<
  string,
  string | boolean
>;

export interface FormSearchProps {
  searchTerm: string;

  category: FormCategory | 'All';

  stateCode: string;

  onSearchChange: (
    value: string,
  ) => void;

  onCategoryChange: (
    value: FormCategory | 'All',
  ) => void;

  onStateChange: (
    value: string,
  ) => void;
}

export interface FormCardProps {
  form: EForm;

  onSelect: (
    form: EForm,
  ) => void;
}

export interface FormRendererProps {
  form: EForm;

  values: FormValues;

  onChange: (
    fieldId: string,
    value: string | boolean,
  ) => void;

  onBack: () => void;

  onReview: () => void;
}

export interface FormPreviewProps {
  form: EForm;

  values: FormValues;

  onBack: () => void;

  onEdit: () => void;
}

export interface EmptyStateProps {
  searchTerm?: string;

  category?: FormCategory | 'All';

  stateCode?: string;
}
