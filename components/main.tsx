import Header from "./header"
import Hero from "./hero"
import {SearchProvider} from "./searchContext"
import CreatePost from './createPost';

const Main = () => {
 
  
  return (
      <main className="flex flex-col">
        <SearchProvider>
     <Header/>
          <CreatePost />
       <Hero/>
          </SearchProvider>
      </main>
  );
};

export default Main;