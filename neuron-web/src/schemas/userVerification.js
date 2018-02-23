import gql from 'graphql-tag'

const module = function(data){
    console.log(data)
}

const query = gql`
  query{
    collegeMany{
      name,
      phone,
      email
    }
  }
`

export default module