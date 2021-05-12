import React from 'react';
// import Counter from './component/Counter';
// import Button from './component/Button'
// import Option from './component/Option'
import NumberGame from './component/NumberGame'

const App = () => {
  return (
    <React.Fragment>
      <NumberGame/>
    </React.Fragment>
  )
}

export default App; 
// 작성한 함수를 다른 파일에서도 쓸 수 있게 하기 위해 모듈화.
// default export는 파일 당 1개만 가능
// export const App; --> 여러개까지 가능. 만약 다른 function이 있다면 여따가 서브모듈들 export해주자.
