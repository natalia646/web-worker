// onmessage = ({data}) => {
//     console.log(data);
//     postMessage('Result worker')
// }




onmessage = ({data}) => {
   if(data.type === 'comand'){
    let count = 0;
    const now = performance.now()
    for(let i = 0; i < 200000; i++){
        count++
    }
    console.log('time', performance.now() - now)
   }
   console.log(performance)
}