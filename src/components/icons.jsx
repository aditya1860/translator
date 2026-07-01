// Minimal inline icon set — kept dependency-free on purpose.
// Each icon is a plain 20x20 stroke SVG so the app has zero icon-package weight.

export const IconHome = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M3 8.5 10 3l7 5.5V16a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1V8.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconTranslate = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M3 4h7M6.5 3v1.5M4 4c0 3 1.5 5.5 4 7M9 4c-.7 2-2 4-4.5 5.5M11 17l3-7 3 7M12.2 14.5h3.6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconShuffle = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M3 5h2.5c2 0 3 1 4.5 3.5M3 15h2.5c2 0 3-1 4.5-3.5M13 5h4m0 0-2-2m2 2-2 2M13 15h4m0 0-2 2m2-2-2-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconCopy = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <rect x="7" y="7" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4.5 12.5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
)

export const IconCheck = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M4 10.5 8 14.5 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconChevronRight = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M7.5 5 12.5 10 7.5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
