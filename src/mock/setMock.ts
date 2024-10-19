import MockAdapter from "axios-mock-adapter";

type Config<TResponse = unknown> = {
  url: string;
  method: "onGet" | "onDelete" | "onPost" | "onPut" | "onPatch";
  response: TResponse;
  /*   Отключить мок*/
  passThrough: boolean;
  adapter: MockAdapter;
};
type ErrorConfig = {
  error: Error;
  repeat: "no-error";
};

export default function setMock(config: Config, errorConfig: ErrorConfig) {
  console.log(`mock ${config.url} is set`)
  const { url, response, adapter, method, passThrough } = config;

  if (passThrough) {
    // отключить мок
    adapter[method](url).passThrough();
    return;
  }

  const { error, repeat } = errorConfig;

  adapter[method](url).reply(200, response);
}
