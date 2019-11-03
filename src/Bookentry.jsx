import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tablelist from './Tablelist';
import {InputGroup, Input, InputGroupAddon, Row, Col, Button} from 'reactstrap';

const Bookentry = () => {
  const [name, setname] = useState ('');
  const [author, setauthor] = useState ('');
  const [publisher, setpublisher] = useState ('');
  const [pageno, setpageno] = useState ('');
  const [serialno, setserialno] = useState ('');
  const [list, setlist] = useState ([]);

  useEffect (
    () => {
      axios.get ('http://localhost:4000/getlib').then (res => {
        setlist (res.data);
      });
    },
    [list]
  );

  const add = (name, author, publisher, pageno, serialno) => {
    axios
      .post ('http://localhost:4000/postlib', {
        name: name,
        author: author,
        publisher: publisher,
        pageno: pageno,
        serialno: serialno,
      })
      .then (success => {
        setlist ([...list, success.data]);
        console.log (name);
        setname ('');
        setpublisher ('');
        setauthor ('');
        setpageno ('');
        setserialno ('');
      });
  };

  return (
    <div className="jumbotron jumbotron-dark">
      <center>
        <h1>New Book Entry</h1>
      </center>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Book Name</InputGroupAddon>
        <Input
          placeholder="spiderman"
          onChange={e => setname (e.target.value)}
          value={name}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Author</InputGroupAddon>
        <Input
          placeholder="Stan Lee"
          onChange={e => setauthor (e.target.value)}
          value={author}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Publisher</InputGroupAddon>
        <Input
          placeholder="spider"
          onChange={e => setpublisher (e.target.value)}
          value={publisher}
        />
      </InputGroup>
      <br />
      <Row>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">No of page</InputGroupAddon>
            <Input
              placeholder="eg:123"
              onChange={e => setpageno (e.target.value)}
              value={pageno}
            />
          </InputGroup>
          <br />
        </Col>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Serial no</InputGroupAddon>
            <Input
              placeholder=""
              onChange={e => setserialno (e.target.value)}
              value={serialno}
            />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Button
        color="danger"
        block
        onClick={() => {
          add (name, author, publisher, pageno, serialno);
        }}
      >
        {' '}
        Add{' '}
      </Button>

      <br />
      <Tablelist list={(name, author, publisher, serialno, pageno)} />
    </div>
  );
};

export default Bookentry;
