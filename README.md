# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the `useEffect` cleanup function in React.  The cleanup function should run when the component unmounts or when the component re-renders due to changes in dependencies. However, in certain cases, it may not be triggered correctly.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides a corrected version.

## Problem
The provided `useEffect` hook's cleanup function is not consistently executed when expected leading to potential memory leaks or unexpected behavior.