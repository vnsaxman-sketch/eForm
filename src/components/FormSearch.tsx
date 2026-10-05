import type { FormCategory } from '../types';

interface FormSearchProps {
  searchTerm: string;
  category: FormCategory | 'All';
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: FormCategory | 'All') => void;
}

function FormSearch({
  searchTerm,
  category,
  onSearchChange,
  onCategoryChange,
}: FormSearchProps) {
  return (
    <div className="search-panel">
      <div className="search-input-wrapper">
        <label htmlFor="form-search">
          Search Forms
        </label>

        <input
          id="form-search"
          type="search"
          value={searchTerm}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search by form name, number, keyword, or field..."
          aria-label="Search forms"
          autoComplete="off"
        />

        <small>
          Try: REG 343, W-4, employment, vehicle,
          passport, VIN, or tax.
        </small>
      </div>

      <div className="filter-group">
        <label htmlFor="category-filter">
          Category
        </label>

        <select
          id="category-filter"
          value={category}
          onChange={(event) =>
            onCategoryChange(
              event.target.value as FormCategory | 'All',
            )
          }
          aria-label="Filter forms by category"
        >
          <option value="All">
            All Categories
          </option>

          <option value="DMV">DMV</option>

          <option value="Tax">Tax</option>

          <option value="Employment">
            Employment
          </option>

          <option value="Housing">
            Housing
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Healthcare">
            Healthcare
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Personal">
            Personal
          </option>
        </select>

        {category !== 'All' && (
          <button
            type="button"
            className="clear-filter-button"
            onClick={() =>
              onCategoryChange('All')
            }
          >
            Clear category
          </button>
        )}
      </div>
    </div>
  );
}

export default FormSearch;
