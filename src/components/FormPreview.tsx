import { useState } from 'react';

import type {
  FormPreviewProps,
} from '../types';

import {
  getFieldDisplayValue,
} from '../utils/formUtils';

import {
  openPrintWindow,
  sendToFedExPrint,
} from '../utils/printUtils';

function FormPreview({
  form,
  values,
  onBack,
  onEdit,
}: FormPreviewProps) {
  const [showPrintOptions, setShowPrintOptions] =
    useState(false);

  function handlePrint() {
    openPrintWindow(
      form,
      values,
    );
  }

  function handleSendForPrinting() {
    setShowPrintOptions(true);
  }

  function handleOpenEmail() {
    sendToFedExPrint(form);
  }

  return (
    <section className="form-preview">
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back to Forms
      </button>

      <div className="form-preview-header">
        <span className="form-category">
          {form.category}
        </span>

        <h1>
          Review Your Form
        </h1>

        <h2>
          {form.title}
        </h2>

        {form.formNumber && (
          <div className="form-number">
            {form.formNumber}
          </div>
        )}

        <p>
          Review the information below before
          printing or saving your form.
        </p>
      </div>

      <div className="preview-card">
        {form.fields.map((field) => (
          <div
            className="preview-field"
            key={field.id}
          >
            <div className="preview-label">
              {field.label}
            </div>

            <div className="preview-value">
              {getFieldDisplayValue(
                form,
                field.id,
                values,
              ) || '—'}
            </div>
          </div>
        ))}
      </div>

      <div className="preview-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={onEdit}
        >
          ← Edit Form
        </button>

        <button
          type="button"
          className="primary-button"
          onClick={handlePrint}
        >
          Print / Save PDF
        </button>

        <button
          type="button"
          className="primary-button"
          onClick={handleSendForPrinting}
        >
          Send for Printing
        </button>
      </div>

      {showPrintOptions && (
        <div className="print-service-card">
          <div className="print-service-header">
            <h2>
              Send for Printing
            </h2>

            <button
              type="button"
              className="print-service-close"
              onClick={() =>
                setShowPrintOptions(false)
              }
              aria-label="Close printing instructions"
            >
              ×
            </button>
          </div>

          <p>
            You can send your completed PDF to
            FedEx Print & Go by email.
          </p>

          <div className="print-service-recipient">
            <span>
              Send to
            </span>

            <strong>
              printandgo@fedex.com
            </strong>
          </div>

          <div className="print-service-steps">
            <h3>
              How it works
            </h3>

            <ol>
              <li>
                Tap <strong>Print / Save PDF</strong>
                and save your completed form as a PDF.
              </li>

              <li>
                Return to eForm and tap
                <strong> Send for Printing</strong>.
              </li>

              <li>
                Tap <strong>Open Email</strong>.
              </li>

              <li>
                Select your email account if your
                email app asks which account to use.
              </li>

              <li>
                Attach the completed PDF.
              </li>

              <li>
                Send the email to
                <strong> printandgo@fedex.com</strong>.
              </li>
            </ol>
          </div>

          <div className="print-service-note">
            <strong>
              Important:
            </strong>

            <p>
              eForm cannot automatically attach the
              PDF or choose your email account.
              Your email app controls those functions.
            </p>
          </div>

          <div className="print-service-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={handlePrint}
            >
              Print / Save PDF
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={handleOpenEmail}
            >
              Open Email
            </button>
          </div>
        </div>
      )}

      <div className="preview-disclaimer">
        <strong>
          eForm notice:
        </strong>

        <p>
          This preview is generated by eForm.
          It is not a reproduction of an official
          government PDF. Verify the information
          and current requirements with the
          applicable official agency before
          submitting a form.
        </p>
      </div>
    </section>
  );
}

export default FormPreview;
