import gql from 'graphql-tag'

function gqlController() {

  /* Queries */
  const APOLLO_OBJ = {
    pairs: {
      query: gql`
        query getPair($id: ID!) {
          pairs (where: { id: $id }) {
            id,
            token0Price,
            token1Price,
            reserve0,
            reserve1
          }
        }
      `,
      variables: () => {
        return { 
          id: "0x06ad23978f67ae8cc76c54b74993b31a816bac2b" 
        };
      }
    }
  };

  /* Methods */
  this.getPairs = () => APOLLO_OBJ.pairs;

  return this;
}

export default new gqlController();