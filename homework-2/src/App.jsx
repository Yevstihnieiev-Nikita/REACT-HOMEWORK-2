import Name from "../src/components/Name";
import Message from "../src/components/Message";
import Button from "../src/components/Button";

function App() {
  return (
    <>
      <Name name="Nikita" />
      <h1>Hello, Ivan!</h1>
      <Message text="Message" />
      <Button onClick="Button" />
    </>
  );
}

export default App;
