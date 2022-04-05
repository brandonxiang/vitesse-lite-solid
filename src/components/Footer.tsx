import { createDark } from '~/primitives'

export default function Footer() {
  const { isDark, toggleDark } = createDark()
  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark() ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </button>

      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/brandonxiang/vitesse-lite-solid"
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}
