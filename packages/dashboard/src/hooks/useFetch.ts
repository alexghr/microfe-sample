import React from 'react';

type State<T, E> = | {
  body: T;
  status: 'success';
} | {
  body: undefined,
  status: 'loading',
} | {
  body: E,
  status: 'error'
};

type Options = { skip: boolean };

export default function useFetch<T, E>(url: string, opts?: Options): State<T, E> {
  const [state, setState] = React.useState<State<T, E>>({
    body: undefined,
    status: 'loading'
  });

  React.useEffect(() => {
    // just skip for now
    if (opts?.skip) {
      return;
    }

    // we need to reset the loading state
    if (state.status !== 'loading') {
      setState({ body: undefined, status: 'loading' });
    }

    const ctrl = new AbortController();

    fetch(url, {
      signal: ctrl.signal
    })
      .then(async r => {
        if (r.status === 200) {
          return await r.json();
        } else {
          return Promise.reject(await r.json());
        }
      })
      .then(resp => {
        setState({ status: 'success', body: resp });
      })
      .catch(err => {
        console.error('API response error: %o', err);
        setState({ status: 'error', body: err });
      });

    return () => ctrl.abort();
  }, [url, opts?.skip]);

  return state;
}
