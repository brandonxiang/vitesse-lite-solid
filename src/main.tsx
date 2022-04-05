// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-solid" />

import { Router } from 'solid-app-router'
import Footer from './components/Footer'

import routes from '~solid-pages'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

render(
  () => {
    const Routes = useRoutes(routes)
    return (
      <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <Router>
          <Routes />
          <Footer />
        </Router>
      </main>
    )
  },
  document.getElementById('root') as HTMLElement,
)
