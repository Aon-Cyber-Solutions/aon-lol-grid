import { Component, Host, h, Prop } from '@stencil/core';

type Status = 'error' | 'warning' | 'success' | 'neutral';

const statusToColorMap = {
  error: 'var(--uui-error, #ea2238)',
  warning: 'var(--uu-warning, #ffa600)',
  success: 'var(--uui-success, #12a88a)',
  neutral: 'var(--uui-gray-02, #5d6d78)'
};

interface IMeta {
  readonly text: string;
  readonly ctaLabel?: string;
  readonly ctaUrl?: string;
  readonly ctaCallback?: (data: IStatusCardData) => void;
}

export interface IStatusCardData {
  readonly id: string;
  readonly name: string;
  readonly status: Status;
  readonly meta?: IMeta;
}

@Component({
  tag: 'aon-status-card',
  styleUrl: 'aon-status-card.css',
  shadow: true
})
export class AonStatusCard {
  @Prop()
  data!: IStatusCardData;

  get statusColor() {
    return statusToColorMap[this.data.status] ?? '#5d6d78';
  }

  handleOnClick() {
    if (this.data.meta?.ctaCallback) {
      this.data.meta.ctaCallback(this.data);
    }
  }

  render() {
    const { data, statusColor } = this;

    const title = (
      <p class="extra-small" title={data.name}>
        {data.name}
      </p>
    );
    const hostStyle = { '--aon-status-card-color': statusColor };

    return (
      <Host style={hostStyle}>
        <div onClick={this.handleOnClick.bind(this)} class="aon-status-card">
          {title}
        </div>
      </Host>
    );
  }
}
