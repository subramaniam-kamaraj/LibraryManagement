import React from 'react';
import {Table, Row, Col, Button, Jumbotron} from 'reactstrap';

const Tablelist = ({list}) => {
  return (
    <Jumbotron>
      <h1> Book Data Base</h1>
      <Table bordered dark striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Serial Number</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th> No of page</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map (lis => {
            return (
              <tr key={lis._id}>
                <th scope="row">1</th>
                <td>lis.serialno</td>
                <td>lis.name</td>
                <td>lis.author</td>
                <td>lis.publisher</td>
                <td>lis.pageno</td>
                <td><Button color="primary">Edit</Button></td>
                <td><Button color="danger">Delete</Button></td>
              </tr>
            );
          })}

        </tbody>
      </Table>
    </Jumbotron>
  );
};
export default Tablelist;
