import React from 'react'

export default ({
  label,
  onClick,
  first,
  href,
  focus,
}: {
  label: string
  href?: string
  first?: boolean
  focus?: boolean
  onClick?: () => void
}) => (
  <a
    tabIndex={0}
    onKeyUp={(e) => {
      if (onClick && (e.key === 'Enter' || e.keyCode === 13)) {
        onClick()
      }
    }}
    className={`
      font-bold
      shadow
      tracking-wide
      uppercase
      text-center
      cursor-pointer
      text-white
      text-sm
      ${first ? 'bg-pink-700 mb-2 md:mb-0' : 'bg-purple-700'}
      flex-shrink-0
      py-3 md:py-4
      rounded
      w-full
      md:w-half-w-margin
    `}
    ref={(el) => {
      if (el && focus) {
        el.focus()
        window.scrollTo(0, 0)
      }
    }}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault()
        onClick()
      }
    }}
    href={href}
    target="_blank"
    rel="nofollow noopener"
  >
    {label}
  </a>
)
