# ellipsis-tooltip-react-chan

> Hi there, this package helps in truncating the overflown text or inline element with ellipsis & shows tooltip on hover. This uses [react-tooltip](https://www.npmjs.com/package/react-tooltip) package to display truncated content & [uuid](https://www.npmjs.com/package/uuid) to generate unique id's for tooltips.  

DEMO : Currently working on it. Will be updating the documentation with the URL for the same. 

**NOTE**: It shows tooltip on hover only when the text is overflown, else it looks like a normal element. This is dynamic i.e., When screen is minimized more elements get crunched it dynamically shows more tooltips wherever necessary.


## INSTALLATION

```
npm install --save ellipsis-tooltip-react-chan
```
**NOTE**: No support for Typescript yet. I will be creating a type definition package for this soon.

## USAGE

All we need is to wrap this with any element that has a fixed width. To configure the tooltip settings, it accepts ```options``` as prop. From the below example ```place``` refers to place of tooltip. It can be ```left```,```right```,```top```,```bottom```. You can find more information about other options at 
[react-tooltip](https://www.npmjs.com/package/react-tooltip)

**NOTE**: The effect works only if you pass direct text or any inline or inline-block elements as children. See the examples below:

```
import React from 'react';
import './App.css';
import EllipsisToolTip from "ellipsis-tooltip-react-chan";

function App() {

  const options = {
    effect: "solid",
    place: "top"
  }

  return (
    <div style={{ width: "50px", margin: "5rem" }}>
      <EllipsisToolTip options={options}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.
      </EllipsisToolTip>
    </div>
  );

}

export default App;
```
### Span element

```
<EllipsisToolTip options={options}>
   <span>
       Lorem ipsum dolor sit amet consectetur.
   </span>
</EllipsisToolTip>
```
### Anchor element

```
<EllipsisToolTip options={options}>
  <a href="">
    Lorem ipsum dolor sit amet consectetur
  </a>
</EllipsisToolTip>
```

### Table cell

```
<table>
  <tr>
    <td style={{maxWidth : "10vw"}}>
      <EllipsisToolTip>
        Lorem ipsum dolor sit amet consectetur
      </EllipsisToolTip>
    </td>
  </tr>
</table>
```
and etc.....

## STYLES

When it recieves children, it wraps around an       ```inline-block``` element to give the effect & ```inline-block``` elements have extra space around them. So, when placed in a table cell or CSS Grid, it gives a wired look. So we can pass style explicitly ```float:left``` as shown below to prevent this. Use this hack whenever necessary.

```
<tr>
  <td style={{maxWidth : "10vw"}}>
    <EllipsisToolTip style={{float: "left"}}>
      Lorem ipsum dolor sit amet consectetur
    </EllipsisToolTip>
  </td>
</tr>
```

By default, the ```font``` is inherited. If we want to pass any extra styles, you can make use of ```style``` prop as shown above.

### THANK YOU

Thank you for using this package in your project. If you stumble across any issues, kindly raise an open issue on github repo page.

