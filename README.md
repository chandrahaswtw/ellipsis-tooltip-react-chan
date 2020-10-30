# ellipsis-tooltip-react-chan

> Hi there, this package helps in truncating the overflown text or inline element with ellipsis & shows tooltip on hover. It comes into effect only when the text is overflown, else it looks like a normal element. This is dynamic i.e., when screen is minimized, more elements get truncated & it dynamically show tooltips wherever necessary.
 This uses [react-tooltip](https://www.npmjs.com/package/react-tooltip) package to display truncated content & [uuid](https://www.npmjs.com/package/uuid) to generate unique id's for tooltips.  

# DEMO
**[CLICK HERE FOR THE DEMO](https://chandrahaswtw.github.io/ellipsis-tooltip-demo/)**


## INSTALLATION

```
npm install --save ellipsis-tooltip-react-chan
```
**NOTE**: This package includes it's own type definitions. No need to install external @types package to work with typescript.

## USAGE

All we need is to wrap this with any element that has a fixed width. To configure the tooltip settings, it accepts ```options``` as prop. From the below example, ```place``` refers to place of tooltip. It can be ```left```,```right```,```top```,```bottom```. You can find more information about other options at 
[react-tooltip](https://www.npmjs.com/package/react-tooltip) documentation.

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
When you are explicitly adding the width to the columns, do not forget to apply ```table-layout: fixed``` as the table style.
```
<table style={{tableLayout : "fixed"}}>
  <tr>
    <td style={{maxWidth : "10vw"}}>
      <EllipsisToolTip options={options}>
        Lorem ipsum dolor sit amet consectetur
      </EllipsisToolTip>
    </td>
  </tr>
</table>
```
and etc.....

## STYLES

>Available from version 1.0.7

When it recieves children, it wraps around an       ```inline-block``` element to give the effect & ```inline-block``` elements have extra space around them. So, when placed in a table cell or CSS Grid, it gives a wired look. So we can pass style explicitly ```float:left``` as shown below to prevent this. Use this hack whenever necessary.

```
<tr>
  <td style={{maxWidth : "10vw"}}>
    <EllipsisToolTip style={{float: "left"}} options={options}>
      Lorem ipsum dolor sit amet consectetur
    </EllipsisToolTip>
  </td>
</tr>
```

By default, the ```font``` is inherited. If we want to pass any extra styles, you can make use of ```style``` prop as shown above. This doesn't affect the tooltip styles but only the wrapper I mentioned. If you wish to change the tool tip styles, you need to send the ```className``` in ```options```. Go through the [react-tooltip](https://www.npmjs.com/package/react-tooltip) documentation for more information. I have briefly mentioned about styling the tooltip in my [DEMO](https://chandrahaswtw.github.io/ellipsis-tooltip-demo/) as well under TABLE/CSS GRID section. Have a look if necessary.

# FINAL NOTE

I am extremely glad that you thought of using this package in you project. If you like my work, I would really appreciate if you provide a **star** on [github repo](https://github.com/chandrahaswtw/ellipsis-tooltip-react-chan). If you stumble across any issues, kindly raise an issue for the same.

