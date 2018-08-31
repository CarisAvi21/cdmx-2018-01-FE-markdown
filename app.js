 const fs = require('fs');

const readReadme = (callBack) => {
    fs.readFile('./README.md', 'utf8', (err, data)=>{
        if (err){
        console.log('Tienes un error');
    } else {
        callBack(data);
        
    }
    });
};

readReadme(callBack = data => console.log(data));
    
 const data = fs.readFileSync('./README.md', 'utf8');

fs.watch('./', (eventType, fileName) =>{
    console.log('tipo de evento' + eventType);
    if(fileName){
        console.log('En el archivo:' + fileName);
    } else {
        console.log('no tienes cambios en archivos');
        
    }
    
});

// const countLine = (err, data) => {
//     if (err) {
//         console.log('No tienes README.md');
//     } else {
//         let lines = data.split('/n').length;
//         console.log('El archivo tiene:' + lines + 'lineas');
//     }
// };

// fs.readFile('./README.md', 'utf8', countLine);
// exports.countLine = countLine;