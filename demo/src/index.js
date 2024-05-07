import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  // const rec = async()=>{
    //     try {
    //         let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         setRecord(data);
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // useEffect(()=>{
    //     rec()
    // },[])
