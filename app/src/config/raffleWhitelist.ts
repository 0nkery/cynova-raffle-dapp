import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  ['6e9g2aFU7QPT4Gv2Tb2Ae5WWQGZAFSsaebK3E3ay3hD', { name: 'dRafflenet #1' }],
  [
    '6e9g2aFU7QPT4Gv2Tb2Ae5WWQGZAFSsaebK3E3ay3hD',
    {
      name: 'dRaffle for the win',
      alternatePurchaseMints: [
        new PublicKey('72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh'),
      ],
    },
  ],
  [
    '6e9g2aFU7QPT4Gv2Tb2Ae5WWQGZAFSsaebK3E3ay3hD',
    { name: 'dRaffle with a loooooooooooooooong name' },
  ],
  [
    '6scsG1BuD1GhAYgHCbzKLqvgMJjijzWTAgGmj9mhBwFz',
    {
      name: 'Oh my dRaffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '6JME6pp24bUzNjMbLhKMJ8E4hYhnh6QWVPcLybtEHmtu',
    {
      name: 'Cynova Raffle #1',
      overviewImageUri: 'raffle1.png',
    },
  ],
  [
    'GqbsxQjDLT8nhTbb2YB19G8G7dh6PkMjwAUFYKBXPATn',
    {
      name: 'Cynova Raffle #2',
      overviewImageUri: 'raffle2.png',
    },
  ],
    [
    '6xMGWhfV5nNQ2wHG2LUakQC17SwxGS2EHPNHnJkDwnRq',
    {
      name: 'Cynova Raffle #3',
      overviewImageUri: 'raffle3.webp',
    },
  ]
  ],
);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
