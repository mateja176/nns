export default <E extends Event, T extends EventTarget & HTMLTextAreaElement>(
  e: E,
) => (target: T) => (value: string) => (selectionStart: number) => {
  e.preventDefault()

  target.value = value

  target.selectionStart = selectionStart

  target.selectionEnd = selectionStart
}
