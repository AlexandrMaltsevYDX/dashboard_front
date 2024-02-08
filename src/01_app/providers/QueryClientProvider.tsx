import React from "react";
import {QueryClientProvider as TSQueryClientProvider} from "react-query";
import {queryClient} from "~shared/lib/react-query/queryClient.ts";

type Props = {
  children: React.ReactNode;
};
const QueryClientProvider = (props: Props) => {
  return (
    <TSQueryClientProvider client={queryClient}>
      {props.children}
    </TSQueryClientProvider>
  );
};

export default QueryClientProvider;
