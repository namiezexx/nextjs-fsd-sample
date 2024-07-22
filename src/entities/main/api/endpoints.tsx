export const API_ENDPOINTS = {
  MAIN: {
    CONTENTS: {
      method: "GET",
      path: `/api/v1/nextjs/main/contents`,
      revalidate: 5,
    },
    BANNER: {
      method: "GET",
      path: `/api/v1/nextjs/main/banners`,
      revalidate: 5,
    },
    PRIVATE: {
      method: "GET",
      path: `http://localhost:8080/api/v1/nextjs/main/private`,
      revalidate: 5,
    },
  },
};
