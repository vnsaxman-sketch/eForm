import type {
  FormRendererProps,
} from '../types';

function FormRenderer({
  form,
  values,
  onChange,
  onBack,
  onReview,
}: FormRendererProps) {
  /*
   * State resource entry.
   *
   * These entries don't have fillable
   * fields. They direct the user to the
   * official state motor vehicle agency.
   */
  if (form.fields.length === 0) {
    return (
      <section className="form-editor">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Back to Forms
        </button>

        <div className="form-editor-header">
          <span className="form-category">
            {form.category}
          </span>

          <h1>
            {form.title}
          </h1>

          <p>
            {form.description}
          </p>
        </div>

        <div className="official-resource-card">
          <h2>
            Official Government
            Resource
          </h2>

          <p>
            This eForm entry links
            you to the official
            motor vehicle agency
            for this state.
          </p>

          {form.officialSourceName && (
            <p>
              <strong>
                Agency:
              </strong>{' '}
              {
                form.officialSourceName
              }
            </p>
          )}

          {form.officialUrl && (
            <a
              href={
                form.officialUrl
              }
              target="_blank"
              rel="noreferrer"
              className="official-link"
            >
              Visit Official
              Website →
            </a>
          )}
        </div>
      </section>
    );
  }

  function handleSubmit(
    event: React.FormEvent,
  ) {
    event.preventDefault();
    onReview();
  }

  return (
    <section className="form-editor">
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back to Forms
      </button>

      <div className="form-editor-header">
        <span className="form-category">
          {form.category}
        </span>

        <h1>
          {form.title}
        </h1>

        {form.formNumber && (
          <div className="form-number">
            {form.formNumber}
          </div>
        )}

        <p>
          {form.description}
        </p>

        {form.officialSourceName && (
          <p className="official-source">
            Official source:{' '}
            {
              form.officialSourceName
            }
          </p>
        )}
      </div>

      <form
        className="form-fields"
        onSubmit={handleSubmit}
      >
        {form.fields.map(
          (field) => {
            const value =
              values[field.id];

            if (
              field.type ===
              'checkbox'
            ) {
              return (
                <div
                  className="form-field checkbox-field"
                  key={field.id}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        Boolean(
                          value,
                        )
                      }
                      onChange={(
                        event,
                      ) =>
                        onChange(
                          field.id,
                          event
                            .target
                            .checked,
                        )
                      }
                    />

                    <span>
                      {
                        field.label
                      }
                    </span>
                  </label>

                  {field.helpText && (
                    <small>
                      {
                        field.helpText
                      }
                    </small>
                  )}
                </div>
              );
            }

            return (
              <div
                className="form-field"
                key={field.id}
              >
                <label
                  htmlFor={
                    field.id
                  }
                >
                  {
                    field.label
                  }

                  {field.required && (
                    <span className="required">
                      {' '}
                      *
                    </span>
                  )}
                </label>

                {field.type ===
                  'textarea' && (
                  <textarea
                    id={field.id}
                    value={
                      String(
                        value ??
                          '',
                      )
                    }
                    placeholder={
                      field.placeholder
                    }
                    required={
                      field.required
                    }
                    onChange={(
                      event,
                    ) =>
                      onChange(
                        field.id,
                        event
                          .target
                          .value,
                      )
                    }
                  />
                )}

                {field.type ===
                  'select' && (
                  <select
                    id={field.id}
                    value={
                      String(
                        value ??
                          '',
                      )
                    }
                    required={
                      field.required
                    }
                    onChange={(
                      event,
                    ) =>
                      onChange(
                        field.id,
                        event
                          .target
                          .value,
                      )
                    }
                  >
                    <option value="">
                      Select...
                    </option>

                    {field.options?.map(
                      (
                        option,
                      ) => (
                        <option
                          key={
                            option.value
                          }
                          value={
                            option.value
                          }
                        >
                          {
                            option.label
                          }
                        </option>
                      ),
                    )}
                  </select>
                )}

                {field.type !==
                  'textarea' &&
                  field.type !==
                    'select' && (
                    <input
                      id={
                        field.id
                      }
                      type={
                        field.type
                      }
                      value={
                        String(
                          value ??
                            '',
                        )
                      }
                      placeholder={
                        field.placeholder
                      }
                      required={
                        field.required
                      }
                      onChange={(
                        event,
                      ) =>
                        onChange(
                          field.id,
                          event
                            .target
                            .value,
                        )
                      }
                    />
                  )}

                {field.helpText && (
                  <small>
                    {
                      field.helpText
                    }
                  </small>
                )}
              </div>
            );
          },
        )}

        <div className="form-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={onBack}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="primary-button"
          >
            Review Form
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormRenderer;
