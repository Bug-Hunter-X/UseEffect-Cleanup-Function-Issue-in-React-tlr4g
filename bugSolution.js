```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Component mounted');
    return () => {
      // Cleanup function - This runs when the component unmounts or when dependencies change
      console.log('Component unmounted');
    };
  }, [/*Add dependencies here if effect should run on dependency change*/]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```