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

