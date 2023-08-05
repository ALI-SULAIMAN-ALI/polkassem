// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable sort-keys */
import acalaLogo from '~assets/parachain-logos/acala-logo.jpg';
import acuityLogo from '~assets/parachain-logos/acuity-logo.jpg';
import integriteeLogo from '~assets/parachain-logos/integritee-logo.png';
import altairLogo from '~assets/parachain-logos/altair-logo.jpeg';
import amplitudeLogo from '~assets/parachain-logos/amplitude-logo.png';
import astarLogo from '~assets/parachain-logos/astar-logo.png';
import automataLogo from '~assets/parachain-logos/automata-logo.jpg';
import basiliskLogo from '~assets/parachain-logos/basilisk-logo.jpg';
import pioneerLogo from '~assets/parachain-logos/bitcountrypioneer-logo.jpg';
import calamariLogo from '~assets/parachain-logos/calamari-logo.png';
import centrifugeLogo from '~assets/parachain-logos/centrifuge-logo.png';
import cereLogo from '~assets/parachain-logos/cere-logo.jpg';
import collectivesLogo from '~assets/parachain-logos/collectives-logo.png';
import composableFinanceLogo from '~assets/parachain-logos/composable-finance-logo.png';
import crustLogo from '~assets/parachain-logos/crust-logo.png';
import equilibriumLogo from '~assets/parachain-logos/equilibrium-logo.png';
import frequencyLogo from '~assets/parachain-logos/frequency-logo.png';
import gearLogo from '~assets/parachain-logos/gear-logo.jpg';
import genshiroLogo from '~assets/parachain-logos/genshiro.png';
import gmordieLogo from '~assets/parachain-logos/gmordie-logo.png';
import hashedLogo from '~assets/parachain-logos/hashed-logo.png';
import heikoLogo from '~assets/parachain-logos/heiko-logo.png';
import hydradxLogo from '~assets/parachain-logos/hydradx-logo.jpg';
import karuraLogo from '~assets/parachain-logos/karura-logo.jpg';
import khalaLogo from '~assets/parachain-logos/khala-logo.png';
import kiltLogo from '~assets/parachain-logos/kilt-logo.png';
import kusamaLogo from '~assets/parachain-logos/kusama-logo.gif';
import kylinLogo from '~assets/parachain-logos/kylin-logo.png';
import mantaLogo from '~assets/parachain-logos/manta-logo.jpg';
import moonbaseLogo from '~assets/parachain-logos/moonbase-logo.png';
import moonbeamLogo from '~assets/parachain-logos/moonbeam-logo.png';
import moonriverLogo from '~assets/parachain-logos/moonriver-logo.png';
import myriadLogo from '~assets/parachain-logos/myriad-logo.png';
import parallelLogo from '~assets/parachain-logos/parallel-logo.jpg';
import pendulumLogo from '~assets/parachain-logos/pendulum-logo.png';
import picassoLogo from '~assets/parachain-logos/picasso-logo.png';
import pichiuLogo from '~assets/parachain-logos/pichiu-logo.png';
import polkadexLogo from '~assets/parachain-logos/polkadex-logo.jpg';
import polkadotLogo from '~assets/parachain-logos/polkadot-logo.jpg';
import polymeshLogo from '~assets/parachain-logos/polymesh-logo.png';
import robonomicsLogo from '~assets/parachain-logos/robonomics-logo.jpg';
import shidenLogo from '~assets/parachain-logos/shiden-logo.jpg';
import snowLogo from '~assets/parachain-logos/snow-logo.png';
import tanganikaLogo from '~assets/parachain-logos/tanganika-logo.png';
import tidechainLogo from '~assets/parachain-logos/tidechain-logo.png';
import turingLogo from '~assets/parachain-logos/turing-logo.png';
import varaLogo from '~assets/parachain-logos/vara-logo.png';
import westendLogo from '~assets/parachain-logos/westend-logo.jpg';
import xxcoinLogo from '~assets/parachain-logos/xxcoin-logo.png';

import * as types from '../types';

