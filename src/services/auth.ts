interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'aksdjasjdlkasjdasjd',
        user: {
          name: 'Softcom Tecnologia',
          email: 'fabrica@softcomtecnologia.com.br'
        }
      })
    })
  })
}