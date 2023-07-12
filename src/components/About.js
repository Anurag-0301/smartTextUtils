import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
export default function About(props) {
  // console.log("this is about page")
  const [btn, setBtn] = useState("Enable Dark Mode");

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: props.mode === "dark" ? "1px dotted white" : "1px dotted black",
  });

  return (
    <>
      <div>
        <div
          className="container my-5"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "rgb(21,37,43)" : "white",
            
          }}
        >
          <h1>About Us</h1>
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor:
                props.mode === "dark" ? "rgb(33,37,41)" : "white",
              border:
                props.mode === "dark" ? "1px dotted white" : "1px dotted black",
            }}
          >
            <div
              className="accordion-item"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor:
                  props.mode === "dark" ? "rgb(33,37,41)" : "white",
                border:
                  props.mode === "dark"
                    ? "1px dotted white"
                    : "1px dotted black",
              }}
            >
              <h2
                className="accordion-header"
                id="flush-headingOne"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(33,37,41)" : "white",
                  border:
                    props.mode === "dark"
                      ? "1px dotted white"
                      : "1px dotted black",
                }}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      props.mode === "dark" ? "rgb(33,37,41)" : "white",
                    border:
                      props.mode === "dark"
                        ? "1px dotted white"
                        : "1px dotted black",
                  }}
                >
                  Analyze Your Text
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(33,37,41)" : "white",
                  border:
                    props.mode === "dark"
                      ? "1px dotted white"
                      : "1px dotted black",
                }}
              >
                <div
                  className="accordion-body"
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      props.mode === "dark" ? "rgb(33,37,41)" : "white",
                    border:
                      props.mode === "dark"
                        ? "1px dotted white"
                        : "1px dotted black",
                  }}
                >
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor:
                  props.mode === "dark" ? "rgb(33,37,41)" : "white",
                border:
                  props.mode === "dark"
                    ? "1px dotted white"
                    : "1px dotted black",
              }}
            >
              <h2
                className="accordion-header"
                id="flush-headingTwo"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(33,37,41)" : "white",
                  border:
                    props.mode === "dark"
                      ? "1px dotted white"
                      : "1px dotted black",
                }}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      props.mode === "dark" ? "rgb(33,37,41)" : "white",
                    border:
                      props.mode === "dark"
                        ? "1px dotted white"
                        : "1px dotted black",
                  }}
                >
                  Free to use
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(33,37,41)" : "white",
                  bborder:
                    props.mode === "dark"
                      ? "1px dotted white"
                      : "1px dotted black",
                }}
              >
                <div
                  className="accordion-body"
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      props.mode === "dark" ? "rgb(33,37,41)" : "white",
                    border:
                      props.mode === "dark"
                        ? "1px dotted white"
                        : "1px dotted black",
                  }}
                >
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor:
                  props.mode === "dark" ? "rgb(33,37,41)" : "white",
                border:
                  props.mode === "dark"
                    ? "1px dotted white"
                    : "1px dotted black",
              }}
            >
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      props.mode === "dark" ? "rgb(33,37,41)" : "white",
                    border:
                      props.mode === "dark"
                        ? "1px dotted white"
                        : "1px dotted black",
                  }}
                >
                  Browser Compatible
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(33,37,41)" : "white",
                  border:
                    props.mode === "dark"
                      ? "1px dotted white"
                      : "1px dotted black",
                }}
              >
                <div
                  className="accordion-body"
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    backgroundColor:
                      props.mode === "dark" ? "rgb(33,37,41)" : "white",
                    border:
                      props.mode === "dark"
                        ? "1px dotted white"
                        : "1px dotted black",
                  }}
                >
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
