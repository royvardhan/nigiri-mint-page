"use client";

import sushiNft from "../../smol-frontend-assets/images/sushi-nft.png";
import bgImg from "../../smol-frontend-assets/images/sushi-background.png";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import Image from "next/image";
import { useMint } from "@/app/hooks/useMint";
import useScreenType from "@/app/hooks/useScreenType";

const Home = () => {
  const { open, close } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { data, isLoading, isSuccess, write } = useMint();
  const { isMonitor, isLaptop, isMobile } = useScreenType();
  const testArr = [
    "98b8c - 0.1 ETH - 4h 5m ago",
    "98b8c - 0.1 ETH - 4h 5m ago",
    "98b8c - 0.1 ETH - 4h 5m ago",
  ];

  return (
    <main
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          minWidth: "780px",
          height: "100vh",
          backgroundColor: "#D06666",
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "105%",
          backgroundPositionX: "-100px",
          backgroundSize: "90%",
        }}
      >
        <span
          style={{
            fontSize: "96px",
            fontWeight: "700",
            color: "white",
            padding: "25px 31px",
          }}
        >
          Nigiri
        </span>
        <div
          style={{
            color: "white",
            fontSize: "96px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            wordBreak: "break-all",
            position: "absolute",
            top: "0",
            marginLeft: "624px",
          }}
        >
          <div>握</div>
          <div>り</div>
          <div>寿</div>
          <div>司</div>
        </div>
        <div
          style={{
            width: "500px",
            height: "910px",
            color: "rgba(255, 255, 255, 0.08)",
            fontSize: "400px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            wordBreak: "break-all",
            position: "absolute",
            top: "203px",
            marginLeft: "73px",
            overflow: "hidden",
          }}
        >
          <div>握</div>
          <div>り</div>
          <div>寿</div>
          <div>司</div>
        </div>
      </div>

      <button
        style={{
          width: "212px",
          height: "54px",
          right: "0",
          top: "0",
          position: "fixed",
          borderRadius: "8px",
          margin: "14px",
          border: "none",
          backgroundColor: "#D06666",
          color: "white",
          fontSize: "24px",
          fontWeight: "400",
          cursor: "pointer",
        }}
        onClick={() => open()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {isConnected && address ? (
            <Image src="./evm.svg" alt="evm" height={25} width={25} />
          ) : null}
          {isConnected && address
            ? `...${address.slice(address.length - 8, address.length)}`
            : "Connect Wallet"}
        </div>
      </button>
      <div
        style={{
          marginTop: "129px",
          marginLeft: "84px",
          marginRight: "33px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: !isMonitor ? "72px" : "96px",
              fontWeight: "700",
            }}
          >
            Join our family!
          </div>
          <div
            style={{
              fontSize: !isMonitor ? "36px" : "48px",
              fontWeight: "400",
            }}
          >
            We are a community of chefs
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "68px",
          }}
        >
          <div
            style={{
              marginRight: "51px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${sushiNft.src})`,
                height: !isMonitor ? "288px" : "385px",
                width: !isMonitor ? "288px" : "385px",
                borderRadius: "8px",
                border: "2px solid #CDCDCD",
                marginBottom: "30px",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#D06666",
                marginTop: "20px",
                color: "white",
                textAlign: "center",
                borderRadius: "8px",
                fontSize: !isMonitor ? "36px" : "48px",
                fontWeight: "400px",
                cursor: "pointer",
                marginBottom: "30px",
              }}
              onClick={isConnected && write != null ? () => write() : undefined}
            >
              Mint
            </div>
            <p>Cost: 0.02 ETH</p>
          </div>
          <div
            style={{
              width: "395px",
            }}
          >
            <div
              style={{
                fontSize: !isMonitor ? "36px" : "48px",
                fontWeight: "400",
              }}
            >
              Activity
            </div>
            {testArr.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    marginTop: "20px",
                    borderRadius: "8px",
                    backgroundColor: "#79969F",
                    height: !isMonitor ? "55px" : "98px",
                    width: !isMonitor ? "222px" : "395px",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: !isMonitor ? "14px" : "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Image src="./evm.svg" alt="evm" height={12} width={12} />
                    {data}
                  </div>
                </div>
              );
            })}
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                cursor: "pointer",
                width: !isMonitor ? "222px" : "395px",
                justifyContent: "flex-end",
                fontSize: !isMonitor ? "16px" : "24px",
              }}
            >
              Load More
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
