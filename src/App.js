import s from './App.module.css'
import { TabContent, TabItem, Tabs } from "./Tabs"

function App() {
  return (
    <Tabs defaultActive="A">

      <div className={s.container}>
        <TabItem value="A">Tab A</TabItem>
        <TabItem value="B">Tab B</TabItem>
        <TabItem value="C">Tab C</TabItem>
        <TabItem value="D">Tab D</TabItem>
      </div>

      <TabContent value="A">
        Conteúdo tab A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </TabContent>
      <TabContent value="B">
        Conteúdo tab B Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </TabContent>
      <TabContent value="C">
        Conteúdo tab C Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </TabContent>
      <TabContent value="D">
        Conteúdo tab D Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </TabContent>
    </Tabs>
  );
}

export default App
