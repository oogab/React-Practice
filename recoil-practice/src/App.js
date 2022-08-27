import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Text } from "./components/RecoilExample/Text";
import { FontButton } from "./components/RecoilExample/FontButton";
import { CharacterCounter } from "./components/RecoilExample/CharacterCounter";
import { TodoList } from "./components/RecoilExample/Todo/TodoList";
import { CurrentUserInfo } from "./components/RecoilExample/CurrentUserInfo";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/* <FontButton />
        <Text />
        <CharacterCounter /> */}
        {/* <TodoList /> */}
        <CurrentUserInfo />
      </RecoilRoot>
    </div>
  );
}

export default App;
