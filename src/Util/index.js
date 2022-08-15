import Web3 from "web3";
import StoneImg from "../assets/image/game_room/stone.png";
import PaperImg from "../assets/image/game_room/paper.png";
import ScissorsImg from "../assets/image/game_room/scissors.png";
import QuestionImg from "../assets/image/game_room/question.png";

export const toEther = (wei) => {
    return Web3.utils.fromWei(wei, 'ether');
}

export const toWei = (eth) => {
    return Web3.utils.toWei(eth);
}

export const getDate = (timestampBlockchain) => {
    const date = new Date(parseInt(timestampBlockchain)*1000);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

export const getRPSStatusStr = (statusCode) => {
    const status = ["NONE", "ROCK", "PAPER", "SCISSORS"];
    return status[statusCode];
}

export const getRPStatusImg = (statusCode) => {
    const statusImgs = [
        QuestionImg,
        StoneImg,
        PaperImg,
        ScissorsImg,
    ];
    return statusImgs[statusCode];
}