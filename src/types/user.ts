export interface User {
  id: string;
  isGuest: boolean;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}