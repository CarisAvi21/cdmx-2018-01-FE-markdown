// hacer la ruta absolta 
const path = require('path');
const validateRout = (file) => {
  if (path.isAbsolute(file)) {
    console.log('Ruta absoluta');
    console.log(path.isAbsolute());
  } else {
    console.log('Ruta relativa, se convierte en absoluta');
    console.log(path.resolve());
  }
};
validateRout('./README.md');

// funcion que lee el readme
const fs = require('fs');
const readReadme = (callback) => {
  fs.readFile('./README.md', 'utf8', (err, data)=>{
    if (err) {
      console.log('Tienes un error');
    } else {
      link(data);
    }
  });
};  
readReadme();

// función para encontrar loslinks en el readme 
const link = (data) => {
  console.log(data);
  const regularExp = /(https?):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
  const links = data.match(regularExp);
  if (links) {
    console.log(links);
  } else {
    console.log(error);
  }
};

// función para leer los links


// función para validar los links