export const network = {
	POLKADOT: 'polkadot',
	KUSAMA: 'kusama',
	ACALA: 'acala',
	ACUITY: 'acuity',
	ALTAIR: 'altair',
	AMPLITUDE: 'amplitude',
	ASTAR: 'astar',
	AUTOMATA: 'automata',
	BASILISK: 'basilisk',
	CALAMARI: 'calamari',
	CENTRIFUGE: 'centrifuge',
	COLLECTIVES: 'collectives',
	COMPOSABLE: 'composable',
	CRUST: 'crust',
	CERE: 'cere',
	CRUSTSHADOW: 'crustshadow',
	EQUILIBRIUM: 'equilibrium',
	FREQUENCY: 'frequency',
	GEAR: 'gear',
	GENSHIRO: 'genshiro',
	GMORDIE: 'gmordie',
	HASHED: 'hashed',
	HEIKO: 'heiko',
	HYDRADX: 'hydradx',
	INTEGRITEE: 'integritee',
	KARURA: 'karura',
	KHALA: 'khala',
	KILT: 'kilt',
	KYLIN: 'kylin',
	MANTA: 'manta',
	MOONBASE: 'moonbase',
	MOONBEAM: 'moonbeam',
	MOONRIVER: 'moonriver',
	MYRIAD: 'myriad',
	PARALLEL: 'parallel',
	PENDULUM: 'pendulum',
	PIONEER: 'pioneer',
	POLKADEX: 'polkadex',
	ROBONOMICS: 'robonomics',
	SNOW: 'snow',
	SHIBUYA: 'shibuya',
	SHIDEN: 'shiden',
	TANGANIKA: 'tanganika',
	TIDECHAIN: 'tidechain',
	PICASSO: 'picasso',
	PICHIU: 'pichiu',
	PICHIUROCOCO: 'pichiu-rococo',
	POLYMESH:'polymesh',
	POLYMESHTEST: 'polymesh-test',
	TURING: 'turing',
	VARA: 'vara',
	WESTEND: 'westend',
	WESTENDCOLLECTIVES: 'westend-collectives',
	XX: 'xx'
};

export const tokenSymbol = {
	ACA: 'ACA',
	ACU: 'ACU',
	ASTR: 'ASTR',
	AMPE: 'AMPE',
	ATA: 'ATA',
	BNC: 'BNC',
	BSX: 'BSX',
	CERE: 'CERE',
	CFG: 'CFG',
	CRU: 'CRU',
	CSM: 'CSM',
	DOL: 'DOL',
	DEV: 'DEV',
	DHX: 'DHX',
	DOT: 'DOT',
	FREN: 'FREN',
	FRQCY: 'FRQCY',
	GLMR: 'GLMR',
	HASH: 'HASH',
	HDX: 'HDX',
	HKO: 'HKO',
	KAR: 'KAR',
	KHA: 'KHA',
	ICZ: 'ICZ',
	KILT: 'KILT',
	KMA: 'KMA',
	KSM: 'KSM',
	KYL: 'KYL',
	LAYR: 'LAYR',
	MOVR: 'MOVR',
	MYRIA: 'MYRIA',
	PARA: 'PARA',
	PCHU: 'PCHU',
	PDEX: 'PDEX',
	PEN: 'PEN',
	SBY: 'SBY',
	SDN: 'SDN',
	TDFY: 'TDFY',
	TUR: 'TUR',
	TOKEN: 'TOKEN',
	TEER: 'TEER',
	PICA: 'PICA',
	POLYX: 'POLYX',
	WND: 'WND',
	XRT: 'XRT',
	UNIT: 'UNIT',
	VARA: 'VARA',
	XX: 'XX'
};

