import { dec, head, inc, length, match, nth } from "ramda"
import convert from "./utils/convert"
import repeat from "./utils/repeat"
import sliceFrom from "./utils/slice/from"
import sliceTo from "./utils/slice/to"
import splitByNewLine from "./utils/splitByNewLine"

const form = document.querySelector("form") as HTMLFormElement

const indentation = document.querySelector(
  ".indentation",
) as HTMLTextAreaElement

indentation.onkeydown = e => {
  const { key, target } = e as any

  const { value, selectionStart } = target

  const precedingText = sliceTo(selectionStart)(value)

  const succeedingText = sliceFrom(selectionStart)(value)

  if (key === "Tab" || key === "Enter") {
    e.preventDefault()

    if (key === "Tab") {
      target.value = `${precedingText}\t${succeedingText}`

      const newSelectionStart = inc(selectionStart)

      target.selectionStart = newSelectionStart

      target.selectionEnd = newSelectionStart
    } else {
      const rowNumber = dec(length(splitByNewLine(precedingText)))

      const row = nth(rowNumber)(splitByNewLine(value))

      const indentation = head(match(/^\s*/)(row))

      const indentationLength = length(indentation)

      target.value = `${precedingText}\n${repeat(indentationLength)(
        "\t",
      )}${succeedingText}`

      const newSelectionStart = selectionStart + 1 + indentationLength

      target.selectionStart = newSelectionStart

      target.selectionEnd = newSelectionStart
    }
  }
}

form.onsubmit = e => {
  e.preventDefault()

  const {
    target: {
      json,
      indentation: { value },
    },
  } = e as any

  json.value = convert(value)
}

// indentation.value = `Hello
//   World!
// How
//   are
//   you?`
