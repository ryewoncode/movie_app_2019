import React from 'react'; // JSX가 있는 Componet를 사용하기 위해 꼭 입력해야 함.
import ReactDOM from 'react-dom';
import App from './App';
// import Potato from './Potato';

//ReactDOM.render(<App /><Potato /><, document.getElementById('root')); // react application이 하나의 component만을 rendring 해야함.(안 그러면 오류 발생)
ReactDOM.render(<App />, document.getElementById('root'));