import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const NFT_CONTRACT_ADDRESS =
  "0x7950815232DedD221bAE305eB4f9388d1a713528";
export const abi = [
  {
    type: "function",
    name: "addParticipants",
    inputs: [
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "campaigns",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "string",
        name: "title",
        internalType: "string",
      },
      {
        type: "string",
        name: "description",
        internalType: "string",
      },
      {
        type: "string",
        name: "location",
        internalType: "string",
      },
      {
        type: "string",
        name: "date",
        internalType: "string",
      },
      {
        type: "string",
        name: "duration",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "deadline",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amountCollected",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "imageIpfs",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "numberOfParticipants",
        internalType: "uint256",
      },
      {
        type: "bool",
        name: "closed",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createCampaign",
    inputs: [
      {
        type: "address",
        name: "_owner",
        internalType: "address",
      },
      {
        type: "string",
        name: "_title",
        internalType: "string",
      },
      {
        type: "string",
        name: "_description",
        internalType: "string",
      },
      {
        type: "string",
        name: "location",
        internalType: "string",
      },
      {
        type: "string",
        name: "date",
        internalType: "string",
      },
      {
        type: "string",
        name: "duration",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "_deadline",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "_imageIpfs",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "donateToCampaign",
    inputs: [
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getCampaigns",
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "uint256",
            name: "id",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "owner",
            internalType: "address",
          },
          {
            type: "string",
            name: "title",
            internalType: "string",
          },
          {
            type: "string",
            name: "description",
            internalType: "string",
          },
          {
            type: "string",
            name: "location",
            internalType: "string",
          },
          {
            type: "string",
            name: "date",
            internalType: "string",
          },
          {
            type: "string",
            name: "duration",
            internalType: "string",
          },
          {
            type: "uint256",
            name: "deadline",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "amountCollected",
            internalType: "uint256",
          },
          {
            type: "string",
            name: "imageIpfs",
            internalType: "string",
          },
          {
            type: "address[]",
            name: "participantsAddress",
            internalType: "address[]",
          },
          {
            type: "uint256",
            name: "numberOfParticipants",
            internalType: "uint256",
          },
          {
            type: "address[]",
            name: "donators",
            internalType: "address[]",
          },
          {
            type: "uint256[]",
            name: "donations",
            internalType: "uint256[]",
          },
          {
            type: "bool",
            name: "closed",
            internalType: "bool",
          },
        ],
        internalType: "struct CrowdFunding.Campaign[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCampaignsByAddress",
    inputs: [
      {
        type: "address",
        name: "_owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "uint256",
            name: "id",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "owner",
            internalType: "address",
          },
          {
            type: "string",
            name: "title",
            internalType: "string",
          },
          {
            type: "string",
            name: "description",
            internalType: "string",
          },
          {
            type: "string",
            name: "location",
            internalType: "string",
          },
          {
            type: "string",
            name: "date",
            internalType: "string",
          },
          {
            type: "string",
            name: "duration",
            internalType: "string",
          },
          {
            type: "uint256",
            name: "deadline",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "amountCollected",
            internalType: "uint256",
          },
          {
            type: "string",
            name: "imageIpfs",
            internalType: "string",
          },
          {
            type: "address[]",
            name: "participantsAddress",
            internalType: "address[]",
          },
          {
            type: "uint256",
            name: "numberOfParticipants",
            internalType: "uint256",
          },
          {
            type: "address[]",
            name: "donators",
            internalType: "address[]",
          },
          {
            type: "uint256[]",
            name: "donations",
            internalType: "uint256[]",
          },
          {
            type: "bool",
            name: "closed",
            internalType: "bool",
          },
        ],
        internalType: "struct CrowdFunding.Campaign[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDonators",
    inputs: [
      {
        type: "uint256",
        name: "_id",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address[]",
        name: "",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "numberOfCampaigns",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
];
export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Certificate",
    imgUrl: createCampaign,
    link: "/UploadCertificate",
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/Validate",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/Payment",
  },

  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/Logout",
  },
];
