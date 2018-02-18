var fs = require("fs")


function writeDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    console.log(`${dir}/${file}`)
    if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
      writeDir(`${dir}/${file}`)
    } else {
      fs.readFile(`${dir}/${file}`, "utf-8", (err, data) => {
        if (err) {
          console.log("Error reading file ", file)
        } else {
          fs.writeFileSync(`./examples/src/app/ngx-credit-cards/${dir.replace("src", "")}/${file}`, data)
        }
      })
    }
  })
}

writeDir('src')