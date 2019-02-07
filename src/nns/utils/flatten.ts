export default <A>(a: A[][]) =>
  a.reduce<A[]>((flattened, a: A[]) => flattened.concat(a), [])
