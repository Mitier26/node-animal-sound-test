const express = require('express')
var cors = require('cors')  //모듈사용
const app = express()
const port = 3000

app.use(cors()) // cors 작동, 모든 요청 허용

// 루트 페이지에 접속하면 실행
app.get('/', (req, res) => {
    res.send('Hello World!')
  // 응답을 돌려준다.
})

app.get('/sound/:name', (req, res) => {
    // key를 name이라고 만들고 입력시 name : aaa
    // 하면 자동으로 name kay 값에 aaa가 들어 간다.
    const {name} = req.params
    //console.log(name)

    if(name == "dog") {
        res.json({'sound':'멍멍'})
    }
    else if(name == 'cat'){
        res.json({'sound':'냐옹'})
    }
    else if(name == 'pig'){
        res.json({'sound':'꿀꿀'})
    }
    else{
        res.json({'sound':'알수없음'})
    }
})

// 3000 번 페이지에 접속하면 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})