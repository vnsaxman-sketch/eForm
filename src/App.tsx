import { useMemo, useState } from 'react';

import Header from './components/Header';
import FormSearch from './components/FormSearch';
import FormCard from './components/FormCard';
import FormRenderer from './components/FormRenderer';
import FormPreview from './components/FormPreview';
import EmptyState from './components/EmptyState';

import { forms } from './data/forms';

import type {
  EForm,
  FormCategory,
  FormValues,
} from './types';

import { createInitialValues } from './utils/formUtils';

type View = 'home' | 'edit' | 'preview';

function formMatchesSearch(
  form: EForm,
  searchTerm: string,
): boolean {
  const query = searchTerm.trim().toLowerCase();

  if (!query) {
    return true;
  }

  const searchableText = [
    form.title,
    form.shortTitle ?? '',
    form.description,
    form.formNumber ?? '',
    form.category,
    form.jurisdiction,
    form.officialSourceName ?? '',
    ...form.fields.map(
      (field) => field.label,
    ),
    ...form.fields.map(
      (field) => field.helpText ?? '',
    ),
    ...form.fields.map(
      (field) => field.placeholder ?? '',
    ),
    ...form.fields.map(
      (field) =>
        field.options
          ?.map((option) => option.label)
          .join(' ') ?? '',
    ),
  ]
    .join(' ')
    .toLowerCase();

  return searchableText.includes(query);
}

function App() {
  const [view, setView] =
    useState<View>('home');

  const [selectedForm, setSelectedForm] =
    useState<EForm | null>(null);

  const [values, setValues] =
    useState<FormValues>({});

  const [searchTerm, setSearchTerm] =
    useState('');

  const [category, setCategory] =
    useState<FormCategory | 'All'>('All');

  const filteredForms = useMemo(() => {
    return forms.filter((form) => {
      const matchesSearch =
        formMatchesSearch(
          form,
          searchTerm,
        );

      const matchesCategory =
        category === 'All' ||
        form.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [searchTerm, category]);

  function handleSelectForm(form: EForm) {
    setSelectedForm(form);
    setValues(
      createInitialValues(form),
    );
    setView('edit');
  }

  function handleFieldChange(
    fieldId: string,
    value: string | boolean,
  ) {
    setValues((current) => ({
      ...current,
      [fieldId]: value,
    }));
  }

  function handleBackHome() {
    setSelectedForm(null);
    setValues({});
    setView('home');
  }

  function handleReview() {
    setView('preview');
  }

  function handleEdit() {
    setView('edit');
  }

  function handleSearchChange(
    value: string,
  ) {
    setSearchTerm(value);
  }

  function handleCategoryChange(
    value: FormCategory | 'All',
  ) {
    setCategory(value);
  }

  if (
    view === 'edit' &&
    selectedForm !== null
  ) {
    return (
      <div className="app">
        <Header />

        <main>
          <div className="page-container">
            <FormRenderer
              form={selectedForm}
              values={values}
              onChange={handleFieldChange}
              onBack={handleBackHome}
              onReview={handleReview}
            />
          </div>
        </main>
      </div>
    );
  }

  if (
    view === 'preview' &&
    selectedForm !== null
  ) {
    return (
      <div className="app">
        <Header />

        <main>
          <div className="page-container">
            <FormPreview
              form={selectedForm}
              values={values}
              onBack={handleBackHome}
              onEdit={handleEdit}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <div className="page-container">
            <div className="hero-content">
              <div className="hero-badge">
                California Form Finder
              </div>

              <h1>
                Find it. Fill it. Print it.
              </h1>

              <p>
                California forms made simpler. Search for
  		the form you need, complete it in your
  		browser, and print or save it as a PDF.

              </p>
            </div>
          </div>
        </section>

        <section className="finder-section">
          <div className="page-container">
            <div className="section-heading">
              <h2>Find a form</h2>

              <p>
                Search by form name, form number,
                keyword, category, or field.
              </p>
            </div>

            <FormSearch
              searchTerm={searchTerm}
              category={category}
              onSearchChange={
                handleSearchChange
              }
              onCategoryChange={
                handleCategoryChange
              }
            />

            <div className="search-results-summary">
              {searchTerm.trim() ||
              category !== 'All' ? (
                <p>
                  Showing{' '}
                  <strong>
                    {filteredForms.length}
                  </strong>{' '}
                  matching form
                  {filteredForms.length === 1
                    ? ''
                    : 's'}.
                </p>
              ) : (
                <p>
                  Showing{' '}
                  <strong>
                    {forms.length}
                  </strong>{' '}
                  available forms.
                </p>
              )}
            </div>

            {filteredForms.length > 0 ? (
              <div className="forms-grid">
                {filteredForms.map(
                  (form) => (
                    <FormCard
                      key={form.id}
                      form={form}
                      onSelect={
                        handleSelectForm
                      }
                    />
                  ),
                )}
              </div>
            ) : (
              <EmptyState
                searchTerm={searchTerm}
                category={category}
              />
            )}
          </div>
        </section>

        <section className="privacy-section">
          <div className="page-container">
            <div className="privacy-card">
              <h2>
                Your information stays in your
                browser.
              </h2>

              <p>
                eForm does not require an account
                or database. Information entered
                into forms is handled locally by
                your browser.
              </p>
            </div>
          </div>
        </section>

        <section className="how-section">
          <div className="page-container">
            <div className="section-heading">
              <h2>How it works</h2>
            </div>

            <div className="steps-grid">
              <div>
                <span>1</span>

                <h3>Find</h3>

                <p>
                  Search by form name, form
                  number, keyword, or field.
                </p>
              </div>

              <div>
                <span>2</span>

                <h3>Fill</h3>

                <p>
                  Complete the form directly in
                  your browser.
                </p>
              </div>

              <div>
                <span>3</span>

                <h3>Print</h3>

                <p>
                  Review your information, then
                  print or save as PDF.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-container">
          <p>
            eForm is an independent form assistance
            and printing tool for California residents.
          </p>

          <p>
            Always verify requirements with the
            applicable official government agency
            before submitting a form.
          </p>
	  <p>
	    Developed by Long Nguyen
	  </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
