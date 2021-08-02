const fs = require("fs");
const dir = "./cart/"
const suffix = ""
const files = fs.readdirSync(dir).forEach(x => {
  if(x.includes("png")){
      fs.rename(dir + x, dir + x.split(".png")[0].replace(/[^A-Z0-9]+/ig, "_").toLowerCase()+suffix+'.png', (err) => {
        if (err) throw err;
        console.log('Rename complete!');
    })
  }else if(x.includes("jpg")){
      fs.rename(dir + x, dir + x.split(".jpg")[0].replace(/[^A-Z0-9]+/ig, "_").toLowerCase()+suffix+'.jpg', (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
  }else if(x.includes("svg")){
    fs.rename(dir + x, dir  + x.split(".svg")[0].replace(/[^A-Z0-9]+/ig, "_").toLowerCase()+suffix+'.svg', (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
  }
});
