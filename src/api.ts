const conta = {
    email: 'be@dio.bank',
    password: '123456',
    name: 'Bernardo Pinheiro'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})