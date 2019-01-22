const fs = require("fs");
const modelTemplate = require("./templates/model");
const ctrlTemplate = require("./templates/ctrl");
const routeTemplate = require("./templates/route");
const testTemplate = require("./templates/test");
const compressing = require("compressing");
const rimraf = require("rimraf");

const removeFolder = () =>
  new Promise(resolve => {
    rimraf("data", function() {
      rimraf("backend.tar", function() {
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
  });

const createBE = async (req, res) => {
  try {
    const { listModels } = req.body;

    const listPromise = [];
    // re-create data folder
    await removeFolder();

    listModels.forEach(nameSchema => {
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
    await compressing.tar.compressDir("data", "routes/backend.tar");

    res.download("routes/backend.tar");
    // res.json({
    //   code: 200
    // });
  } catch (error) {
    res.json({
      code: 400,
      error
    });
  }
};

module.exports = createBE;
