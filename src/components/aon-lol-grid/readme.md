# my-component



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute | Description | Type            | Default     |
| ------------------------- | --------- | ----------- | --------------- | ----------- |
| `data` _(required)_       | --        |             | `IGridData[]`   | `undefined` |
| `legendData` _(required)_ | --        |             | `ILegendData[]` | `undefined` |


## Dependencies

### Depends on

- [aon-legend](../aon-legend)
- [aon-status-card](../aon-status-card)

### Graph
```mermaid
graph TD;
  aon-lol-grid --> aon-legend
  aon-lol-grid --> aon-status-card
  aon-legend --> aon-legend-item
  style aon-lol-grid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
