export const navLinks = ['Link 1', 'Link 2', 'Link 3']
export const authLinks = {
  isAuthenticated: [
    {
      display: 'Profile',
      name: 'Profile'
    },
    {
      display: 'Logout',
      name: 'Logout'
    }
  ],
  isNotAuthenticated: [
    {
      display: 'Login',
      name: 'Login'
    },
    {
      display: 'Signup',
      name: 'Signup'
    }
  ]
}

export default {
  navLinks,
  authLinks
}