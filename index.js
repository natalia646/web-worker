const worker = new Worker('workers.js');

// worker.postMessage('Do this!');
// worker.onmessage = ({data}) => {
//     console.log(data)
//    console.log('Thank you for the result')
// }


worker.postMessage({type: 'comand'});
worker.onmessage = data => data