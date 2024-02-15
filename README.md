# react-popupkit

## Description

A lightweight and easy-to-use `React component` for creating functional popups without manual managing `state` or additional `function` handling. just call the `component`, apply your `styles`, and enjoy optimized magical `popups`.

## Features

- **✅ Easy to use 🚀**
- **✅ TypeScript Support 👌**
- **✅ State and functions fully accessible**
- **✅ No default styles are provided. It's depend on you 👌 (js, CSS, styled-components)**
- **✅ Very tiny library (2.14kb) ⚡️**

## Installation

This package is available in NPM repository as `react-popupkit`. It will work correctly with all popular bundlers.

```bash
npm install react-popupkit
```

or

```bash
yarn add react-popupkit
```

## Quick Demo

To start using react popupkit you just need to import the component from the react-popupkit package.

```jsx
import Popup from 'react-popupkit'
```

Call the component where you want to use and make popup button:

```jsx
export const App = () => {
  return (
    <Popup>
      <Popup.Button {/* custom styles inside <Popup.Button> component */}>
        {/* button content will be here */}
      </Popup.Button>
    </Popup>
  )
}
```

Setup popup body as with your custom styles. (The package no styles provided):

```jsx
export const App = () => {
  return (
    <Popup>
      <Popup.Button {/* custom styles inside <Popup.Button> component */}>
        {/* button content will be here */}
      </Popup.Button>
      <Popup.Body>
       {/* Body content goes here with your custom styles */}
      </Popup.Body>
    </Popup>
  )
}
```

Great! you're done.

## Example

```jsx
export const App = () => {
  return (
    <Popup>
      <Popup.Button className='font-medium px-3 py-1.5 rounded-md bg-slate-600 text-white'>
        {/* Replace this with your actual button content */}
        Click me
      </Popup.Button>
      <Popup.Body>
        {/* Replace this with your actual popup content */}
        <ul className='w-fit whitespace-nowrap  h-fit rounded-md bg-zinc-100 border absolute top-full left-full'>
          <Popup.TriggerClose>
            <li className='text-center py-1 border-b border font-sans cursor-pointer hover:bg-zinc-200 px-10'>
              Item 1
            </li>
          </Popup.TriggerClose>
          <Popup.TriggerClose>
            <li className='text-center py-1 border-b border font-sans cursor-pointer hover:bg-zinc-200'>Item 2</li>
          </Popup.TriggerClose>
          <Popup.TriggerClose>
            <li className='text-center py-1 border-b border font-sans cursor-pointer hover:bg-zinc-200'>Item 3</li>
          </Popup.TriggerClose>
        </ul>
      </Popup.Body>
    </Popup>
  )
}
```

- Note: If you use next.js 13 or above (App router) then please make sure use `use client` in the top of the file.

## If needed

If you want to close depends on a specific event then you can do it by provided hook:

```jsx
import { useClosePopup } from 'react-popupkit'

export const App = () => {
  // get close function by using useClosePopup() from react-popupkit
  const closePopup = useClosePopup()
  useEffect(() => {
    // simple api fetch data
    const userData = async () => {
      const res = await fetch(`url_here`)
      const data = await res.json()
      if (data.success) {
        // popup close after successfully fetch data
        closePopup()
      }
    }
  }, [])
  return {
    /* ...codes */
  }
}
```

## Custom state handling

If you want to use in many place of this popup state. Then you can check below example:

```jsx
export const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState()
  return (
    <div>
      <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}>
        {/* ...codes */}
      </Popup>
      {/* handling others thing by depend on Popup state */}
      {isPopupOpen && <p>Popup is open!</p>}
    </div>
  )
}
```

## Usable Components

| Name                                        | Description                                                    |
| ------------------------------------------- | -------------------------------------------------------------- |
| `<Popup></Popup>`                           | Parent wrapper component.                                      |
| `<Popup.Button></Popup.Button>`             | Make the button for click to open popup.                       |
| `<Popup.Body></Popup.Body>`                 | Wrap by body component of the desired popup contents           |
| `<Popup.TriggerClose></Popup.TriggerClose>` | Wrap the item which one you want to close popup after clicked. |

## Advanced Usage

- Include Popup.TriggerClose for close after click any item into the popup.
- Use conditional rendering or props.
- Control close popup by useClosePopup() hooks.

## Licence

- MIT

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://nahid-ahmed.netlify.app/" target="_blank">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/121648135?s=400&u=bacda54a66f53fa97ff1258b5abb989454a31f7e&v=4">
          </br>
        </a>
        <p>Nahid Ahmed</p>
        <div>
          <a href="https://www.linkedin.com/in/nahid-ahmed-281901212/" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
