import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { NigriAbi } from "../abi/Nigiri";
import { toBigInt } from "ethers";
import {
  BASE_MINT_PRICE,
  NIGIRI_ADDRESS,
  ZERO_ADDRESS,
} from "../Config/constants";
const { ethers } = require("ethers");

interface MintResult {
  data: any | null;
  isLoading: boolean;
  isSuccess: boolean;
  write: any | null;
}

export const useMint = (): MintResult => {
  const { isConnected, address } = useAccount();
  const addressHash = ethers.keccak256(isConnected ? address : ZERO_ADDRESS);
  const price = toBigInt(addressHash) % BASE_MINT_PRICE;
  const { config } = usePrepareContractWrite({
    address: NIGIRI_ADDRESS,
    abi: NigriAbi,
    functionName: "mint",
    value: price,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  if (isConnected) {
    return { data, isLoading, isSuccess, write };
  } else {
    return {
      data: null,
      isLoading: false,
      isSuccess: false,
      write: undefined,
    };
  }
};
