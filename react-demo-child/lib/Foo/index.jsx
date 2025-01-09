import React from 'react'

const Demo = (props) => {
    console.log("22222-我是子环境的log", props);
    const {state, setState, children} = props;
    const handleClick = () => {
        setState.setAge(state.age + 1);
    }
  return (
    <div>
        <button onClick={handleClick}>哦哦哦。牛逼 {state.age ?? 0}</button>
        <div>
            子组件接受 父元素传过来的dom
            {children}
        </div>
    </div>
  )
}

export default Demo;
