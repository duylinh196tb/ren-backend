const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const fs = require("fs");
const modelTemplate = require("./routes/templates/model");
const ctrlTemplate = require("./routes/templates/ctrl");
const routeTemplate = require("./routes/templates/route");
const testTemplate = require("./routes/templates/test");

const rimraf = require("rimraf");

const removeFolder = () =>
  new Promise(resolve => {
    rimraf("data", function() {
      fs.mkdir("data", () => {
        fs.mkdir("data/models", () => {
          fs.mkdir("data/controllers", () => {
            fs.mkdir("data/routes", () => {
              fs.mkdir("data/__tests__", () => {
                resolve(true);
              });
            });
          });
        });
      });
    });
  });

const write = async () => {
  const listPromise = [];
  // re-create data folder
  await removeFolder();

  ["User", "Service", "Notification"].forEach(nameSchema => {
    // data
    const dataModel = new Uint8Array(Buffer.from(modelTemplate(nameSchema)));
    const dataCtrl = new Uint8Array(Buffer.from(ctrlTemplate(nameSchema)));
    const dataRoute = new Uint8Array(Buffer.from(routeTemplate(nameSchema)));
    const dataTest = new Uint8Array(Buffer.from(testTemplate(nameSchema)));

    // push
    listPromise.push(
      fs.writeFile(
        `data/models/${nameSchema.toLowerCase()}.js`,
        dataModel,
        function() {}
      )
    );
    listPromise.push(
      fs.writeFile(
        `data/controllers/${nameSchema.toLowerCase()}.js`,
        dataCtrl,
        function() {}
      )
    );
    listPromise.push(
      fs.writeFile(
        `data/routes/${nameSchema.toLowerCase()}.js`,
        dataRoute,
        function() {}
      )
    );
    listPromise.push(
      fs.writeFile(
        `data/__tests__/${nameSchema.toLowerCase()}.test.js`,
        dataTest,
        function() {}
      )
    );
  });

  await Promise.all(listPromise);

  // const dataTemplate = modelTemplate("ok");

  // const data = new Uint8Array(Buffer.from("dataTemplate"));
  // fs.writeFile("dsadsa.js", data, function(err, data) {
  //   console.log({ err, data });
  // });
};

write();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1", routes);
app.listen(PORT, () => {
  console.log("> Server running on PORT ", PORT);
});
