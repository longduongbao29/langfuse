/**
 * `refetchInterval` for onboarding "has any X?" checks: poll every
 * `intervalMs` while the answer is falsy, then stop. Once a project has data
 * the answer practically never flips back, so polling forever only adds
 * background requests (and re-renders) to every visit of the page. If a later
 * refetch (mount, focus, invalidation) returns falsy again, polling resumes.
 */
export const refetchUntilTruthy =
  (intervalMs: number) =>
  (query: { state: { data: unknown } }): number | false =>
    query.state.data ? false : intervalMs;
