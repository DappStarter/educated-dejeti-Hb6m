require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain million heavy close bottom gesture'; 
let testAccounts = [
"0xf67b842cd9cbf9bcb99bb50988cd3a6d70b5262e309740e12864ce7f5d3d7016",
"0xfe8638d2177475503858d712ce44d2f42c5a3859c6b6fc3ada9bc2920ae5cb61",
"0x79b0c014f4284f35b39cffd6ca1e7f77d623d88866d52d4d0c37fd7423839dcb",
"0xb44dd1425d7665c209ea9419f3405747e570420d003834e808593a64f929b431",
"0xe64342540c0060ecb6e7d52020ed9d04b50fe140afb97422b300f695b3c81cda",
"0x11ca4a39ec75658569c7d9c236c55171d414f97247950c701b81ee6f48e19654",
"0x951a72c6704e0596fa00a8e29516e4269565c911f2aca3baf2a7b1db2462e98c",
"0xe1420165476e6b6448d17877aa9b5f3f3344df70b13dd1c6b2d5ff543dc939ad",
"0x7f9f6a1111bc0f6128a0872cb4968b166171074a90c55b2a732dc182d38c46a7",
"0xa08a8637cc91581bc55be8c666c4bd57d93055905788d5c4812d42dbb64f809c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

