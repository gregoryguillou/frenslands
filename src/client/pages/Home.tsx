import React, { useMemo, useEffect, useState } from "react";
import {
  useStarknet,
  useStarknetCall,
  useStarknetInvoke,
  useStarknetTransactionManager,
  InjectedConnector,
} from "@starknet-react/core";
import { TransactionList } from "../components/TransactionList";
import { toBN } from "starknet/dist/utils/number";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from 'gsap';

// import { GetBuildingCount } from "../components/Buildings/GetBuildingCount";
// import { BuildBuildings } from "../components/Buildings/BuildBuildings";
// import { GetBuildings } from "../components/Buildings/GetBuildings";
import { ConnectWallet } from "../components/ConnectWallet";

import {Notifications} from '../components/Notifications'
import { transaction, uint256 } from "starknet";

import { useMapsContract } from "../hooks/maps";
import { useWorldsContract } from "../hooks/worlds";
import { useResourcesContract } from "../hooks/resources";
import { useERC1155Contract } from "../hooks/erc1155";
import { useFrensCoinsContract } from "../hooks/frenscoins";
import { useMinterContract } from "../hooks/minter";

import { useGameContext } from "../hooks/useGameContext";

export default function Home() {
  // const { account } = useStarknet();
  // const { available, connect, disconnect } = useConnectors();
  let navigate = useNavigate();
  const { account, connect, connectors, disconnect } = useStarknet();
  const { transactions } = useStarknetTransactionManager()
  const injected = useMemo(() => new InjectedConnector(), []);

  const [minting, setMinting] = useState(false);
  const [settingUp, setSettingUp] = useState(false)

  const [watch, setWatch] = useState(true);
  const { contract: worlds } = useWorldsContract();
  const { contract: maps } = useMapsContract();
  const { contract: resources } = useResourcesContract();
  const { contract: erc1155 } = useERC1155Contract();
  const { contract: frenscoins } = useFrensCoinsContract();
  const { contract: minter } = useMinterContract();

  const { setAddress, updateTokenId, address, tokenId, frensCoins, fetchMapType } = useGameContext();

  // console.log('transactions', transactions)
  // console.log('address front', address)

  useEffect(() => {
    if (account) {
      setAddress(account as string);
    }
  }, [account])

  useEffect(() => {
    if (account && !tokenId) {
      updateTokenId(account);
    }
  }, [account, tokenId])

  // Rotation world
  useEffect(() => {
    gsap.timeline().to('.frensLandsWorld', {
      rotation: 1440,
      duration: 880,
      repeat: -1,
      ease: "none"
    })
  })

  // UseEffect transactions 

  const { data: fetchBalanceNFTResult } = useStarknetCall({
    contract: maps,
    method: "balanceOf",
    args: [account],
    options: { watch },
  });

  const BalanceNFTValue = useMemo(() => {
    console.log("BalanceNFTResult", fetchBalanceNFTResult);
    if (fetchBalanceNFTResult && fetchBalanceNFTResult.length > 0) {
      var elem = uint256.uint256ToBN(fetchBalanceNFTResult[0]);
      console.log("elem", elem);
      var balance = elem.toNumber();

      console.log("Balance NFT value test", balance);

      if (balance == 1 && account) updateTokenId(account)

      return { NFTbalance: balance };
    }
  }, [fetchBalanceNFTResult]);

  const { data: fetchGameStatus } = useStarknetCall({
    contract: worlds,
    method: "get_game_status",
    args: [tokenId],
    options: { watch },
  });

  // Fetch gameStatus
  const GameStatusValue = useMemo(() => {
    console.log("GameStatusResult", fetchGameStatus);
    if (fetchGameStatus && fetchGameStatus.length > 0) {
      var elem = uint256.uint256ToBN(fetchGameStatus[0]);
      console.log("status game", fetchGameStatus);
      var balance = elem.toNumber();

      return { gameStatus: balance };
    }
  }, [fetchGameStatus, tokenId ]);

  const { data: fetchtokenType } = useStarknetCall({
    contract: maps,
    method: "tokenURI",
    args: [tokenId],
    options: { watch },
  });

  // Fetch tokenType
  const tokenTypeValue = useMemo(() => {
    console.log("fetchtokenType", fetchtokenType);
    if (fetchtokenType && fetchtokenType.length > 0) {
      var elem = uint256.uint256ToBN(fetchtokenType[0]);
      console.log("Token URI", fetchtokenType);
      var balance = elem.toString();

      fetchMapType(balance)

      return { tokenType: balance };
    }
  }, [fetchtokenType, account, tokenId]);

  // Invoke functions
  const {
    data: dataGetMap,
    loading: loadingGetMap,
    invoke: getMapInvoke,
  } = useStarknetInvoke({
    contract: worlds,
    method: "get_map",
  });

  const {
    data: dataStartGame,
    loading: loadingStartGame,
    invoke: startGameInvoke,
  } = useStarknetInvoke({
    contract: worlds,
    method: "start_game",
  });

  const mintMap = () => {
    console.log("invoking mintingMap", Date.now());
    getMapInvoke({
      args: [
        minter?.address,
        maps?.address
      ],
      metadata: {
        method: "get_map",
        message: "Mint Frens Lands map",
      },
    });
    setMinting(true);
  };

  useEffect(() => {
    var data = transactions.filter((transactions) => (transactions?.transactionHash) === dataGetMap);
    console.log('data minting', data);
  }, [minting, transactions])

  useEffect(() => {
    var data = transactions.filter((transactions) => (transactions?.transactionHash) === dataStartGame);
    console.log('data starting game', data);
  }, [settingUp, transactions, dataStartGame])


  const startGame = () => {
    console.log('startingGame invoke')
    if (tokenId) {
      startGameInvoke({
        args: [
          uint256.bnToUint256(tokenId),
          maps?.address,
          frenscoins?.address,
         resources?.address
        ],
        metadata: {
          method: "start_game",
          message: "Starting a game of Frens Lands",
        },
      });
      if (dataStartGame) setSettingUp(true)
    } else {
      console.log('Missing tokenId')
    }
  }

  // console.log('balance NFT', BalanceNFTValue && BalanceNFTValue.NFTbalance)

  return (
    <>
      <div className="backgroundImg relative pixelated">

        <div className="popUpNotifs">
          {/* {transactions && transactions.length > 0 ? 
            <div>
              {
                transactions.map((transaction : any) => {
                  return <Notifications key={transaction.transactionHash}transaction={transaction}/>
                })
              }
            </div>
            : 
            <div>pas de tx</div>
          } */}
        </div>

      <img className="absolute pixelated frensLandsLogo" src="resources/front/UI_GameTitle.png" 
          style={{width : "640px", height: "640px", marginTop: '-165px', marginLeft: "320px", zIndex: "1"}} />

      <img className="absolute pixelated frensLandsWorld" src="resources/front/UI_MainScreenPlanet.png" 
          style={{width : "640px", height: "640px", marginTop: '180px', marginLeft: "320px"}} />

          {/* <p className="text-white">My balance NFT: {BalanceNFTValue && BalanceNFTValue.NFTbalance}</p> */}
          {account && BalanceNFTValue && (BalanceNFTValue.NFTbalance == 0 || BalanceNFTValue.NFTbalance == 1) &&
          <>
            <img className="absolute" src="resources/maps/FrensLand_NFTs_V2.png" style={{height: "256px", width: "256px", marginLeft: "512px", marginTop: "290px"}} />
            {/* <img className="absolute" src="resources/maps/FrensLand_NFTs_V3.png" style={{height: "256px", width: "256px", marginLeft: "512px", marginTop: "290px"}} />
            <img className="absolute" src="resources/maps/FrensLand_NFTs_V4.png" style={{height: "256px", width: "256px", marginLeft: "512px", marginTop: "290px"}} />
            <img className="absolute" src="resources/maps/FrensLand_NFTs_V5.png" style={{height: "256px", width: "256px", marginLeft: "512px", marginTop: "290px"}} />
            <img className="absolute" src="resources/maps/FrensLand_NFTs_V6.png" style={{height: "256px", width: "256px", marginLeft: "512px", marginTop: "290px"}} /> */}
          </>
          }
              {account && 
                BalanceNFTValue && BalanceNFTValue.NFTbalance == 0 &&
                <div style={{height: "128px", width: "128px", marginTop: "414px", marginLeft: "576px"}} className="absolute"> 
                  <div>
                    <button className="pixelated btnMint" onClick={() => mintMap()} style={{marginLeft: "-36px", marginTop: "120px"}}></button>
                  </div>
                </div>
              }
              {account && BalanceNFTValue && BalanceNFTValue.NFTbalance == 1 &&
                  <>
                    <div style={{height: "128px", width: "128px", marginTop: "510px", marginLeft: "576px"}} className="absolute"> 
                    {/* Check que le game est started */}
                      <button className="pixelated btnPlay" onClick={() => startGame()}></button>
                    </div>
                    {/* <button className="pixelated btnPlay" onClick={() => navigate("/game")}></button> */}
                  </>
              }
              {!account &&
                <div style={{height: "128px", width: "128px", marginTop: "414px", marginLeft: "576px"}} className="absolute"> 
                  <ConnectWallet/>
                </div>
              }
      </div>
    </>
  );
}
