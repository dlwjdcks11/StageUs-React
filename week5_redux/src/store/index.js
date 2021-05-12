import { createStore } from 'redux'; // 스토어 생성을 위한 모듈
import reducer from "../reducer/index" // 스토어에서 실질적으로 일을 하는 reducer

const store = createStore(reducer); // 스토어 생성

export default store; // export