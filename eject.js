var fs = require("fs-extra");
var path = require("path");

var printMessage = require("print-message");

try {
    fs.copySync(
        path.join(__dirname, "themes"),
        path.join(process.cwd(), "themes")
    );
    printMessage(
        [
            "Theme has been copied at " +
                path.join(process.cwd(), "themes"),
            "Head over to the docs (https://github.com/namnh240795/react-native-easy-themes/blob/master/README.md) for detailed information on customization"
        ],
        {
            color: "yellow",
            borderColor: "green"
        }
    );
} catch (err) {
  console.log("Error: " + err);
}