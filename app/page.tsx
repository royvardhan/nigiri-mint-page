"use client";

import sushiNft from "../public/sushi-nft.png";
import bgImg from "../public/sushi-background.png";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import Image from "next/image";
import { useMint } from "@/app/hooks/useMint";
import useScreenType from "@/app/hooks/useScreenType";
import { Container } from "../uikit/Container";
import { Box, Typography } from "@/uikit";

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
      <Container
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
        <Typography
          style={{
            paddingTop: "25px",
            paddingLeft: "31px",
          }}
          color="white"
          size="8xl"
          weight="bold"
        >
          Nigiri
        </Typography>

        <Box
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
          <Typography>握</Typography>
          <Typography>り</Typography>
          <Typography>寿</Typography>
          <Typography>司</Typography>
        </Box>
        <Box
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
          <Typography>握</Typography>
          <Typography>り</Typography>
          <Typography>寿</Typography>
          <Typography>司</Typography>
        </Box>
      </Container>

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
      <Container
        style={{
          marginTop: "129px",
          marginLeft: "84px",
          marginRight: "33px",
        }}
      >
        <Box>
          <Typography weight="bold" size={!isMobile ? "6xl" : "8xl"}>
            Join our family!
          </Typography>
          <Typography
            style={{ marginTop: "20px" }}
            weight="regular"
            size={!isMobile ? "3xl" : "5xl"}
          >
            We are a community of chefs
          </Typography>
        </Box>
        <Box
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
            <Box
              style={{
                backgroundImage: `url(${sushiNft.src})`,
                height: !isMonitor ? "288px" : "385px",
                width: !isMonitor ? "288px" : "385px",
                borderRadius: "8px",
                border: "2px solid #CDCDCD",
                marginBottom: "30px",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              style={{
                backgroundColor: "#D06666",
                marginTop: "20px",
                color: "white",
                textAlign: "center",
                borderRadius: "8px",
                cursor: "pointer",
                marginBottom: "30px",
                height: !isMonitor ? "55px" : "98px",
                width: !isMonitor ? "222px" : "395px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={isConnected && write != null ? () => write() : undefined}
            >
              <Typography size={!isMonitor ? "3xl" : "4xl"} weight="regular">
                Mint
              </Typography>
            </Box>
            <Typography>Cost: 0.02 ETH</Typography>
          </div>
          <Box
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
            <Box
              style={{
                display: "flex",
                marginTop: "10px",
                cursor: "pointer",
                width: !isMonitor ? "222px" : "395px",
                justifyContent: "flex-end",
              }}
            >
              <Typography size="lg"> Load More</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Home;
