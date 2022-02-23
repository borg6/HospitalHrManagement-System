import Highlight, { defaultProps } from 'prism-react-renderer';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React, { FC } from 'react';
import theme from 'prism-react-renderer/themes/vsDark'; // FIXME: which theme?

const sampleCode = `
const { router, text } = require('bottender/router');

async function SayHi(context) {
  await context.sendText('Hi!');
}

async function Unknown(context) {
  await context.sendText('Sorry, I don’t know what you say.');
}

module.export = function App(context) {
  return router([
    text('hi', SayHi),
    text('*', Unknown),
  ]);
};`.trim();

const HomeSplash: FC = () => {
  return (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="hero-content">
          <h1>Bottender</h1>
          <h2>
            A framework for building <br />
            conversational user interfaces.
          </h2>
          <Link className="primary large" to="docs/">
            Get Started
          </Link>
        </div>
      </div>
      <div className="triangle" />
    </div>
  );
};

const Index: FC = () => {
  return (
    <Layout>
      <HomeSplash />
      <div className="mainContainer indexContainer">
        <div className="features">
          <h2>Why Bottender?</h2>
          <div className="container">
            <div className="wrapper gridBlock">
              <div className="blockElement">
                <div className="blockImage">
                  <img src="img/element_flexible.svg" alt="Declarative" />
                </div>
                <div className="blockContent">
                  <h2>Declarative</h2>
                  <div>
                    <span>
                      <p>
                        Bottender takes care of the complexity of conversational
                        UIs for you. Design actions for each event and state in
                        your application, and Bottender will run accordingly.
                      </p>
                      <p>
                        This approach makes your code more predictable and
                        easier to debug.
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="blockElement">
                <div className="blockImage">
                  <img
                    src="img/element_morden.svg"
                    alt="Native User Experience"
                  />
                </div>
                <div className="blockContent">
                  <h2>Native User Experience</h2>
                  <div>
                    <span>
                      <p>
                        Bottender lets you create apps on every channel and
                        never compromise on your users’ experience.
                      </p>
                      <p>
                        You can apply progressive enhancement or graceful
                        degradation strategy on your building blocks.
                      </p>
               