export const abi :any[]=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_nomPro",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_montant",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "ajouterPropositon",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "closeVote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "donateur",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "Don",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "fairDon",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nom",
				"type": "string"
			}
		],
		"name": "inscritDonnateur",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nom",
				"type": "string"
			}
		],
		"name": "inscritPorteurProjet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "propositionAselectionner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "voterProposition",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "donateurs",
		"outputs": [
			{
				"internalType": "string",
				"name": "nom",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "estActive",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "avote",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "donateur",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "porteursProjets",
		"outputs": [
			{
				"internalType": "string",
				"name": "nom",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "estActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "propositionGagnante",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nomProp",
						"type": "string"
					},
					{
						"internalType": "address payable",
						"name": "porteurProjet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "montant",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "enum Donation.EtatProposition",
						"name": "etat",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "nbVote",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "donEcour",
						"type": "uint256"
					}
				],
				"internalType": "struct Donation.Proposition",
				"name": "p",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "propositionIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nomProp",
						"type": "string"
					},
					{
						"internalType": "address payable",
						"name": "porteurProjet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "montant",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "enum Donation.EtatProposition",
						"name": "etat",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "nbVote",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "donEcour",
						"type": "uint256"
					}
				],
				"internalType": "struct Donation.Proposition",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "propositions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nomProp",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "porteurProjet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "montant",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "enum Donation.EtatProposition",
				"name": "etat",
				"type": "uint8"
			},
			{
				"internalType": "uint32",
				"name": "nbVote",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "donEcour",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "propositionSelectionIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nomProp",
						"type": "string"
					},
					{
						"internalType": "address payable",
						"name": "porteurProjet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "montant",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "enum Donation.EtatProposition",
						"name": "etat",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "nbVote",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "donEcour",
						"type": "uint256"
					}
				],
				"internalType": "struct Donation.Proposition",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalProposition",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalPropsitionSelectione",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]