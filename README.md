# react-complete-guide

#### What is React

React is a javascript library f\*\*\*\*or building user interfaces.

Its a client side javascript library which lets you create user interfaces for browsers. The user interfaces are created using components.

#### What are components?

Components are basic building blocks of user interface. For eg. you can devide any webpage into components such as header, sidebar, main content. These component can then be further subdevided for eg. main content can have article headline and article content etc.

In technicle term, components are independent and reusable bits of code. They serve the same purpose as Javascript functions which returns HTML (via render() in case of react).

We split the page into these reusable component. So, instead of building entire page as whole we build these tiny components and place them on the page. This approach makes maintenable and scalable application.

Maintenable cause we have devided our page into small and independant comp\*\*\*\*onents and updating them won't affect other component. For eg. header component can be easily updated without thinking about sidebar.

Scalable cause your components are not only independant they are reusable as well. For eg. if you have list component which show list items then this component can be used through out the application whereever list items are displayed.

Another way of thinking component as a custom HTML elements, as they return html at the end.

As an exersise go through any web app build with react and try to debug its components. You will need to use react developer tools for your browser.
