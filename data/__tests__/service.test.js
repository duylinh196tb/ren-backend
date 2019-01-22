
import {
  testGet,
  testPost,
  testDelete,
  testUpdate,
  testOther,
  hostApp
} from "PATH_TO_SEED/helperTest";
import { admin, services } from "PATH_TO_SEED/seed";
import Service from "PATH_TO_MODEL_TEST/models/service";

const initalData = {
  dataSeed: services,
  model: Service,
  token: "access_token "+ admin.token,
  url: "/cms/services"
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

