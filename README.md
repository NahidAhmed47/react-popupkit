# react-popupify

## Description

A lightweight and easy-to-use React component for creating functional popups without managing state or additional functions.

## Features

- Declarative API
- Composed Structure
- Customization
- Flexibility

## Quick Demo

```jsx
import Popup from 'react-popupify'

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

## Installation

```bash
    npm install react-popupify
```

## Basic Usage

- Import the Popup component.
- Wrap your popup content and button.
- Customize using props and classNames.

## Advanced Usage

- Include Popup.TriggerClose.
- Use conditional rendering or props.
- Explore state management or context.

## Licence

- MIT
