import type { FormCardProps } from '../types';

function FormCard({
  form,
  onSelect,
}: FormCardProps) {
  return (
    <article className="form-card">
      <div className="form-card-top">
        <span className="form-category">
          {form.category}
        </span>
      </div>

      <h3>{form.title}</h3>

      {form.shortTitle && (
        <div className="form-number">
          {form.shortTitle}
        </div>
      )}

      {form.formNumber && (
        <div className="form-number">
          {form.formNumber}
        </div>
      )}

      <p>{form.description}</p>

      {form.jurisdiction === 'California' && (
        <div className="form-jurisdiction">
          California
        </div>
      )}

      {form.jurisdiction === 'Federal' && (
        <div className="form-jurisdiction">
          Federal
        </div>
      )}

      <button
        type="button"
        onClick={() => onSelect(form)}
      >
        {form.fields.length === 0
          ? 'View Resource'
          : 'Fill Form'}
      </button>
    </article>
  );
}

export default FormCard;
