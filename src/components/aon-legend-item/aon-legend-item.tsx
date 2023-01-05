import { Component, Host, h, Prop } from '@stencil/core';

const BASE_COLOR = '#9b9b9b';

@Component({
  tag: 'aon-legend-item',
  styleUrl: 'aon-legend-item.css',
  shadow: true
})
export class AonLegendItem {
  @Prop() color: string = BASE_COLOR;
  @Prop() text: string = '';

  render() {
    const colorBlob = <div class="color-blob"></div>;
    const label = <p class="extra-small">{this.text}</p>;
    return (
      <Host>
        <div class="aon-legend-item-wrapper">
          {colorBlob}
          {label}
        </div>
        <slot />
      </Host>
    );
  }
}
