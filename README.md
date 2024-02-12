# react-popupkit

## Description

A lightweight and easy-to-use React component for creating functional popups without managing state or additional functions.

## Installation

This package is available in NPM repository as react-popupkit. It will work correctly with all popular bundlers.

```bash
npm install react-popupkit
```

## Quick Demo

To start using react popupkit you just need to import the component from the react-popupkit package.

```jsx
import Popup from 'react-popupkit'
```

Call the component where you want to use and make popup button

```jsx
import React from 'react';
import Popup from 'react-popupkit';

export const App = () => (
  return(
    <Popup>
      <Popup.Button> {/* your custom styles inside <Popup.Button> component */}
      {/* button content will be here */}
      </Popup.Button>
    </Popup>
  )
);
```

Setup popup body as with your custom styles. (The package no styles provided)

```jsx
import React from 'react';
import Popup from 'react-popupkit';

export const App = () => (
  return(
    <Popup>
      <Popup.Button> {/* your custom styles goes here */}
      {/* button content will be here */}
      </Popup.Button>
      <Popup.Body>
        {/* Body content goes here with your custom styles */}
      </Popup.Body>
    </Popup>
  )
);
```

Great! you're done.

## Example

```jsx
import React from 'react'
import Popup from 'react-popupkit'

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

## Features

- Declarative API
- Composed Structure
- Customization
- Flexibility

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
