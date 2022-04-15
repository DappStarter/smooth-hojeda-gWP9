require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard reflect sad erosion good another army gesture'; 
let testAccounts = [
"0x9cd9824e35e6b95e77f8209d1bbf5dfa314699b88c44686af0d94d1f25db9acf",
"0x2c46b3cefba3acec69f9f94b31eb3b863422ae7f8ad98d74f8cdb4d9ad828547",
"0x55cd4aad0511ea8529e3182f61ec4dc5d1bbe9189437180eced20aa66cf3044f",
"0xdbbea6532c69eef04b916b4e3deaece41a8ffda86b1efa355e45f0afe2495938",
"0x9dbbac1806f675ac4088df7ce57ee561254a88611013821188a1998301bdbc5f",
"0x714b2352548e565c759d33afa3014453e125a026ad0b259f0fde7cafb9a25b79",
"0x292f620c2c9160df5879395cd1dc3243a06f970e5ab03ca3157f87dd98babe10",
"0x23e322fd8b3cb0cbd0e454b03967cee303940034e939a7790c481eee0db07156",
"0xed7cf39fb06fbc894c62c7ec23b087b575c98f77ca5435fd23c5a9f29dcb6b79",
"0x457bb8cd55fc99bb5fd427ec8c055b558addafc03c0038a0333e7f36065dc479"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


