import { Keypair } from '@stellar/stellar-sdk';

import prisma from '../config/database';
import { AppError } from '../types';
import type { CreateWalletOptions, WalletWithKeys } from '../types';
import { encrypt } from '../utils/crypto';

const FRIENDBOT_URL = 'https://friendbot.stellar.org';

async function fundTestnetAccount(publicKey: string): Promise<void> {
  const response = await fetch(`${FRIENDBOT_URL}?addr=${publicKey}`);

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new AppError(502, `Friendbot funding failed: ${response.status} ${body}`);
  }
}

export const WalletService = {
  async createWallet(options: CreateWalletOptions): Promise<WalletWithKeys> {
    const user = await prisma.user.findUnique({
      where: { id: options.userId },
    });

    if (!user) {
      throw new AppError(404, 'User not found');
    }

    const keypair = Keypair.random();
    const publicKey = keypair.publicKey();
    const secretKey = keypair.secret();

    const secretKeyEncrypted = encrypt(secretKey);

    const wallet = await prisma.wallet.create({
      data: {
        userId: options.userId,
        publicKey,
        secretKeyEncrypted,
        walletType: options.walletType,
        network: options.network,
      },
    });

    if (options.network === 'testnet') {
      await fundTestnetAccount(publicKey);
    }

    return {
      id: wallet.id,
      publicKey: wallet.publicKey,
      secretKey,
    };
  },
};
