import { filter, map, pipe, trim } from "ramda"

export const filterEmptyLines = pipe(
  map(trim),
  filter(Boolean),
)
