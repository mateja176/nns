export default <T>(entries: Array<Array<string | T>>) =>
  entries.reduce(
    (object, [key, value]) => ({ ...object, [key as string]: value as T }),
    {} as { [key: string]: T },
  )
