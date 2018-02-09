var fs = require("fs")

fs.readdirSync('src').forEach(file => {
  console.log(file)
  fs.readFile(`src/${file}`, "utf-8", (err, data) => {
    if (err) {
      return console.log("Error reading file ", file)
    }
    fs.writeFileSync(`./examples/src/app/ngx-credit-cards/${file}`, data)
  })
})