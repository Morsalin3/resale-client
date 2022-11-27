import React from 'react';

const Blog = () => {
    return (
        <div className='blog-container mt-8'>

            <div className='question w-2/3 m-auto text-start' >
                <h2 className='text-center text-3xl  font-bold'>Question And Anwser</h2>
                <hr className='mx-auto ' />

                <h4 className='mt-5 text-2xl' >1. What are the different ways to manage a state in a React application?</h4>
                <strong>ans:</strong><p>
                    The Four Kinds of React State to Manage
                    Local state. Global state. Server state. URL state.
                </p>
                <h4 className='mt-5 text-2xl'>2. How does prototypical inheritance work?</h4>
                <strong>ans:</strong><p>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
                <h4 className='mt-5 text-2xl'>3. What is a unit test? Why should we write unit tests?</h4>
                <strong>ans:</strong><p>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
                <h4 className='mt-5 text-2xl'>4. React vs. Angular vs. Vue?</h4>
                <strong>ans:</strong><p>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>

            </div>
        </div>
    );
};

export default Blog;