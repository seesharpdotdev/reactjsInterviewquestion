import React, { useEffect } from 'react';

export default function Child() {
    useEffect(() => {
      console.log('Child component mounted');
      return () => console.log('Child component unmounted');
    }, []);
  
    return <h2>Child Component</h2>;
  }