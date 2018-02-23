
import gql from 'graphql-tag'

const module = function(data){
    const query = gql`
        query{
            userOne(filter:{email:"${data.email}"}){
                name,
                age,
                gender,
                _id
            }
        }
    `
    return query
}

export default module

