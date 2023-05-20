import axios from "axios";
import { ethers } from "ethers";

interface balanceInput {
  address: string;
  tag: string;
}

export const getProvider = async () => {
  // const provider = new ethers.JsonRpcApiProvider()
};

export const getMaticBalance = async (data: balanceInput) => {
  const response = await axios.post(
    // TODO: call url
    `https://api-testnet.polygonscan.com/api?module=account&action=balance&address=${data.address}&apikey=${process.env.API_KEY}`
  );

  return response.data;
};

export const getGasFee = async () => {
  const gasFee = await axios(
    "https://gasstation-testnet.polygon.technology/zkevm"
  );
  return gasFee.data;
};
