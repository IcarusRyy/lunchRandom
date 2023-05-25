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
  "盖浇饭",
  "炒拉条",
  "丁丁炒面",
  "大盘鸡",
  "凉皮",
  "砂锅",
  "炒米粉",
  "南昌拌粉",
  "螺狮粉",
  "红烧牛肉面",
  "鱼香肉丝盖浇饭",
  "烤肉",
  "小龙虾",
  "韩式烤肉",
  "披萨",
  "汤面条",
  "泡面",
  "粥",
  "烤包子",
  "四川火锅",
  "潮汕牛肉火锅",
  "日料",
  "寿司",
  "自助火锅",
  "小郡肝串串香",
  "新疆菜",
  "泰餐",
  "广式茶点",
  "蛙火锅",
  "湘菜",
  "成都冷锅串串",
  "烤鱼",
  "纸包鱼",
  "辣子鸡",
  "大盘肚",
  "面包烤羊腿",
  "食堂",
  "牛排",
  "北京烤鸭",
  "老北京铜锅火锅",
  "北京爆肚",
  "北京卤煮",
  "凉面",
  "牛筋面",
  "汤圆",
  "粽子",
  "水煎包",
  "锅贴",
  "铁锅鸡",
  "鱼火锅",
  "街边脏摊",
  "大排档",
]
function App() {
  const [lunch, setLunch] = useState(0)
  // const [count, setCount] = useState(0)
  const [lunchMenu, setLuncMenu] = useState(lunchData)
  const [val, setVal] = useState("")
  const [nowLunch, setNowLunch] = useState("")
  const handleMenu = (menu: string[]) => {
    let handle = setInterval(function test() {
      let res = Math.round((menu.length - 1) * Math.random())
      setLunch(res)
      setNowLunch(menu[res])
    }, 200)
    setTimeout(() => clearInterval(handle), 2000)
  }

  const inputLunch = (e: any) => {
    setVal(e.target.value)
  }
  const addLunch = () => {
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
          onClick={() => handleMenu(lunchMenu)}
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
          style={{ borderColor: "pink" }}
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
