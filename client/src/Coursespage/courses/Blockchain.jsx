import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Blockchain Fundamentals",
    lessons: [
      {
        title: "What is Blockchain?",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/web3-icon1.svg",
        content: `A blockchain is a distributed, immutable ledger used to record transactions across a decentralized network.

📌 Key Concepts:
- Decentralization
- Cryptographic hash
- Blocks & chains
- Peer-to-peer (P2P) networking

Example Use Cases:
- Cryptocurrencies
- Supply chain tracking
- Digital identity

🔗 Learn More:
- https://www.ibm.com/topics/what-is-blockchain
- https://ethereum.org/en/developers/docs/blockchain-basics/`,
      },
      {
        title: "Consensus Mechanisms",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/web3-icon2.svg",
        content: `Consensus ensures all nodes in a network agree on the data.

⚙️ Common Algorithms:
- Proof of Work (PoW)
- Proof of Stake (PoS)
- Delegated PoS
- Byzantine Fault Tolerance (BFT)

💡 Use:
PoW = Bitcoin  
PoS = Ethereum 2.0

🔗 Docs:
- https://ethereum.org/en/developers/docs/consensus-mechanisms/`,
      },
    ],
  },
  {
    number: "02",
    title: "Ethereum & Smart Contracts",
    lessons: [
      {
        title: "What is Ethereum?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/web3-icon3.svg",
        content: `Ethereum is a decentralized platform that supports smart contracts.

🌍 Key Points:
- Turing-complete language support (Solidity)
- Ether (ETH) as native currency
- EVM (Ethereum Virtual Machine)

🔗 Resources:
- https://ethereum.org/en/what-is-ethereum/
- https://docs.ethhub.io/ethereum-basics/ethereum-overview/`,
      },
      {
        title: "Smart Contracts & Solidity",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/web3-icon4.svg",
        content: `Smart contracts are self-executing programs stored on blockchain.

🛠 Example Solidity Code:
\`\`\`solidity
pragma solidity ^0.8.0;
contract HelloWorld {
  string public greet = "Hello, Web3!";
}
\`\`\`

✍️ Notes:
- Immutable once deployed
- Deployed via transactions

🔗 Learn:
- https://soliditylang.org/
- https://remix.ethereum.org/`,
      },
    ],
  },
  {
    number: "03",
    title: "Web3 & Decentralized Applications (dApps)",
    lessons: [
      {
        title: "What is Web3?",
        lesson: "Lesson 01",
        duration: "30 Minutes",
        icon: "/assets/web3-icon5.svg",
        content: `Web3 refers to a new internet era powered by blockchain.

🔍 Core Ideas:
- User-owned identity (wallets)
- No central authority
- Token incentives and governance

Web3 Stack: Wallets, Nodes, Protocols, dApps

🔗 Overview:
- https://web3.foundation/
- https://ethereum.org/en/web3/`,
      },
      {
        title: "dApp Architecture",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/web3-icon6.svg",
        content: `dApps (Decentralized Applications) run on a blockchain backend with a Web3 frontend.

🧱 Layers:
- Frontend (React, etc.)
- Web3 Provider (MetaMask, WalletConnect)
- Smart contract backend

Example:
- Uniswap
- OpenSea

🔗 Guides:
- https://ethereum.org/en/developers/tutorials/`,
      },
    ],
  },
  {
    number: "04",
    title: "Wallets, Tokens & Gas",
    lessons: [
      {
        title: "Crypto Wallets & MetaMask",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/web3-icon7.svg",
        content: `Wallets store private keys used to sign blockchain transactions.

🔐 Types:
- Custodial vs Non-Custodial
- Hot vs Cold wallets

🦊 MetaMask:
- Browser extension
- Interacts with Ethereum dApps

🔗 MetaMask:
- https://metamask.io/
- https://docs.metamask.io/`,
      },
      {
        title: "Tokens & Gas Fees",
        lesson: "Lesson 02",
        duration: "40 Minutes",
        icon: "/assets/web3-icon8.svg",
        content: `Tokens are digital assets built on blockchains.

🏷️ Standards:
- ERC-20: Fungible tokens (e.g., USDT)
- ERC-721: NFTs (Non-Fungible Tokens)

⛽ Gas:
- Fee paid for executing transactions
- Denominated in gwei (1 ETH = 10⁹ gwei)

🔗 ERC Docs:
- https://ethereum.org/en/developers/docs/standards/tokens/`,
      },
    ],
  },
  {
    number: "05",
    title: "Tools & Ecosystem",
    lessons: [
      {
        title: "Development Tools (Remix, Hardhat)",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/web3-icon9.svg",
        content: `🛠 Popular tools for Ethereum smart contract development:

- **Remix IDE**: Web-based Solidity IDE
- **Hardhat**: Local dev environment with EVM testing

🧪 Features:
- Deploy/test contracts
- Run scripts
- Debugging support

🔗 Resources:
- https://remix.ethereum.org/
- https://hardhat.org/`,
      },
      {
        title: "Explorers & Ecosystem",
        lesson: "Lesson 02",
        duration: "30 Minutes",
        icon: "/assets/web3-icon10.svg",
        content: `🧭 Blockchain explorers like Etherscan let users inspect transactions and contracts.

📈 Ecosystem Overview:
- Protocols (e.g., Chainlink, Aave)
- Networks (Ethereum, Polygon, Arbitrum)
- Oracles & Bridges

🔗 Explore:
- https://etherscan.io/
- https://defillama.com/`,
      },
    ],
  },
];
const Blockchain = () => {
  const [activeLesson, setActiveLesson] = useState({
    moduleIndex: null,
    lessonIndex: null,
  });

  const toggleLesson = (moduleIndex, lessonIndex) => {
    if (
      activeLesson.moduleIndex === moduleIndex &&
      activeLesson.lessonIndex === lessonIndex
    ) {
      setActiveLesson({ moduleIndex: null, lessonIndex: null });
    } else {
      setActiveLesson({ moduleIndex, lessonIndex });
    }
  };

  return (
    <div className="group-104">
      <Navbar />

      <div className="course-title-description">
        <div className="heading">Blockchain & Web3 Intro</div>
        <div className="paragraph">
          This course is your entry point into the world of decentralized
          technology. You'll explore the basics of blockchain, how
          cryptocurrencies work, and what Web3 really means. Get hands-on
          insights into the technology powering Bitcoin, Ethereum, NFTs, and
          smart contracts.
        </div>
      </div>

      <div
        className="container"
        style={{ backgroundImage: `url(${courseHtmlBanner})` }}
      ></div>

      <div
        className={`container2 ${
          activeLesson.moduleIndex !== null ? "blurred-background" : ""
        }`}
      >
        <div className="sub-container">
          {lessonsData.map((module, moduleIndex) => (
            <div className="course-card" key={moduleIndex}>
              <div className="number">{module.number}</div>
              <div className="heading2">{module.title}</div>
              <div className="course-items-container">
                {module.lessons.map((lesson, lessonIndex) => {
                  const _isActive =
                    activeLesson.moduleIndex === moduleIndex &&
                    activeLesson.lessonIndex === lessonIndex;

                  return (
                    <div
                      key={lessonIndex}
                      className={
                        lessonIndex === 1 ? "feature-item2" : "feature-item"
                      }
                      onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className={
                          lessonIndex === 2
                            ? "text-container2"
                            : "text-container"
                        }
                      >
                        <div className="heading3">{lesson.title}</div>
                        <div className="text">{lesson.lesson}</div>
                      </div>

                      <div className="click-to-enroll">
                        <h1>Enroll</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeLesson.moduleIndex !== null && (
        <>
          <div
            className="lesson-overlay"
            onClick={() =>
              setActiveLesson({ moduleIndex: null, lessonIndex: null })
            }
          ></div>
          <div className="lesson-popup">
            <button
              className="close-btn"
              onClick={() =>
                setActiveLesson({ moduleIndex: null, lessonIndex: null })
              }
            >
              ×
            </button>
            <div className="popup-title">
              {
                lessonsData[activeLesson.moduleIndex].lessons[
                  activeLesson.lessonIndex
                ].title
              }
            </div>
            <pre>
              {
                lessonsData[activeLesson.moduleIndex].lessons[
                  activeLesson.lessonIndex
                ].content
              }
            </pre>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Blockchain;
