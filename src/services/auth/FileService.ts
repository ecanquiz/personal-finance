import Http from "../../utils/Http";

export default {
  uploadFile(payload: any) {
    return Http.post(payload.endpoint, payload.file);
  },
};
