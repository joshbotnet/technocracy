import { createNetworkInterface } from 'apollo-client'

export default (ctx) => {
  return createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/teachest' })
}
