const fs = require('fs');
const script = {
  command: {
    print: function (message) {
      console.log(message);
    }
  }
};

function interpret(code) {
  const match = code.match(/scrirt\.command\.(\w+)\('([^']*)'\)/);
  if (match) {
    const functionName = match[1];
    const argument = match[2];
    script.command[functionName](argument);
  }
}

const args = process.argv.slice(2);

fs.readFile(args[0], 'utf8', function (err, data) {
  if (err) throw err;
  interpret(data);
});
