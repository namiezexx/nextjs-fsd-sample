"use client";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const GlobalErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ErrorBoundary fallbackRender={GlobalError}>{children}</ErrorBoundary>;
};

export const GlobalError = ({ error }: FallbackProps) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>이용에 불편을 드려 죄송합니다.</p>
      <p>동일한 현상이 계속될 경우 문의 주시기 바랍니다.</p>
    </div>
  );
};
