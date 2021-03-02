import ServerRequest from "../ServerRequest";

const DataApi = {
  /**
   * Получение данных о устройствах.
   * @return {Promise}
   */
  getData(payload) {
    return ServerRequest.get(
      `/?rows=5&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
  },
};

export default DataApi;
