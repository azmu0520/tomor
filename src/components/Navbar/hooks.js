import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Hooks() {
  const { location } = useNavigate();
  return <div>hooks</div>;
}
