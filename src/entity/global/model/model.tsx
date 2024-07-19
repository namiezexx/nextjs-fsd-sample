type ApiResponse<T> = {
  success: boolean;
  code: string;
  message: string;
  aid: string;
  data: T;
};
