import API from "./axiosConfig";

export async function login({ email, password}: {email: string, password: string}) {
    return await API.post(
        '/login',
        {email, password},
        {
            expectedErrorReturn: {},
            errorMessage: 'Erro ao fazer login'
        }
    );
}

export async function getBooks() {
    return await API.get('/books', {
        isAuthTokenRequired: true,
        expectedErrorReturn: [],
        errorMessage: 'Erro ao buscar livros'
    });
}

export async function postBook(book: { title: string}) {
    return await API.post(
    '/book',
    JSON.stringify(book),
    {
        isAuthTokenRequired: true,
        expectedErrorReturn: {},
        errorMessage: 'Erro ao cadastrar livro'
    });
}