import { AppWrapper } from "./App.styled";
import ContextProvider from "./Context";
import { MobNav } from "./layouts/MobNav";
import { NormalNav } from "./layouts/NormalNav";
import { AdvancedStatistics } from "./pages/AdvancedStatistics";
import { BoostYourLinks } from "./pages/BoostYourLinks";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/home";
import { LinkShorts } from "./pages/LinksShort";

function App() {

  return (
    <AppWrapper>
      <NormalNav />
      <MobNav />
      <Home />
      <ContextProvider>
        <LinkShorts />
      </ContextProvider>
      <AdvancedStatistics />
      <BoostYourLinks />
      <Footer />
    </AppWrapper>
  )
}

export default App
