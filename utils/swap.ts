import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';
import Web3 from 'web3'

/**
 * Singleton for NFT Swap
 * @param url Provider URL
 * @returns nftSwap
 */
function init(url:string) {
    return new NftSwapV4(new Web3.providers.HttpProvider(url) as any,  null as any)
}