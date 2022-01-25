import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => {
        return {
            description: 'ler livro',
            list: [{
                    _id: 1,
                    description: 'pagar fatura do cartão',
                    done: true
                },
                {
                    _id: 2,
                    description: 'Reunião com o time',
                    done: false
                },
                {
                    _id: 3,
                    description: 'Consulta média na quinta',
                    done: false
                }
            ]
        }
    }
})

export default rootReducer