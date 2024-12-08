import { useAuth } from '@clerk/nextjs'

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

export function getUserId(): string {
    const { isLoaded, userId, sessionId, getToken } = useAuth()
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return sessionId || 'guest-user'
  }
  return userId
}