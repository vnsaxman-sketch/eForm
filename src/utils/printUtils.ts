import type { EForm, FormValues } from '../types';
import { getFieldDisplayValue } from './formUtils';

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createPrintableHtml(
  form: EForm,
  values: FormValues,
): string {
  const rows = form.fields
    .map((field) => {
      const value = getFieldDisplayValue(
        form,
        field.id,
        values,
      );

      return `
        <div class="field">
          <div class="label">
            ${escapeHtml(field.label)}
          </div>

          <div class="value">
            ${escapeHtml(value || '—')}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>
          ${escapeHtml(form.title)}
        </title>

        <style>
          @page {
            margin: 0.55in;
          }

          * {
            box-sizing: border-box;
          }

          body {
            font-family:
              Arial,
              Helvetica,
              sans-serif;

            margin: 0;
            color: #111827;
            font-size: 12px;
          }

          .header {
            border-bottom: 2px solid #111827;
            padding-bottom: 12px;
            margin-bottom: 20px;
          }

          .brand {
            font-size: 22px;
            font-weight: 800;
          }

          .subtitle {
            color: #555;
            margin-top: 3px;
          }

          h1 {
            font-size: 20px;
            margin: 0 0 5px;
          }

          .form-number {
            color: #555;
            margin-bottom: 18px;
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .field {
            border: 1px solid #cbd5e1;
            padding: 9px;
            min-height: 48px;
          }

          .label {
            font-size: 9px;
            font-weight: bold;
            text-transform: uppercase;
            color: #64748b;
            margin-bottom: 5px;
          }

          .value {
            min-height: 17px;
            white-space: pre-wrap;
          }

          .notice {
            margin-top: 20px;
            border: 1px solid #cbd5e1;
            padding: 10px;
            font-size: 10px;
            color: #475569;
          }

          .footer {
            margin-top: 25px;
            font-size: 9px;
            color: #64748b;
          }

          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }

          @media (max-width: 700px) {
            .grid {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>

      <body>
        <div class="header">
          <div class="brand">
            eForm
          </div>

          <div class="subtitle">
            Find it. Fill it. Print it.
          </div>
        </div>

        <h1>
          ${escapeHtml(form.title)}
        </h1>

        ${
          form.formNumber
            ? `
              <div class="form-number">
                Form Number:
                ${escapeHtml(form.formNumber)}
              </div>
            `
            : ''
        }

        <div class="grid">
          ${rows}
        </div>

        ${
          form.category === 'DMV'
            ? `
              <div class="notice">
                This is an eForm-generated worksheet.
                Verify all information against the current
                official California DMV form before submission.
              </div>
            `
            : ''
        }

        <div class="footer">
          Generated locally in your browser by eForm.
        </div>
      </body>
    </html>
  `;
}

export function openPrintWindow(
  form: EForm,
  values: FormValues,
): void {
  const printWindow = window.open(
    '',
    '_blank',
    'width=900,height=1000',
  );

  if (!printWindow) {
    window.alert(
      'Please allow pop-ups for eForm to print or save as PDF.',
    );

    return;
  }

  printWindow.document.open();

  printWindow.document.write(
    createPrintableHtml(
      form,
      values,
    ),
  );

  printWindow.document.close();

  printWindow.focus();

  setTimeout(() => {
    printWindow.print();
  }, 300);
}

export function sendToFedExPrint(
  form: EForm,
): void {
  const recipient =
    'printandgo@fedex.com';

  const subject =
    `eForm Printing Request - ${form.title}`;

  const body = [
    'Hello,',
    '',
    'I would like to print the following completed form using FedEx Print & Go:',
    '',
    `Form: ${form.title}`,
    form.formNumber
      ? `Form Number: ${form.formNumber}`
      : '',
    '',
    'I have attached the completed PDF.',
    '',
    'Thank you.',
  ]
    .filter(Boolean)
    .join('\n');

  const mailtoUrl =
    `mailto:${recipient}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
}
