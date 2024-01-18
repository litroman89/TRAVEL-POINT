/// <reference types="vite/client" />
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type HttpResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

type UseHttpResponse<T> = {
  loading: boolean;
  request: (
    url: string,
    method?: HttpMethod,
    body?: any
  ) => Promise<HttpResponse<T>>;
  error: string | null;
};
