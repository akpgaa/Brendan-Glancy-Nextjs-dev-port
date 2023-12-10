import React, { useEffect, useRef, useState } from "react";
// import { greetings } from "../portfolio";
import dynamic from "next/dynamic";

const ParticleBg = dynamic(() => import("particles-bg"), {
  ssr: false,
});

import QRCode from "react-qr-code";
import {
  Button,
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

// import GreetingLottie from "../components/DisplayLottie";
// import { useRouter } from "next/dist/client/router";
// import SocialLinks from "../components/SocialLinks";

const QRUI = (props) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  const [functionName, setFunctionName] = useState("");
  const [url, setUrl] = useState("");

  function handleChange(e) {
    if (e.target.name == "Name") setFunctionName(e.target.value);
    if (e.target.name == "url") setUrl(e.target.value);
  }
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let qrLink = "";
  // Client-side-only code
  if (origin) {
    qrLink = `${origin}/photo/${functionName}?url=${url}`;
  }

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-warning">
            <span />
            <span />
            <span />
            <span />
            <span />
            <ParticleBg type="polygon" bg={true} num={1} />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: "400px",
                      width: "100%",
                    }}
                  >
                    <div>
                      <Form>
                        <FormGroup>
                          <Label for="exampleText">Function Name</Label>
                          <Input
                            id="exampleText"
                            name="Name"
                            type="textarea"
                            onChange={handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleText">URL</Label>
                          <Input
                            id="exampleText"
                            onChange={handleChange}
                            name="url"
                            type="text"
                          />
                        </FormGroup>
                      </Form>
                    </div>
                    <a href={qrLink} target="_blank" rel="noopener">
                      {qrLink}
                    </a>

                    <br />
                  </div>
                </Col>
                <Col lg="6">
                  <QRCode
                    size={512}
                    style={{
                      height: "auto",
                      maxWidth: "400px",
                      width: "300px",
                    }}
                    value={qrLink}
                    viewBox={`0 0 256 256`}
                  />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default QRUI;
