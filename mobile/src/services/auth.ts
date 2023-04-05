interface Response {
  token:string
  user:{
    id:string,
    name:string,
    email:string
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token:'fasiuadsiusansiudniuafisdbfisdbfsdofoudfnousbfdiuo',
        user: {
          id:'f1b94895-7470-451f-a0be-be4d7c8c5809',
          name:'Felipe',
          email:'felipekarah@hotmail.com'
        }
      })
    }, 2000)
  })
}