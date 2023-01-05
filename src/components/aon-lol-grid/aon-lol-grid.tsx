import { Component, Host, h, Prop } from '@stencil/core';
import { ILegendData } from '../aon-legend/aon-legend';
import { IStatusCardData } from '../aon-status-card/aon-status-card';

export interface IGridData {
  readonly id: string;
  readonly domainName: string;
  readonly categories: IStatusCardData[];
}

// List of Lists (LoL) grid component
@Component({
  tag: 'aon-lol-grid',
  styleUrl: 'aon-lol-grid.css',
  shadow: true
})
export class AonLolGrid {
  @Prop() legendData!: ILegendData[];
  @Prop() data!: IGridData[];

  render() {
    const legend = this.legendData ? (
      <aon-legend data={this.legendData}></aon-legend>
    ) : null;

    const getCategory = (categoryData: IStatusCardData) => {
      return <aon-status-card data={categoryData}></aon-status-card>;
    };

    const getHead = (name: string) => {
      const headStyle = {
        '--uui-p-extra-small-color': 'var(--aon-lol-grid-head-text-color)'
      };

      return (
        <div
          class="extra-small aon-lol-grid-column-head"
          style={headStyle}
          title={name}
        >
          {name}
        </div>
      );
    };

    const getColumn = (domainData: IGridData) => {
      return (
        <div class="aon-lol-grid-column">
          {getHead(domainData.domainName)}
          {domainData.categories.map(categoryData => {
            return getCategory(categoryData);
          })}
        </div>
      );
    };

    const grid = (
      <div class="aon-lol-grid-wrapper">
        {this.data?.map(domainData => {
          return getColumn(domainData);
        })}
      </div>
    );

    return (
      <Host>
        {legend}
        {grid}
        <slot />
      </Host>
    );
  }
}
