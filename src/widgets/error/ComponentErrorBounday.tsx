"use client";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const ComponentErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ErrorBoundary fallbackRender={ComponentError}>{children}</ErrorBoundary>
  );
};

export const ComponentError = ({ error }: FallbackProps) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-[12px] border-2 p-4 mx-4">
      <p>컴포넌트 렌더링이 실패하였습니다.</p>
      <p>동일한 현상이 계속될 경우 문의 주시기 바랍니다.</p>
    </div>
  );
};
