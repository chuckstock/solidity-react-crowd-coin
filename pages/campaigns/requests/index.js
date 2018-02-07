import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from '../../../routes'
import Layout from '../../../components/Layout'

export default class RequestIndex extends Component {
  static async getInitialProps(props) {
    return { address: props.query.address }
  }

  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Requests</Button>
          </a>
        </Link>
      </Layout>
    )
  }
}
