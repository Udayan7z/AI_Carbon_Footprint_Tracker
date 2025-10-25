"use client"

import { animate, motion, MotionValue, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"

export default function ScrollLinked() {
  const ref = useRef<HTMLUListElement>(null)
  const scrollX = useMotionValue(0) // motion value driving auto-scroll
  const maskImage = useScrollOverflowMask(scrollX)

  // Auto-scroll effect
  useEffect(() => {
    const controls = animate(scrollX, 1, {
      repeat: Infinity,
      repeatType: "loop",
      duration: 15,
      ease: "linear",
      onUpdate: (value) => {
        if (ref.current) {
          const maxScroll = ref.current.scrollWidth - ref.current.clientWidth
          ref.current.scrollLeft = value * maxScroll
        }
      },
    })
    return () => controls.stop()
  }, [scrollX])

  return (
    <div id="example">
      <svg id="progress" width="80" height="30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength={1} className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollX }}
        />
      </svg>

      <motion.ul
        ref={ref}
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
      >
        <li style={{ background: "#98FF98" }}>“We do not inherit the Earth from our ancestors;<br/> we borrow it from our children.”</li>
        <li style={{ background: "#32CD32" }}>“Sustainability is no longer about doing less harm.<br/> It’s about doing more good.”</li>
        <li style={{ background: "#228B22" }}>“The greatest threat to our planet is the belief that someone else will save it.”</li>
        <li style={{ background: "#2E8B57" }}>“What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.”</li>
        <li style={{ background: "#808000" }}>“There is no Planet B.”</li>
        <li style={{ background: "#556B2F" }}>“Live simply so that others may simply live.”</li>
        <li style={{ background: "#228B22" }}>“The Earth does not belong to us: we belong to the Earth.”</li>
        <li style={{ background: "#50C878" }}>“Sustainability is about ecology, economy, and equity.”</li>
        <li style={{ background: "#808000" }}>“He who plants a tree, plants hope.”</li>
        <li style={{ background: "#3CB371" }}>“Every small effort counts when it comes to saving our planet.”</li>
      </motion.ul>

      <StyleSheet />
    </div>
  )
}

function useScrollOverflowMask(scrollX: MotionValue<number>) {
  const maskImage = useMotionValue<string>(
    `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`
  )

  useEffect(() => {
    const unsubscribe = scrollX.onChange((value) => {
      // update mask dynamically
      const start = 20 + value * 10
      const end = 80 - value * 10
      maskImage.set(`linear-gradient(90deg, #0000, #000 ${start}%, #000 ${end}%, #0000)`)
    })
    return unsubscribe
  }, [scrollX, maskImage])

  return maskImage
}

function StyleSheet() {
  return (
    <style>{`
      #example {
        width: 100vw;
        max-width: 1000px;
        position: relative;
        overflow: hidden;
      }

      #example #progress {
        position: absolute;
        top: -65px;
        left: -15px;
        transform: rotate(-90deg);
      }

      #example .bg {
        stroke: #0b1011;
      }

      #example #progress circle {
        stroke-dashoffset: 0;
        stroke-width: 10%;
        fill: none;
      }

      #progress .indicator {
        stroke: var(--accent);
      }

      #example ul {
        display: flex;
        list-style: none;
        height: 150px;
        overflow-x: scroll;
        padding: 0;
        margin: 0 auto;
        gap: 20px;
      }

      #example ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        background: #fff3;
        border-radius: 1ex;
      }

      #example ::-webkit-scrollbar-thumb {
        background: var(--accent);
        border-radius: 1ex;
      }

      #example ::-webkit-scrollbar-corner {
        background: #fff3;
      }

      #example li {
        height:145px;
        flex: 0 0 300px;
        background: var(--accent);
        color: #fff;
        text-align: center;
        font-size: 1.1rem;
        font-family: sans-serif;
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 1rem 0.5rem ;
        font-style: italic;
        
      }
  `}</style>
  )
}
