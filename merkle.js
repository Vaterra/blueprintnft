const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');

const whitelisted = require('./whitelisted.json');

const leafNodes = whitelisted.map(address => keccak256(address));
const tree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

const root = tree.getRoot();
console.log(`Tree: ${tree.toString()}`);
console.log(`Root: ${tree.getHexRoot()}`);