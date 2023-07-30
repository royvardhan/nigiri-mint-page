import { useContractRead } from "wagmi";
import { NigriAbi } from "../abi/Nigiri";

export const useReadContract = (functionName: string, args?: [any]) => {
  const { data, isError, isLoading } = useContractRead({
    address: "0xE6148AAbfd307f1ebe2A093fc0caB04f214c1183",
    abi: NigriAbi,
    functionName: functionName,
    args: args,
  });

  return { data, isError, isLoading };
};
