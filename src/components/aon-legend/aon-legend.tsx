import { Component, Host, h, Prop } from '@stencil/core';

export interface ILegendData {
  readonly id: string;
  readonly color: string;
  readonly text: string;
}

@Component({
  tag: 'aon-legend',
  styleUrl: 'aon-legend.css',
  shadow: true
})
export class AonLegend {
  @Prop() data!: ILegendData[];

  render() {
    const getLegendItemColor = (color: string) => {
      return { '--data-point-color': color };
    };

    return (
      <Host>
        <div class="aon-legend-wrapper">
          {this.data.map(dataPoint => {
            return (
              <aon-legend-item
                id={dataPoint.id}
                text={dataPoint.text}
                style={getLegendItemColor(dataPoint.color)}
              ></aon-legend-item>
            );
          })}
        </div>
        <slot />
      </Host>
    );
  }
}
