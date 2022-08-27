import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Text } from "./components/RecoilExample/Text";
import { FontButton } from "./components/RecoilExample/FontButton";
import { CharacterCounter } from "./components/RecoilExample/CharacterCounter";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
      </RecoilRoot>
    </div>
  );
}

export default App;
