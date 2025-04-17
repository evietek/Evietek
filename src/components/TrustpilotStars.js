import { useState, useEffect } from "react";

// TrustPilot star rating component that mimics the original implementation
export default function TrustpilotStars({ score = 5 }) {
  const [rating, setRating] = useState(3);

  // Calculate rating (1-5) based on score (1-10)
  useEffect(() => {
    if (score === 10) {
      setRating(5);
    } else if (score > 7.4) {
      setRating(4);
    } else if (score > 4.9) {
      setRating(3);
    } else if (score > 2.4) {
      setRating(2);
    } else {
      setRating(1);
    }
  }, [score]);

  // CSS for star coloring based on rating
  const getStarStyles = () => {
    // Trustpilot colors from original CSS
    const starColors = {
      1: "#e12729", // 1 star - red
      2: "#f37324", // 2 stars - orange
      3: "#f9cc1b", // 3 stars - yellow
      4: "#72b043", // 4 stars - light green
      5: "#007f4e"  // 5 stars - dark green
    };
    
    const inactiveStarBg = "#c8c8c8";  // Grey background
    const inactiveStarFill = "#e6e7e8"; // Grey star
    const activeStarFill = "#ffffff";   // White star
    
    const styles = {
      star1Bg: inactiveStarBg,
      star2Bg: inactiveStarBg,
      star3Bg: inactiveStarBg,
      star4Bg: inactiveStarBg,
      star5Bg: inactiveStarBg,
      star1Fill: inactiveStarFill,
      star2Fill: inactiveStarFill,
      star3Fill: inactiveStarFill,
      star4Fill: inactiveStarFill,
      star5Fill: inactiveStarFill,
    };
    
    // Update styles based on rating
    for (let i = 1; i <= rating; i++) {
      styles[`star${i}Bg`] = starColors[rating];
      styles[`star${i}Fill`] = activeStarFill;
    }
    
    return styles;
  };
  
  const styles = getStarStyles();

  return (
    <div className="trustpilot-banner">
      <div className="trustpilot-banner__stars">
        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          x="0px" 
          y="0px" 
          viewBox="0 0 374.775 69.02" 
          style={{ enableBackground: "new 0 0 374.775 69.02" }}
        >
          <g>
            <g>
              {/* Star 1 */}
              <path 
                style={{ fill: styles.star1Bg }} 
                d="M69.02,61.74c0,4.02-3.26,7.28-7.28,7.28H7.28c-4.02,0-7.28-3.26-7.28-7.28V7.28C0,3.26,3.26,0,7.28,0h54.46
                c4.02,0,7.28,3.26,7.28,7.28V61.74z"
              />
              <polygon 
                style={{ fill: styles.star1Fill }} 
                points="34.51,11.14 40.311,28.993 59.083,28.993 43.896,40.027 49.697,57.88 34.51,46.846 19.323,57.88
                25.124,40.027 9.937,28.993 28.709,28.993"
              />
              
              {/* Star 2 */}
              <path 
                style={{ fill: styles.star2Bg }} 
                d="M145.459,61.74c0,4.02-3.26,7.28-7.28,7.28h-54.46c-4.02,0-7.28-3.26-7.28-7.28V7.28
                c0-4.02,3.26-7.28,7.28-7.28h54.46c4.02,0,7.28,3.26,7.28,7.28V61.74z"
              />
              <polygon 
                style={{ fill: styles.star2Fill }} 
                points="110.949,11.14 116.75,28.993 135.522,28.993 120.335,40.027 126.136,57.88 110.949,46.846
                95.762,57.88 101.563,40.027 86.376,28.993 105.148,28.993"
              />
              
              {/* Star 3 */}
              <path 
                style={{ fill: styles.star3Bg }} 
                d="M221.898,61.74c0,4.02-3.26,7.28-7.28,7.28h-54.46c-4.02,0-7.28-3.26-7.28-7.28V7.28
                c0-4.02,3.26-7.28,7.28-7.28h54.46c4.02,0,7.28,3.26,7.28,7.28V61.74z"
              />
              <polygon 
                style={{ fill: styles.star3Fill }} 
                points="187.388,11.14 193.189,28.993 211.961,28.993 196.774,40.027 202.575,57.88 187.388,46.846
                172.201,57.88 178.002,40.027 162.815,28.993 181.586,28.993"
              />
              
              {/* Star 4 */}
              <path 
                style={{ fill: styles.star4Bg }} 
                d="M298.336,61.74c0,4.02-3.26,7.28-7.28,7.28h-54.46c-4.02,0-7.28-3.26-7.28-7.28V7.28
                c0-4.02,3.26-7.28,7.28-7.28h54.46c4.02,0,7.28,3.26,7.28,7.28V61.74z"
              />
              <polygon 
                style={{ fill: styles.star4Fill }} 
                points="263.826,11.14 269.628,28.993 288.4,28.993 273.212,40.027 279.014,57.88 263.826,46.846
                248.639,57.88 254.44,40.027 239.253,28.993 258.025,28.993"
              />
              
              {/* Star 5 */}
              <path 
                style={{ fill: styles.star5Bg }} 
                d="M374.775,61.74c0,4.02-3.26,7.28-7.28,7.28h-54.46c-4.02,0-7.28-3.26-7.28-7.28V7.28
                c0-4.02,3.26-7.28,7.28-7.28h54.46c4.02,0,7.28,3.26,7.28,7.28V61.74z"
              />
              <polygon 
                style={{ fill: styles.star5Fill }} 
                points="340.265,11.14 346.066,28.993 364.838,28.993 349.651,40.027 355.452,57.88 340.265,46.846
                325.078,57.88 330.879,40.027 315.692,28.993 334.464,28.993"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}