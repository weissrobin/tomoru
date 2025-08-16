import nextSession from 'next-session'

// ? Session handler for order (simulation)
export const getSession = nextSession({
    cookie: {
    maxAge: 0,
    secure: false,
    httpOnly: true,
    path: '/',
  }
});