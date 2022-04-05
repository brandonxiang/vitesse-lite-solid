import { createMediaQuery } from '@solid-primitives/media'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

export default function useDark(defaultValue?: boolean) {
  const isDarkOS = createMediaQuery(COLOR_SCHEME_QUERY)

  const isDark = defaultValue ?? isDarkOS() ?? false
  const [isDarkMode, setDarkMode] = createSignal(!!isDark)
  localStorage.setItem('dark-mode', isDark.toString())

  const setDark = (targetValue: boolean) => {
    setDarkMode(targetValue)

    if (targetValue)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')

    localStorage.setItem('dark-mode', targetValue.toString())
  }

  createEffect(() => {
    setDark(isDarkOS())
  }, [isDarkOS])

  return {
    isDark: isDarkMode,
    toggleDark: () => setDark(!isDarkMode()),
    enable: () => setDark(true),
    disable: () => setDark(false),
  }
}
