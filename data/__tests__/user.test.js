
import {
  testGet,
  testPost,
  testDelete,
  testUpdate,
  testOther,
  hostApp
} from "PATH_TO_SEED/helperTest";
import { admin, users } from "PATH_TO_SEED/seed";
import User from "PATH_TO_MODEL_TEST/models/user";

const initalData = {
  dataSeed: users,
  model: User,
  token: "access_token "+ admin.token,
  url: "/cms/users"
};

describe("### USER", () => {
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

