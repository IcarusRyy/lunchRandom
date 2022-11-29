import classNames from "classnames"
import _ from "lodash"
import React, { useCallback, useState } from "react"
import "./App.css"
import "antd/dist/reset.css"
import { message } from "antd"
const lunchData = [
  "拉面",
  "板面",
  "朝天锅",
  "肉火烧",
  "卷饼",
  "鸡蛋灌饼",
  "包子",
  "小笼包",
  "水饺",
  "混沌",
  "餐厅",
  "麻辣烫",
  "麻辣伴",
  "麻辣香锅",
  "盒饭",
  "炒菜",
  "刀削面",
  "油泼面",
  "黄焖鸡",
  "建德大包",
  "KFC",
  "麦当劳",
]
function App() {
  const [lunch, setLunch] = useState(0)
  // const [count, setCount] = useState(0)
  const [lunchMenu, setLuncMenu] = useState(lunchData)
  const [val, setVal] = useState("")
  const [nowLunch, setNowLunch] = useState("")
  const changeLunch = useCallback(
    _.throttle(
      () => {
        // setCount(count + 1)
        let handle = setInterval(function test() {
          let res = Math.floor((lunchMenu.length - 1) * Math.random())
          setLunch(res)
          setNowLunch(lunchMenu[res])
          // return test
        }, 200)
        setTimeout(() => clearInterval(handle), 2000)
      },
      2000,
      { trailing: false }
    ),
    []
  )
  const inputLunch = (e: any) => {
    setVal(e.target.value)
  }
  const addLunch = () => {
    // console.log(val, "val")
    if (lunchMenu.some((item) => item === val)) {
      return message.warning("食谱中已存在")
    } else {
      setVal("")
      setLuncMenu([...lunchMenu, val])
    }
  }
  return (
    <div className="App">
      <div className="btn_box">
        <button
          className="btn"
          onClick={changeLunch}
          // disabled={count > 4}
        >
          中午吃啥
        </button>
      </div>
      <div className="lunch_box">
        {/* {count < 4 ? lunchMenu[lunch] : "几次了，还不知道吃啥，别吃了！"} */}
        {lunchMenu[lunch]}
      </div>
      <div className="add">
        <span>添加：</span>
        <input
          type="text"
          onChange={inputLunch}
          value={val}
          placeholder="请自行添加！"
        />
        <button onClick={addLunch}>+</button>
      </div>
      <div className="menu_box">
        {lunchMenu.map((item) => (
          <React.Fragment key={item}>
            <span className={classNames("item", { orange: item === nowLunch })}>
              {item}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default App
