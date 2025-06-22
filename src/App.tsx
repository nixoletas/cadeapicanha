import PartyPlanner from './components/PartyPlanner'
import { I18nProvider } from './i18n/I18nContext'

function App() {
  return (
    <I18nProvider>
      <div className="App">
        <PartyPlanner />
      </div>
    </I18nProvider>
  )
}

export default App