export const chainProperties: types.ChainPropType = {
	[network.POLKADOT]: {
		blockTime: 6000,
		category: 'polkadot',
		chainId: 0,
		logo: polkadotLogo,
		rpcEndpoint: 'wss://rpc.polkadot.io',
		ss58Format: 0,
		subsquidUrl: 'https://squid.subsquid.io/polkadot-polkassembly/graphql',
		tokenDecimals: 10,
		tokenSymbol: tokenSymbol.DOT,
		treasuryProposalBondPercent: '5.00%',
		treasuryProposalMinBond: '100',
		treasuryProposalMaxBond: '500',
		externalLinks: 'https://polkadot.api.subscan.io',
		gTag: 'G-JMMMFDX405',
		rpcEndpoints: [
			{
				label: 'via On-finality',
				key: 'wss://polkadot.api.onfinality.io/public-ws'
			},
			{
				label: 'via Dwellir',
				key: 'wss://polkadot-rpc.dwellir.com'
			},
			{
				label: 'via Parity',
				key: 'wss://rpc.polkadot.io'
			},
			{
				label: 'via Pinknode',
				key: 'wss://public-rpc.pinknode.io/polkadot'
			},
			{
				label: 'via IBP-GeoDNS1',
				key: 'wss://rpc.ibp.network/polkadot'
			},
			{
				label: 'via IBP-GeoDNS2',
				key: 'wss://rpc.dotters.network/polkadot'
			},
			{
				label: 'via RadiumBlock',
				key: 'wss://polkadot.public.curie.radiumblock.co/ws'
			},
			{
				label: 'via LuckyFriday',
				key: 'wss://rpc-polkadot.luckyfriday.io'
			},
			{
				label: 'light client (experimental)',
				key: 'light://substrate-connect/polkadot'
			}
		]
	},
	[network.KUSAMA]: {
		blockTime: 6000,
		category: 'kusama',
		chainId: 0,
		logo: kusamaLogo,
		rpcEndpoint: 'wss://kusama-rpc.polkadot.io',
		ss58Format: 2,
		subsquidUrl: 'https://squid.subsquid.io/kusama-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.KSM,
		treasuryProposalBondPercent: '5.00%',
		treasuryProposalMinBond: '0.6666',
		treasuryProposalMaxBond: '33.3333',
		externalLinks: 'https://kusama.api.subscan.io',
		gTag: 'G-HCSSH2HY4H',
		rpcEndpoints: [
			{
				label: 'via On-finality',
				key: 'wss://kusama.api.onfinality.io/public-ws'
			},
			{
				label: 'via Dwellir',
				key: 'wss://kusama-rpc.dwellir.com'
			},
			{
				label: 'via Parity',
				key: 'wss://kusama-rpc.polkadot.io'
			},
			{
				label: 'via IBP-GeoDNS1',
				key: 'wss://rpc.ibp.network/kusama'
			},
			{
				label: 'via IBP-GeoDNS2',
				key: 'wss://rpc.dotters.network/kusama'
			},
			{
				label: 'via RadiumBlock',
				key: 'wss://kusama.public.curie.radiumblock.co/ws'
			},
			{
				label: 'via LuckyFriday',
				key: 'wss://rpc-kusama.luckyfriday.io'
			},
			{
				label: 'light client (experimental)',
				key: 'light://substrate-connect/kusama'
			}
		]
	},
	[network.ACALA]:{
		blockTime: 12000,
		chainId: 0,
		logo: acalaLogo,
		category: 'polkadot',
		rpcEndpoint: 'wss://acala-polkadot.api.onfinality.io/public-ws',
		ss58Format: 10,
		tokenDecimals: 12,
		subsquidUrl: 'https://squid.subsquid.io/acala-polkassembly/graphql',
		tokenSymbol: tokenSymbol.ACA,
		treasuryProposalBondPercent: '5.00%',
		treasuryProposalMinBond: '10',
		treasuryProposalMaxBond: '50',
		externalLinks: 'https://acala.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.ACUITY]: {
		blockTime: 6000,
		category: 'solo',
		chainId: 0,
		logo: acuityLogo,
		rpcEndpoint: 'wss://freemont.acuity.social',
		ss58Format: 42,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.ACU,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.ALTAIR]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: altairLogo,
		rpcEndpoint: 'wss://altair.api.onfinality.io/public-ws',
		ss58Format: 136,
		subsquidUrl: '',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.BNC,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '100',
		treasuryProposalMaxBond:'500',
		externalLinks: 'https://altair.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.AMPLITUDE]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: amplitudeLogo,
		rpcEndpoint: 'wss://rpc-amplitude.pendulumchain.tech',
		ss58Format: 57,
		subsquidUrl: 'https://squid.subsquid.io/amplitude-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.AMPE,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '10',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://polkaholic.io',
		gTag: 'G-CJQ1ZL472N',
		rpcEndpoints: []
	},
	[network.ASTAR]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 592,
		logo: astarLogo,
		rpcEndpoint: 'wss://astar-rpc.dwellir.com/',
		ss58Format: 5,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.ASTR,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://astar.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.AUTOMATA]: {
		blockTime: 6000,
		category: 'solo',
		chainId: 0,
		logo: automataLogo,
		rpcEndpoint: 'wss://automata.api.onfinality.io/public-ws',
		ss58Format: 88,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.ATA,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '100',
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.BASILISK]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 2090,
		logo: basiliskLogo,
		rpcEndpoint: 'wss://rpc.basilisk.cloud',
		ss58Format: 10041,
		subsquidUrl: 'https://squid.subsquid.io/basilisk-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.BSX,
		treasuryProposalBondPercent: '3%',
		treasuryProposalMinBond: '10000',
		treasuryProposalMaxBond:'50000',
		externalLinks: 'https://basilisk.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.PIONEER]: {
		blockTime: 12000,
		category: 'solo',
		chainId: 0,
		logo: pioneerLogo,
		rpcEndpoint: 'wss://pioneer.api.onfinality.io/public-ws',
		ss58Format: 6,
		subsquidUrl: '',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.BNC,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond:'50',
		externalLinks: 'https://pioneer.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.CALAMARI]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 2084,
		logo: calamariLogo,
		rpcEndpoint: 'wss://calamari.api.onfinality.io/public-ws',
		ss58Format: 78,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.KMA,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://calamari.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.CENTRIFUGE]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: centrifugeLogo,
		rpcEndpoint: 'wss://centrifuge-parachain.api.onfinality.io/public-ws',
		ss58Format: 36,
		subsquidUrl: 'https://squid.subsquid.io/centrifuge-polkassembly/graphql',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.CFG,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1000',
		treasuryProposalMaxBond:'5000',
		externalLinks: 'https://centrifuge.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.CERE]: {
		blockTime: 6000,
		category: 'solo',
		chainId: 0,
		logo: cereLogo,
		rpcEndpoint: 'wss://archive.mainnet.cere.network/ws',
		ss58Format: 54,
		subsquidUrl: 'https://squid.subsquid.io/cere-polkassembly/graphql',
		tokenDecimals: 10,
		tokenSymbol: tokenSymbol.CERE,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '100',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://stats.cere.network',
		gTag: 'G-7E14M1ZSCB',
		rpcEndpoints: []
	},
	//TODO: Aleem=> Need to update collective network, currently using polkadot data
	[network.COLLECTIVES]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: collectivesLogo,
		rpcEndpoint: 'wss://sys.dotters.network/collectives-polkadot',
		relayRpcEndpoints: [
			{ key: 'wss://1rpc.io/dot', label: 'Automata 1RPC' },
			{ key: 'wss://polkadot-public-rpc.blockops.network/ws', label: 'BlockOps' },
			{ key: 'wss://polkadot-rpc.dwellir.com', label: 'Dwellir' },
			{ key: 'wss://polkadot-rpc-tn.dwellir.com', label: 'Dwellir Tunisia' },
			{ key: 'wss://rpc.ibp.network/polkadot', label: 'IBP-GeoDNS1' },
			{ key: 'wss://rpc.dotters.network/polkadot', label: 'IBP-GeoDNS2' },
			{ key: 'wss://rpc-polkadot.luckyfriday.io', label: 'LuckyFriday' },
			{ key: 'wss://polkadot.api.onfinality.io/public-ws', label: 'OnFinality' },
			{ key: 'wss://rpc.polkadot.io', label: 'Parity' },
			{ key: 'wss://polkadot.public.curie.radiumblock.co/ws', label: 'RadiumBlock' },
			{ key: 'wss://dot-rpc.stakeworld.io', label: 'Stakeworld' }
		],
		ss58Format: 0,
		subsquidUrl: 'https://squid.subsquid.io/collectives-polkassembly/graphql',
		tokenDecimals: 10,
		tokenSymbol: tokenSymbol.DOT,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.COMPOSABLE]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: composableFinanceLogo,
		rpcEndpoint: 'wss://rpc.composable.finance',
		ss58Format: 49,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.LAYR,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '5',
		treasuryProposalMaxBond:'1000',
		externalLinks: 'https://composable.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.CRUST]: {
		blockTime: 12000,
		category: 'solo',
		chainId: 0,
		logo: crustLogo,
		rpcEndpoint: 'wss://rpc.crust.network',
		ss58Format: 66,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.CRU,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://crust.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.CRUSTSHADOW]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: crustLogo,
		rpcEndpoint: 'wss://rpc-shadow.crust.network',
		ss58Format: 66,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.CSM,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.EQUILIBRIUM]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: equilibriumLogo,
		rpcEndpoint: 'wss://node.pol.equilibrium.io/',
		ss58Format: 68,
		tokenDecimals: 9,
		tokenSymbol: tokenSymbol.TOKEN,
		subsquidUrl:'https://squid.subsquid.io/equilibrium-polkassembly/graphql',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://equilibrium.api.subscan.io',
		gTag: 'G-PPZV91T0GH',
		rpcEndpoints: []

	},
	[network.FREQUENCY]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: frequencyLogo,
		rpcEndpoint: 'wss://0.rpc.frequency.xyz',
		ss58Format: 90,
		tokenDecimals: 8,
		tokenSymbol: tokenSymbol.FRQCY,
		subsquidUrl: 'https://squid.subsquid.io/frequency-polkassembly/graphql',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: 'G-26N0DJ37DD',
		rpcEndpoints: []
	},
	[network.GEAR]: {
		blockTime: 1000,
		category: 'solo',
		chainId: 0,
		logo: gearLogo,
		rpcEndpoint: 'wss://rpc-node.gear-tech.io:443',
		ss58Format: 42,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.UNIT,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.GENSHIRO]: {
		blockTime: 6000,
		category: 'test',
		chainId: 0,
		logo: genshiroLogo,
		rpcEndpoint: 'wss://testnet.genshiro.io',
		ss58Format: 67,
		tokenDecimals: 9,
		tokenSymbol: tokenSymbol.TOKEN,
		subsquidUrl: '',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://genshiro.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.GMORDIE]: {
		blockTime: 9000,
		category: 'test',
		chainId: 0,
		logo: gmordieLogo,
		rpcEndpoint: 'wss://kusama.gmordie.com',
		ss58Format: 42,
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.FREN,
		subsquidUrl: '',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.HASHED]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: hashedLogo,
		rpcEndpoint: 'wss://c1.hashed.live',
		ss58Format: 42,
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.HASH,
		subsquidUrl: 'https://squid.subsquid.io/hashed-polkassembly/graphql',
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '0.000000066666666',
		treasuryProposalMaxBond: '0.0000033333333',
		externalLinks: '',
		gTag: 'G-KQYQ8N8337',
		rpcEndpoints: []
	},
	[network.HEIKO]: {
		blockTime: 13000,
		category: 'kusama',
		chainId: 0,
		logo: heikoLogo,
		rpcEndpoint: 'wss://heiko-rpc.parallel.fi',
		ss58Format: 63,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.HKO,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.HYDRADX]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: hydradxLogo,
		rpcEndpoint: 'wss://rpc.hydradx.cloud',
		ss58Format: 63,
		subsquidUrl: 'https://squid.subsquid.io/hydradx-polkassembly/graphql',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.HDX,
		treasuryProposalBondPercent: '3%',
		treasuryProposalMinBond: '10000',
		treasuryProposalMaxBond:'50000',
		externalLinks: 'https://hydradx.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.INTEGRITEE]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: integriteeLogo,
		rpcEndpoint: 'wss://integritee-kusama.api.onfinality.io/public-ws',
		ss58Format: 13,
		subsquidUrl: 'https://squid.subsquid.io/integritee-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.TEER,
		treasuryProposalBondPercent: '3%',
		treasuryProposalMinBond: '10000',
		treasuryProposalMaxBond:'50000',
		externalLinks: 'https://integritee.api.subscan.io',
		gTag: 'G-D4LGZ5LEGK',
		rpcEndpoints: []
	},
	[network.KARURA]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: karuraLogo,
		rpcEndpoint: 'wss://karura.api.onfinality.io/public-ws',
		ss58Format: 8,
		subsquidUrl: '',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.KAR,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '5',
		treasuryProposalMaxBond:'25',
		externalLinks: 'https://karura.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.KYLIN]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: kylinLogo,
		rpcEndpoint: 'wss://polkadot.kylin-node.co.uk',
		ss58Format: 42,
		subsquidUrl: '',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.KYL,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.KHALA]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: khalaLogo,
		rpcEndpoint: 'wss://khala.api.onfinality.io/public-ws',
		ss58Format: 30,
		subsquidUrl: '',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.KHA,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://khala.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.KILT]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: kiltLogo,
		rpcEndpoint: 'wss://spiritnet.kilt.io/',
		ss58Format: 38,
		subsquidUrl: 'https://squid.subsquid.io/kilt-polkassembly/graphql',
		tokenDecimals: 15,
		tokenSymbol: tokenSymbol.KILT,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '20',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://spiritnet.api.subscan.io',
		gTag: 'G-J37GVF0HCS',
		rpcEndpoints: []
	},
	[network.MANTA]: {
		blockTime: 12000,
		category: 'solo',
		chainId: 1287,
		logo: mantaLogo,
		rpcEndpoint: 'wss://ws.rococo.dolphin.engineering',
		ss58Format: 78,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.DOL,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.MOONBASE]: {
		blockTime: 12000,
		category: 'test',
		chainId: 1287,
		logo: moonbaseLogo,
		rpcEndpoint: 'wss://wss.api.moonbase.moonbeam.network',
		ss58Format: 0,
		subsquidUrl: 'https://squid.subsquid.io/moonbase-polkassembly/graphql',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.DEV,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://moonbase.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.SHIBUYA]: {
		blockTime: 12000,
		category: 'test',
		chainId: 81,
		logo: shidenLogo,
		rpcEndpoint: 'wss://shibuya-rpc.dwellir.com',
		subsquidUrl: '',
		ss58Format: 5,
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.SBY,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://shibuya.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.MOONBEAM]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 1284,
		logo: moonbeamLogo,
		rpcEndpoint: 'wss://wss.api.moonbeam.network',
		ss58Format: 1284,
		subsquidUrl: 'https://squid.subsquid.io/moonbeam-polkassembly/graphql',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.GLMR,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '100',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://moonbeam.api.subscan.io',
		gTag: 'G-FS09G34H85',
		rpcEndpoints: []
	},
	[network.MOONRIVER]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 1285,
		logo: moonriverLogo,
		rpcEndpoint: 'wss://wss.moonriver.moonbeam.network',
		ss58Format: 1285,
		subsquidUrl: 'https://squid.subsquid.io/moonriver-polkassembly/graphql',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.MOVR,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://moonriver.api.subscan.io',
		gTag: 'G-RMV9VEZFF2',
		rpcEndpoints: []
	},
	[network.MYRIAD]: {
		blockTime: 6000,
		category: 'solo',
		chainId: 0,
		logo: myriadLogo,
		rpcEndpoint: 'wss://ws-rpc.myriad.social',
		ss58Format: 42,
		subsquidUrl: 'https://squid.subsquid.io/myriad-polkassembly/graphql',
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.MYRIA,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://explorer.mainnet.oct.network/myriad',
		gTag: null,
		rpcEndpoints: []
	},
	[network.PARALLEL]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 172,
		logo: parallelLogo,
		rpcEndpoint: 'wss://rpc.parallel.fi',
		ss58Format: 172,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.PARA,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond:'5',
		externalLinks: 'https://parallel.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.PENDULUM]: {
		blockTime: 12000,
		category: 'polkadot',
		chainId: 0,
		logo: pendulumLogo,
		rpcEndpoint: 'wss://rpc-pendulum.prd.pendulumchain.tech:443',
		ss58Format: 56,
		subsquidUrl: 'https://squid.subsquid.io/pendulum-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.PEN,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://polkaholic.io',
		gTag: 'G-EGV0NKCPZG',
		rpcEndpoints: []
	},
	[network.POLKADEX]: {
		blockTime: 12000,
		category: 'solo',
		chainId: 0,
		logo: polkadexLogo,
		rpcEndpoint: 'wss://polkadex.api.onfinality.io/public-ws',
		ss58Format: 88,
		subsquidUrl: 'https://squid.subsquid.io/polkadex-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.PDEX,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: '100',
		externalLinks: 'https://polkadex.api.subscan.io',
		gTag: 'G-EB50MSH198',
		rpcEndpoints: []
	},
	[network.POLYMESH]: {
		blockTime: 6000,
		category: 'solo',
		chainId: 0,
		logo: polymeshLogo,
		rpcEndpoint: 'wss://mainnet-rpc.polymesh.network',
		ss58Format: 12,
		subsquidUrl: 'https://squid.subsquid.io/polymesh-polkassembly/graphql',
		tokenDecimals: 6,
		tokenSymbol: tokenSymbol.POLYX,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://polymesh.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.POLYMESHTEST]: {
		blockTime: 6000,
		category: 'test',
		chainId: 0,
		logo: polymeshLogo,
		rpcEndpoint: 'wss://testnet-rpc.polymesh.live',
		ss58Format: 42,
		tokenDecimals: 6,
		tokenSymbol: tokenSymbol.POLYX,
		subsquidUrl: '',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.PICASSO]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 0,
		logo: picassoLogo,
		rpcEndpoint: 'wss://picasso-rpc.composable.finance',
		ss58Format: 49,
		subsquidUrl: 'https://squid.subsquid.io/picasso-polkassembly/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.PICA,
		treasuryProposalBondPercent: '5.00%',
		treasuryProposalMinBond: '5000',
		treasuryProposalMaxBond: '10000',
		externalLinks: 'https://picasso.api.subscan.io',
		gTag: 'G-2MRWG10DTE',
		rpcEndpoints: []
	},
	[network.PICHIUROCOCO]: {
		blockTime: 12000,
		category: 'test',
		chainId: 172,
		logo: kylinLogo,
		rpcEndpoint: 'wss://pichiu-rococo-01.onebitdev.com',
		ss58Format: 42,
		tokenDecimals: 18,
		subsquidUrl: '',
		tokenSymbol: tokenSymbol.PCHU,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.PICHIU]: {
		blockTime: 12000,
		category: 'test',
		chainId: 0,
		logo: pichiuLogo,
		rpcEndpoint: 'wss://kusama.kylin-node.co.uk',
		ss58Format: 42,
		tokenDecimals: 18,
		subsquidUrl: '',
		tokenSymbol: tokenSymbol.PCHU,
		treasuryProposalBondPercent: '5.00%',
		treasuryProposalMinBond: '5',
		treasuryProposalMaxBond: '25',
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.ROBONOMICS]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 2048,
		logo: robonomicsLogo,
		rpcEndpoint: 'wss://robonomics.api.onfinality.io/public-ws',
		ss58Format: 32,
		subsquidUrl: 'https://squid.subsquid.io/robonomics-polkassembly/graphql',
		tokenDecimals: 9,
		tokenSymbol: tokenSymbol.XRT,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '10',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://robonomics.api.subscan.io',
		gTag: 'G-P13GPB87GC',
		rpcEndpoints: []
	},
	[network.SHIBUYA]: {
		blockTime: 12000,
		category: 'test',
		chainId: 81,
		logo: shidenLogo,
		rpcEndpoint: 'wss://shibuya-rpc.dwellir.com',
		ss58Format: 5,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.SBY,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '100',
		treasuryProposalMaxBond: null,
		externalLinks: 'https://shibuya.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.SHIDEN]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 336,
		logo: shidenLogo,
		rpcEndpoint: 'wss://shiden.api.onfinality.io/public-ws',
		ss58Format: 5,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.SDN,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://shiden.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.SNOW]:{
		blockTime: 12000,
		chainId: 0,
		logo: snowLogo,
		category: 'kusama',
		rpcEndpoint: 'wss://snow-rpc.icenetwork.io',
		ss58Format: 2207,
		tokenDecimals: 18,
		subsquidUrl: 'https://squid.subsquid.io/snow-polkassembly/graphql',
		tokenSymbol: tokenSymbol.ICZ,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://snow.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.TANGANIKA]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 336,
		logo: tanganikaLogo,
		rpcEndpoint: 'wss://tanganika.datahighway.com',
		ss58Format: 42,
		subsquidUrl: '',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.DHX,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.TIDECHAIN]: {
		blockTime: 12000,
		category: 'test',
		chainId: 336,
		logo: tidechainLogo,
		rpcEndpoint: 'wss://rpc.tidefi.io:443',
		ss58Format: 7007,
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.TDFY,
		subsquidUrl: '',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.TURING]: {
		blockTime: 12000,
		category: 'kusama',
		chainId: 2114,
		logo: turingLogo,
		rpcEndpoint: 'wss://turing-rpc.dwellir.com',
		ss58Format: 51,
		subsquidUrl: '',
		tokenDecimals: 10,
		tokenSymbol: tokenSymbol.TUR,
		treasuryProposalBondPercent: '5%',
		treasuryProposalMinBond: '1',
		treasuryProposalMaxBond: '5',
		externalLinks: 'https://turing.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.VARA]: {
		blockTime: 2000,
		category: 'test',
		chainId: 0,
		logo: varaLogo,
		rpcEndpoint: 'wss://archive-rpc.vara-network.io',
		ss58Format: 137,
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.VARA,
		subsquidUrl: 'https://squid.subsquid.io/vara-polkassembly/graphql',
		treasuryProposalBondPercent: '5.00%',
		treasuryProposalMinBond: '20',
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.WESTENDCOLLECTIVES]: {
		blockTime: 6000,
		category: 'test',
		chainId: 0,
		logo: westendLogo,
		rpcEndpoint: 'wss://sys.ibp.network/collectives-westend',
		ss58Format: 0,
		subsquidUrl: 'https://squid.subsquid.io/westend-collectives/graphql',
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.WND,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: '',
		gTag: null,
		rpcEndpoints: []
	},
	[network.WESTEND]: {
		blockTime: 6000,
		category: 'test',
		chainId: 0,
		logo: westendLogo,
		rpcEndpoint: 'wss://kusama-rpc.polkadot.io',
		ss58Format: 0,
		subsquidUrl: '',
		tokenDecimals: 10,
		tokenSymbol: tokenSymbol.WND,
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://westend.api.subscan.io',
		gTag: null,
		rpcEndpoints: []
	},
	[network.XX]: {
		blockTime: 6000,
		category: 'solo',
		chainId: 0,
		logo: xxcoinLogo,
		rpcEndpoint: 'wss://rpc.xx.network',
		ss58Format: 55,
		tokenDecimals: 9,
		tokenSymbol: tokenSymbol.XX,
		subsquidUrl: 'https://squid.subsquid.io/xx-polkassembly/graphql',
		treasuryProposalBondPercent: null,
		treasuryProposalMinBond: null,
		treasuryProposalMaxBond: null,
		externalLinks: 'https://explorer.xx.network',
		gTag: 'G-23WF4VNWK4',
		rpcEndpoints: []
	}
};

