import React, { Component } from "react";
import { Menu, Responsive, Segment } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Segment.Group>
        <Responsive as={Segment} minWidth={767}>
          <Menu borderless stackable>
            <Menu.Item name="developer">
              <p>
                Developed & Designed by{" "}
                <a href="http:github.com/arunmishra2000" target="_blank">
                  Futuriste
                </a>
              </p>
            </Menu.Item>
          </Menu>
        </Responsive>
      </Segment.Group>
    );
  }
}
