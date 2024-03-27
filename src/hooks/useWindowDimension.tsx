import { useState, useEffect } from "react"

export function useWindowDimensions() {

  const getWindowDimensions = () => {
    // Destructure innerWidth and innerHeight from window object
    const { innerWidth: width, innerHeight: height } = window;
    // Return width and height
    return { width, height };
  };

  // State to hold window dimensions
  const [dimensions, setDimensions] = useState(getWindowDimensions())

  // Effect to update dimensions on window resize
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Update dimensions state with current window dimensions
      setDimensions(getWindowDimensions())
    };

    // Attach resize event listener only on client-side
    if (typeof window !== "undefined") {
      // Add event listener for window resize
      window.addEventListener("resize", handleResize)
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }
  }, []); // Empty dependency array to run effect only once on mount

  // Return window dimensions
  return dimensions
}