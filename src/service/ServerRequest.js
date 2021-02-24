import axios from "axios";
import * as _ from "lodash";

const pending = [];

const ServerRequest = {
  request: (httpMethod, args) => {
    const endPoint = args[0];
    const host = process.env.REACT_APP_API_URL || "";
    const url = `${host}${endPoint}`;
    const cancel = axios.CancelToken.source();

    const opts = {
      cancelToken: cancel.token,
      headers: {},
      method: httpMethod,
      url,
      ...(args[2] || {}),
    };
    if (args[1]) {
      if (httpMethod === "get") {
        opts.params = args[1];
      } else {
        opts.data = args[1];
      }
    }

    pending.push(cancel);
    return axios(opts)
      .then((res) => {
        pending.splice(pending.indexOf(cancel), 1);
        return res;
      })
      .catch((err) => {
        pending.splice(pending.indexOf(cancel), 1);
        if (axios.isCancel(err)) {
          console.log("err");
        } else {
          throw err;
        }
      });
  },
  get: (...args) => {
    return ServerRequest.request("get", args);
  },
  post: (...args) => {
    return ServerRequest.request("post", args);
  },
  put: (...args) => {
    return ServerRequest.request("put", args);
  },
  patch: (...args) => {
    return ServerRequest.request("patch", args);
  },
  delete: (...args) => {
    return ServerRequest.request("delete", args);
  },
  errorHandler: (error) => {
    if (_.get(error, "response.status") === 401) {
      const pathname = window.location.hash
        ? window.location.hash.replace("#", "")
        : "";
      return {
        payload: pathname,
        type: "ERROR",
      };
    } else {
      return false;
    }
  },
};

export default ServerRequest;
