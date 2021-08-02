const fs = require("fs");
const dir= "./cart/"
const files = fs.readdirSync(dir).filter(x => {
  if(x.includes("png")){
    const ex =
      `import ${(x.split(".png")[0]).replace(/[^A-Z0-9]+/ig, "_").toLowerCase()} from "${dir}${x}"\n` 
      const res = ex;
      fs.appendFileSync("./index.js", res);
  }else if(x.includes("jpg")){
    const ex =
      `import ${(x.split(".jpg")[0]).replace(/[^A-Z0-9]+/ig, "_").toLowerCase()} from "${dir}${x}"\n`
      const res = ex;
      fs.appendFileSync("./index.js", res);
  }else if(x.includes("svg")){
    const ex =
      `import ${(x.split(".svg")[0]).replace(/[^A-Z0-9]+/ig, "_").toLowerCase()} from "${dir}${x}"\n`
      const res = ex;
      fs.appendFileSync("./index.js", res);
  }
});

fs.appendFileSync("./index.js", "\nexport {\n")
const expFiles = fs.readdirSync(dir).filter(x => {
  if(x.includes("png")){
    const ex =
      `   ${(x.split(".png")[0]).replace(/[^A-Z0-9]+/ig, "_").toLowerCase()},\n` 
      const res = ex;
      fs.appendFileSync("./index.js", res);
      console.log("File exported");
  }else if(x.includes("jpg")){
    const ex =
      `   ${(x.split(".jpg")[0]).replace(/[^A-Z0-9]+/ig, "_").toLowerCase()},\n`
      const res = ex;
      fs.appendFileSync("./index.js", res);
      console.log("File exported");
  }else if(x.includes("svg")){
    const ex =
      `   ${(x.split(".svg")[0]).replace(/[^A-Z0-9]+/ig, "_").toLowerCase()},\n`
      const res = ex;
      fs.appendFileSync("./index.js", res);
      console.log("File exported");
  }
});
fs.appendFileSync('./index.js', "}\n");