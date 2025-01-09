import { useState, useEffect } from 'react'
import { importScript } from './utils'

export const UmdComponent = ({ url, children, umdProps = {} }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [UmdCom, setUmdCom] = useState(null)

  useEffect(() => {
    if (!url) return;
    importScript(url)
      .then((Com) => {
        console.log("11111-我是父亲环境的log", Com, typeof Com);
        // 这里需要注意的是，res 因为是组件，所以类型是 function
        // 而如果直接 setUmdCom 可以接受函数或者值，如果直接传递 setUmdCom(Com)，则内部会先执行这个函数，则会报错
        // 所以值为函数的场景下，必须是 如下写法
        setUmdCom(() => Com)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [url])
  
  if (!url) return null;
  if (error) return <div>error!!!</div>
  if (loading) return <div>loading...</div>
  if (!UmdCom) return <div>加载失败，请检查</div>;

  return <UmdCom {...umdProps}>{ children }</UmdCom>
}
