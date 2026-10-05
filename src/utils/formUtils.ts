import type { EForm, FormValues } from '../types';

export function createInitialValues(form: EForm): FormValues {
  return form.fields.reduce<FormValues>((values, field) => {
    values[field.id] = field.type === 'checkbox' ? false : '';
    return values;
  }, {});
}

export function isFormComplete(
  form: EForm,
  values: FormValues,
): boolean {
  return form.fields
    .filter((field) => field.required)
    .every((field) => {
      const value = values[field.id];

      if (typeof value === 'boolean') {
        return value;
      }

      return String(value ?? '').trim().length > 0;
    });
}

export function getFieldDisplayValue(
  form: EForm,
  fieldId: string,
  values: FormValues,
): string {
  const field = form.fields.find((item) => item.id === fieldId);

  if (!field) {
    return '';
  }

  const value = values[fieldId];

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  if (field.type === 'select' && field.options) {
    return (
      field.options.find((option) => option.value === value)?.label ??
      String(value ?? '')
    );
  }

  return String(value ?? '');
}
