console.log(`这是main.js`)

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/style.css")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      console.log(request.response)
      const style = document.createElement("style")
      style.textContent = request.response
      document.head.appendChild(style)
    }
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/2.js")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      console.log(request.response)
      const script = document.createElement("script")
      script.textContent = request.response
      document.body.appendChild(script)
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/3.html")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      console.log(request.response)
      const div = document.createElement("div")
      div.innerHTML = request.response
      document.body.appendChild(div)
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/4.xml")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      // console.log(request.responseXML)
      let text = request.responseXML.getElementsByTagName("warning")[0].textContent
      // console.log(text.trim())
      getXML.textContent += text.trim()
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/5.json")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      // console.log(request.response)
      const obj = JSON.parse(request.response)
      myName.textContent = "Hello " + obj.name
    }
  }
  request.send()
}

/*
* AJAX 模拟分页
* */
let n = 1
getNextPage.onclick = () => {
  if (n >= 3) return
  const request = new XMLHttpRequest()
  request.open("get", `page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      // console.log(request.response)
      const arr = JSON.parse(request.response)
      arr.map(item => {
        let li = document.createElement("li")
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}