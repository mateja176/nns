import { head, match, nth, pipe } from "ramda"

export default (n: number) =>
  pipe(
    nth(n),
    match(/^\s+/),
    head,
  )
