import returnFetch from "return-fetch";

const customFetch = returnFetch({
  baseUrl: "http://localhost:8080",
  headers: { Accept: "application/json" },
  interceptors: {
    request: async (args) => {
      console.log("********* before sending request *********");
      console.log("url:", args[0].toString());
      console.log("requestInit:", args[1], "\n\n");
      return args;
    },

    response: async (response, requestArgs) => {
      console.log("********* after receiving response *********");
      console.log("url:", requestArgs[0].toString());
      console.log("requestInit:", requestArgs[1], "\n\n");
      console.log(response);
      return response;
    },
  },
});

export const serverFetch = async ({
  method,
  path,
  revalidate = 0,
}: {
  method: string;
  path: string;
  revalidate: number;
}) => {
  const res = await customFetch(path, {
    method: method,
    next: {
      revalidate: revalidate,
    },
  });

  const resJson = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  } else {
    console.log("Success to fetch data");
    console.log(res);
    console.log("\n\n");
    console.log(resJson);
    console.log("\n\n");
  }

  return resJson;
};
