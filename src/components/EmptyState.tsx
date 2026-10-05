import type {
  EmptyStateProps,
} from '../types';

function EmptyState({
  searchTerm,
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <h3>No forms found</h3>

      {searchTerm ? (
        <p>
          No forms matched "
          {searchTerm}
          ". Try a different search.
        </p>
      ) : (
        <p>
          No forms are currently available
          for the selected filters.
        </p>
      )}
    </div>
  );
}

export default EmptyState;
