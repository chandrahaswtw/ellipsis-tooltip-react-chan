# ellipsis-tooltip-react-chan

> Hi there, this package helps in truncating the overflown text or inline element with ellipsis & shows tooltip on hover. This uses [react-tooltip](https://www.npmjs.com/package/react-tooltip) package to display truncated content & [uuid](https://www.npmjs.com/package/uuid) to generate unique id's for tooltips.  

DEMO : Currently working on it. Will be updating the documentation with the URL for the same. 

## Installation

```
npm install --save ellipsis-tooltip-react-chan
```

## Usage

We need to supply options as prop. **place** refer to place of tooltip. It can be "left","right","top","bottom". See more about the options at 
[react-tooltip](https://www.npmjs.com/package/react-tooltip)


```
import EllipsisToolTip from 'ellipsis-tooltip-react-chan';

const options = {
    effect : "solid",
    place : "top"
  }
  
<span style={{width : "50px", display: "inline-block"}}>
  <EllipsisToolTip options={options}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.
  </EllipsisToolTip>
</span>
```