export const nameTrimming = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)

    if (/[a-zA-Z]/.test(char)) {
      return char.toUpperCase()
    }
  }

  return 'S'
}