export const chainLinks: types.ChainLinksType = {
	[network.POLKADOT]: {
		blockExplorer: 'https://polkadot.api.subscan.io/',
		discord: 'https://discord.gg/wGUDt2p',
		github: 'https://github.com/paritytech/polkadot',
		homepage: 'https://polkadot.network/',
		reddit: 'https://www.reddit.com/r/polkadot',
		telegram: 'https://t.me/PolkadotOfficial',
		twitter: 'https://twitter.com/Polkadot',
		youtube: 'https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw'
	},
	[network.KUSAMA]: {
		blockExplorer: 'https://kusama.api.subscan.io/',
		discord: 'https://discord.gg/9AWjTf8wSk',
		github: 'https://github.com/paritytech/polkadot',
		homepage: 'https://kusama.network/',
		reddit: 'https://www.reddit.com/r/Kusama/',
		telegram: 'https://t.me/kusamanetworkofficial',
		twitter: 'https://twitter.com/kusamanetwork',
		youtube: 'https://www.youtube.com/channel/UCq4MRrQhdoIR0b44GxcCPxw'
	}
};

export const chainDetails: { [index: string]: string} = {
	[network.POLKADOT]: 'Polkadot enables scalability by allowing specialized blockchains to communicate with each other in a secure, trust-free environment. Polkadot is built to connect and secure unique blockchains, whether they be public, permission-less networks, private consortium chains, or oracles and other Web3 technologies. It enables an internet where independent blockchains can exchange information under common security guarantees. Polkadot uses a sophisticated governance mechanism that allows it to evolve gracefully overtime at the ultimate behest of its assembled stakeholders. The stated goal is to ensure that the majority of the stake can always command the network.',
	[network.KUSAMA]: 'Kusama is an early release of Polkadot: a scalable, multichain network for radical innovation. Kusama serves as a proving ground that allows teams and developers to build and deploy a parachain, and experiment with Polkadot’s governance and NPoS functionality in a real environment.'
};

export const addressPrefix: Record<string, number> = {
	'kusama': 2,
	'moonbeam': 1284,
	'moonriver': 1285,
	'moonbase': 1287,
	'polkadot': 0
};
