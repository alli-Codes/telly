function App() {
  const name = 'Evans';
  if (name) 
    return <h1 className="text-blue-300">Hello {name}</h1>
  return <h1>Hello World</h1>
}

export default App