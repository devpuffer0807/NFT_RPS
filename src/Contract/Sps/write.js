import { toast } from "react-toast";
import { callBetInfoList } from "./read";

export const createRoom = async (walletInfo, size, choice, token, tokenAmount) => {
    try {
        const betInfo = await callBetInfoList(walletInfo, size);
        const res = await walletInfo.spsContract.methods.createRoom(size, choice, token, tokenAmount).send({ from: walletInfo?.account, value: betInfo.price });
        toast.success("Created room successfully.");
        return res;
    } catch (e) {
        toast.error("Creating room is failed.");
        return 0;
    }

}