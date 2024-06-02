import Header from "./header"
import Hero from "./hero"
import {SearchProvider} from "./searchContext"

const Main = () => {
  return (
      <main>
        <SearchProvider>
     <Header/>
       <Hero/>
          </SearchProvider>
      </main>
  );
};

export default Main;