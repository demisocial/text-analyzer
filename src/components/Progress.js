import React, {useState, useEffect} from 'react'

export default function Progress() {

    const [progress, setProgress] = useState(0); // Initial progress at 0%

  useEffect(() => {
    // Increment progress every 100ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          return 100;
        }
        return prev + 1; // Increment by 1%
      });
    }, 100); // Adjust speed by changing the interval time (100ms here)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="progress mt-2 mx-1" role="progressbar" aria-label="Basic example" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
       <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${progress}%`}}>
        {progress}%
       </div>
    </div>
  )
}
