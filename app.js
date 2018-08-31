 const fs = require('fs');

const readReadme = (callBack) => {
    fs.readFile('./README.md', 'utf8', (err, data)=>{
        if (err){
        console.log('Tienes un error');
    } else {
       link(data);
    }

    });
    };  
    readReadme();

    const link = (data) => {
        console.log(data)
        let regularExp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
        let links = data.match(regularExp);
        if (links) {
            console.log(links)
        } else {
            console.log(error)
        }

    };

