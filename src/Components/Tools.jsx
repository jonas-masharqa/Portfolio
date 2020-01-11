import React from 'react'
import { Table, Container } from 'semantic-ui-react'

const Tools = () => {

  const header = (
    <>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Frameworks & Libraries</Table.HeaderCell>
          <Table.HeaderCell>Frameworks & Libraries</Table.HeaderCell>
          <Table.HeaderCell>Frameworks & Libraries</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </>
  )

  const body = (
    <>
      
    </>
  )

  return (
    <>
    <Container>
      <Table>
        {header}
      </Table>
    </Container>
    </>
  )
}

export default Tools
