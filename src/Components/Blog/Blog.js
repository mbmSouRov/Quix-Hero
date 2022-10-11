import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className="lg:m-20 md:m-10 m-5">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What is the purpose of React Router?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              React is a JavaScript library for building user interfaces. It is
              a component based library. React uses a declarative paradigm that
              makes it easier to reason about your application and aims to be
              both efficient and flexible. It designs simple views for each
              state in your application, and React will efficiently update and
              render just the right component when your data changes.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does context API works?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the useRef Hooks in React?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              useRef() only returns one item. It returns an Object called
              current. When we initialize useRef we set the initial value:
              useRef(0).
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
