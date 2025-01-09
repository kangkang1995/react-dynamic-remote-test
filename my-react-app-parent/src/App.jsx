import {useState} from 'react';
import { UmdComponent } from './UmdComponent'
import {useMemo} from 'react';


const url1 = "http://127.0.0.1:5500/my-lib.umd.js";
// const url2 = "https://unpkg.com/react-draggable@4.4.4/build/web/react-draggable.min.js";
const App = () => {
  const [age, setAge] = useState(18);
  const memoDatas = useMemo(() => ({
    name: "张三",
    onDrag(e) {
      console.log(e)
    },
    state: {
      age
    },
    setState: {
      setAge
    }
  }), [age])

  return <div>
    <div>动态组件插槽示例：子元素组件</div>
    <UmdComponent
      url={url1}
      umdProps={memoDatas}
    >
      <div style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}>
        我是父组件传给子组件的dom
      </div>
    </UmdComponent>
  </div>
}

export default App;
