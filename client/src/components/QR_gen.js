import QRCode from 'qrcode';
import { useState } from 'react';
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';

function QRGenerator() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 320, // Adjusted width for better display
      margin: 2,
      color: {
        dark: '#335383FF',
        light: '#EEEEEEFF'
      }
    }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }

      setQr(url);
    });
  };

  return (
    <>
    
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="mb-4">QR Generator</h1>
          <Form>
            <Form.Group controlId="qrContent">
              <Form.Label>Enter Product ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. ID: 1234567890"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={generateQRCode}>
              Generate QR Code
            </Button>
          </Form>
        </Col>
      </Row>

      {qr && (
        <Row className="mt-4">
          <Col>
            <Image src={qr} alt="QR Code" fluid />
          </Col>
          <Col className="d-flex align-items-center">
            <Button
              variant="success"
              className="mt-3 mt-md-0 ml-md-3"
              href={qr}
              download="qrcode.png"
            >
              Download QR Code
            </Button>
          </Col>
        </Row>
      )}
    </Container>
    </>
  );
}

export default QRGenerator;