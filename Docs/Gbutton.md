# Gbutton Component Documentation

## Overview

The `Gbutton` component is a React functional component that represents a button for subscription. It provides a visual indication of the subscription status and allows users to toggle between subscribing and unsubscribing.

## Usage

```jsx
import React from 'react';
import { Gbutton } from 'path-to-your-component/Gbutton';

const MyComponent = () => {
  const handleButtonClick = () => {
    // Handle button click logic
  };

  return (
    <div>
      <Gbutton onClick={handleButtonClick} subscription={/* boolean value */} />
    </div>
  );
};
```

## Props
`onClick: () => void`
A required function that will be called when the button is clicked. It should handle the logic associated with the button click.

`subscription: boolean`
A required boolean value indicating the subscription status. If true, the button will display "Subscribed"; otherwise, it will display "Subscribe".

## Styles
The component applies styling to create a visually appealing button with a yellow border. It transitions to a white background on hover.

## Example 

```jsx
import React, { useState } from 'react';
import { Gbutton } from 'path-to-your-component/Gbutton';

const ExampleComponent = () => {
  const [isSubscribed, setSubscribed] = useState(false);

  const handleButtonClick = () => {
    // Toggle subscription status
    setSubscribed(!isSubscribed);
  };

  return (
    <div>
      <Gbutton onClick={handleButtonClick} subscription={isSubscribed} />
    </div>
  );
};
```
