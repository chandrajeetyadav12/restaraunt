"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CuisineTabs() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Cuisine`)
      .then((res) => res.json())
      .then((data) => setCuisines(data));
  }, []);

  return (
    <div className="food-menu-tab">
    <ul className="nav nav-pills mb-3">
      {cuisines.map((cuisine) => (
        <li key={cuisine._id} className="nav-item">
          <Link
            className="nav-link " 
            href={`/cuisines/${cuisine._id}`}
          >
            {cuisine.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
