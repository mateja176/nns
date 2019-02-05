import { filter, map, pipe, trim } from "ramda"

export default pipe(
  map(trim),
  filter(Boolean),
)
