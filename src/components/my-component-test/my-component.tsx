import { Component, Prop } from "@stencil/core";

@Component({
  tag: "my-component-test",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponentTest {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
