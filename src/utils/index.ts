import axios from "axios";

interface balanceInput {
  address: string;
  tag: string;
}

export const getMaticBalance = async (data: balanceInput) => {
  const response = await axios.post(
    // TODO: call url
    `https://api-testnet.polygonscan.com/api?module=account&action=balance&address=${data.address}&apikey=${process.env.API_KEY}`
  );
  //   const response = await axios.post(
  //     // TODO: call url
  //     `https://api-testnet.polygonscan.com/api
  //  ?module=account
  //  &action=balance
  //  &address=${data.address}
  //  &apikey=${process.env.API_KEY}`
  //   );

  return response.data;
};

export const getGasFee = async () => {};
