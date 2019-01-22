module.exports = model => `
import {
  testGet,
  testPost,
  testDelete,
  testUpdate,
  testOther,
  hostApp
} from "PATH_TO_SEED/helperTest";
import { admin, ${model.toLowerCase()}s } from "PATH_TO_SEED/seed";
import ${model} from "PATH_TO_MODEL_TEST/models/${model.toLowerCase()}";

const initalData = {
  dataSeed: ${model.toLowerCase()}s,
  model: ${model},
  token: "access_token "+ admin.token,
  url: "/cms/${model.toLowerCase()}s"
};

describe("### SERVICE", () => {
  const data = {
    thumbnail: "question 1",
    detail: "3",
    deteAndTime: "thu 6 ngay 13"
  };

  testGet(initalData);
  testPost(initalData, data);
  testDelete(initalData);
  testUpdate(initalData, data);
});

`;
