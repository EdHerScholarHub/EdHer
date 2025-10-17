export function CircleText({ text }: { text: string }) {
  return (
    <span className="relative text-inherit">
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -35 200 70" className="absolute -left-5 -bottom-2 rotate-[-10deg] text-inherit *:stroke-current pointer-events-none select-none">
        {
          Array.from(
            { length: 2 },
            (_, i) => <ellipse key={i} cx="0" cy={i * 5} rx="90" ry="30" stroke="white" fill="none" strokeWidth={1.5} />,
          )
        }
      </svg>
    </span>
  );
}

export function UnderlineText({ text }: { text: string }) {
  return (
    <span className="relative text-inherit">
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -40 200 70" fill="none" className="absolute inset-0 text-inherit *:stroke-current pointer-events-none select-none">
        {
          Array.from(
            { length: 2 },
            (_, i) => <path key={i} style={{ transform: `translateY(${i * 5}px)` }} d="M1 17.403C1 17.403 20.7284 -2.0124 35 1.40302C44.7276 3.731 45.168 15.5653 55 17.403C68.0518 19.8426 71.7859 0.103277 85 1.40302C96.2103 2.50568 97.9543 19.6122 109 17.403C117.665 15.67 116.475 3.72807 125 1.40302C137.15 -1.91069 140.558 19.3547 153 17.403C162.881 15.853 173 1.40302 173 1.40302" strokeWidth={1.5} />,
          )
        }
      </svg>
    </span>
  );
}
