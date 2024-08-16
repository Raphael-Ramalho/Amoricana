import { Radio } from "antd";
import { MainSection } from "./App.styled";

function App() {

  return (
    <MainSection>
      <>ola</>

      <Radio.Group onChange={()=>{}}>
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
    </MainSection>
  );
}

export default App;
