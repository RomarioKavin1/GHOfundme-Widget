# GhoFundMe React Components

![npm version](https://img.shields.io/npm/v/ghofundme.svg)


A collection of React components for creating a GhoFundMe application.

## 🚀 Installation

Install the package using npm:

```bash
npm install ghofundme
🔧 Usage
```
```jsx
import { Gbutton, Gmodal, Card, Modal, Stepper, cn } from 'ghofundme';
```
Use the components in your React application
Example:
```jsx
const MyComponent = () => {
  return (
    <div>
      <Card>
        <p>Your content goes here!</p>
      </Card>

      <Gbutton onClick={() => console.log('Button clicked')} subscription={true} />

      <Gmodal isOpen={true} onClose={() => console.log('Modal closed')} subscription={false}>
        {/* Modal content */}
      </Gmodal>

      {/* Include other components as needed */}
    </div>
  );
};
```
📖 Documentation
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
# Gmodal Component Documentation

## Overview

The `Gmodal` component is a React functional component that represents a modal for subscription details. It includes a stepper to guide users through the subscription process and displays relevant information at each step.

## Usage

```jsx
import React, { useState } from 'react';
import { Gmodal } from 'path-to-your-component/Gmodal';

const ExampleComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [subscription, setSubscription] = useState(/* boolean value */);

  const handleModalClose = () => {
    // Handle modal close logic
    setModalOpen(false);
  };

  return (
    <div>
      {/* Open modal button */}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      {/* Gmodal component */}
      <Gmodal isOpen={modalOpen} onClose={handleModalClose} subscription={subscription} />
    </div>
  );
};
```

# Props
`isOpen: boolean`
A required boolean value indicating whether the modal is open or closed.

`onClose: () => void`
A required function that will be called when the modal is closed. It should handle any logic associated with closing the modal.

`subscription: boolean`
A required boolean value indicating the subscription status.

# State
The component uses local state to manage the stepper, token details, and slider values.

`step`: Current step in the subscription process.
`tokenName`, tokenCode: Name and code for the subscription token.
`Tokenprice`: Price per token in GHO.
`sliderValue`: Value of the slider indicating token quantity.

# Example
```jsx
import React, { useState } from 'react';
import { Gmodal } from 'path-to-your-component/Gmodal';

const ExampleComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [subscription, setSubscription] = useState(false);

  const handleModalClose = () => {
    // Handle modal close logic
    setModalOpen(false);
  };

  return (
    <div>
      {/* Open modal button */}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      {/* Gmodal component */}
      <Gmodal isOpen={modalOpen} onClose={handleModalClose} subscription={subscription} />
    </div>
  );
};
```




📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
