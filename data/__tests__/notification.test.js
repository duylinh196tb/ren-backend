
import {
  testGet,
  testPost,
  testDelete,
  testUpdate,
  testOther,
  hostApp
} from "PATH_TO_SEED/helperTest";
import { admin, notifications } from "PATH_TO_SEED/seed";
import Notification from "PATH_TO_MODEL_TEST/models/notification";

const initalData = {
  dataSeed: notifications,
  model: Notification,
  token: "access_token "+ admin.token,
  url: "/cms/notifications"
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

