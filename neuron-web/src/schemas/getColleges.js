import gql from 'graphql-tag'

const query = gql`
  query{
    collegeMany{
      name,
      phone,
      email
    }
  }
`
export default query;