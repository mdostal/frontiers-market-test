import { User } from '@clerk/nextjs/server'

export function getGuestUser(): User {
  return {
    id: 'guest-user',
    firstName: 'Guest',
    lastName: 'User',
    fullName: 'Guest User',
    username: 'guest',
    primaryEmailAddress: null,
    emailAddresses: [],
    primaryPhoneNumber: null,
    phoneNumbers: [],
    profileImageUrl: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    imageUrl: '',
    hasImage: false,
    gender: '',
    birthday: '',
    primaryWeb3Wallet: null,
    web3Wallets: [],
    externalId: null,
    publicMetadata: {},
    privateMetadata: {},
    unsafeMetadata: {},
  }
}

export function getUserId(user: User | null): string {
  return user?.id || 'guest-user'
}