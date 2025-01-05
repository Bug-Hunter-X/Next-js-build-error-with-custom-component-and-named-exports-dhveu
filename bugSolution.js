```javascript
// components/MyComponent.js
// Changed to default export
export default function MyComponent() {
  return <p>This is my custom component!</p>;
}

// pages/index.js
import MyComponent from '../components/MyComponent';
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
      <p>This is a paragraph.</p>
    </div>
  );
}
```