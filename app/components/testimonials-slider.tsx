"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function TestimonialsSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const testimonials = [
    {
      quote:
        "This school transformed my approach to learning. The teachers genuinely care about each student's success and push us to exceed our own expectations.",
      author: "Sarah Chen",
      role: "Class of 2024",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABCEAABAwIDBQQJAgQCCwEAAAABAgMEABEFBiESMUFRYRMicYEHFCMyQpGhsdFSwTOS4fBichYlNENTY4KDotLxFf/EABsBAAEFAQEAAAAAAAAAAAAAAAABAgMEBQYH/8QAMhEAAgIBBAECBAUDBAMAAAAAAAECAxEEEiExQQUTIjJRYXGRobHRFFKBM0Lw8RUjwf/aAAwDAQACEQMRAD8A3CgAoAKACgAoAQkCgBjiGMQcPB9YfAWP92nVXyp8a5S6RBbqaqvmZX5ecTciHF0/U8f2H5qxHS/3Mz7PU/7I/mRb2ZsVdJs+lsHg2gD73qVaeteCrLX3vp4GqsYxJW+c+f8ArtT/AGofQh/qr33JgnF8STunyP5qPah9A/qbl1NjpnMuKtb5Ac6OIB+1qY9PW/BLHX3x8kpDziQQJsW/+Jk/sfzUctN/ay1X6pj/AFI/kWGBi8HENIz6Su19g6K+VVpVyj2jSq1Fdvyse3phMLQAUAFABQAUAFABQAUAFADadNjwWS9KdS2gc95PIc6dGLk8IjsthXHdJlMxXNEqWS3DvHZ5/GoePDyq5Xp1H5uTFv8AUJz4hwiBJJJJJJO8mrBQfPYlAg1xDEYeGtdpOkNsg7gpWqvAbzTZTjD5mTU6ey54rWSty89xG1ERYbzo4KWQgH7mq0tWvCNSHo0388sfqNBn10n/AGBq3IPG/wBqb/Vv6Ev/AIaP9/6D+JnmC4oJlxn45Pxe+kfLX6U+Ori+GsFez0e1cwkn+hY4cyNOZDsN9DyOaFXt06GrMZRkuDMsqsqe2awxwCQQQbEbiN4peCNE/hOaJMUpbmXkMj4vjT+ar2adS5iaOn9QnDifKLnCmMTmQ9GcC0HlvB5EcDVOUXF4Zs12xsjui8ocU0kCgAoAKACgAoAKAI7GcVYwuP2jp2ln3GwdVGpK63N4RX1GojTHLM/xCfIxF8vSVEn4UjQJ6AVoQhGCwjn7bp3SzIa04hA6b9B1oFSzwVzGc2wYjTjcBxMmSO6nZ1Qk8STxt0qvZqIxXw9mnpfTLLHmziP6lBkOyJjqn5Li3nVC6lq5fjoKoNtvk6OFcYR2wWEcKQcIQDvFACWI90+RpAO8CdJgyA9EdUy6N9jvHI8xToycXlEdlULY7ZrKNGy1mJrGEdi6A3MQO8gbljmn8cK0ablPh9nNa7Qy073R5j+34k7UxnjrDp8jDZAejLsb95PwrHWmzgprDJqb50y3QNCwjFGMTjdo0dlY99snVJrOsrcHhnQ0aiN0cxH9MJwoAKACgAoAaYlOaw+I5If91I0HFR4AU6EXJ4RFdbGqDnIzifNeny1SX1XUdEjgkchWlCCgsI5u62Vs3KQ2pxEeXFpbbUtxQShIJUo7gONDeOWKk5PCM5zNmV7FXFR4ilNwQeBsXep6dKzrrnPhdHT6L0+OnSlPmX7FfUNkXO47hUBpHZgkoOx77d1DqOIoA9qZS8jtY4BPxIoAbEEcPGgQSgAUkKFj86MAeosh2NIQ62sofbVtoUn70ReHlCSipxcZdM1fAcTRi2GtyUgJX7rqAfdWN48P2rVqnvjk5DV6d6e1w8eCQp5WHWHTXsPlJkRzYj3gdyhyNNnBTWGTU2yqnuiaPh05nEIjchg3SobuIPEVmzi4vDOkqtjbBSiOqaSBQAUAIaAKBmnFDPnFps+wYJSm3xHif2q/RXtjnyzn9df7tm1dIhKnKIUAVDP+KKaYbw1lVi933bfoG4eZ+1VNVPGIo2/SNPmTufjr8SlsN7ZKle4kXUapG+SeWsGezDjCIqQUtDvOqT8KOQ6ncKjsmoRyOhDc8EhnjLy8BxISIrexCeXZFtzS+KD03kUym3esPsdZDa8ror22UK7dnQE2Unl/SpyMcbLUxII7qwNf740C9jN5lbJsryPOgRo50CCLFxce8N1IxSyZDxH1fFhFUbNyxs25LAuP3Hyqzpp7Z4+pmeq0e5RvXcf28mjVoHMBQBN5VxQwJwZcVaO+QDf4VcD+1QX17o5XaL2h1HtT2vpl/BvVA6AWgAoAiczTjAwtxSDZ132aDyJ4/K9S0w3SKusu9qptdvgzqtI5sKQAoAynM0ky8emuXukL2E9AkW/JrLtlusbOv0Var08F/n8xqvuR22kAla9SEi9+QqMtm2ej/LqcCwdHapHrT3tHjf4rbvAbvnzrPtnvnnwWYx2xwTeMYWxiUVxmQ0lxDg2VoO5Q/NR5cXlD01jD6MYzRk6bgbjkiKFvwgd41W2OSxy61druU+H2V51OPK6KuDYhSSb8CKnIh41MunZfTcfqtvoHZBcVt26mFi/6eFAYGrjS2zZaCDQJgI0gw5TchN7trS58jrQntlkZOO+Dj9UbMDcAjcRethdHEtYeAoEFoA0XLU/1/C21qN3W/ZueI4+YrOthslg6TR3e7Sm+1wStRFoKAKPneV2uINxgdGEXPir+gFXtNHEcmH6lZusUPoVyrBmhQAcCaBUY08rtH3V8VrKvmTWPnLO3isJItvo6wj/9fMwkLF2IVlgcCrUJ+xPkKgvntjheSapc5ZqcvMLbKyxhmHTcSUg7KlRW/ZpPIrNh8r1WjV9Xglchmc3vxnQMVy9iURo6F4J7RCeqiBoKf7KfTE3FjcZbeTdQvcaK41Bgemym5g9HWHYk4t+MDHkK12mhYKPVO4/SpY3Tjx2NcIy+xnX+j0tCnWFYTPxBhOjcyJGWhSfEKFlD7X0Nqtb/ADnBBtx9yNGA4ztOWwiensxcksK3dOfgL073I/UTbL6DVa5bHceS4i2hS6gg/WnZz0Jz5G7tlC+ykH/COFAZNgwtZcwyGs/FHbJ/lFa8PlRxd6xbJfd/uOacQhQBY8kyuyxB2MTZLyLgdR/S/wAqramOYpml6bZixw+peKpG4BoAzDGHvWMVlu/qdI8hoPoBWnUsQSOX1Et90pfcZ08hCgAO4+FAqM5wTKMvFozstT7USIlSgl11N9qxsbC4063rBsujB48nfVUytw0aF6KcMQ3ll11YJMp5e0RxSO7v5afWoL5ZnwOgsRLKue8ovM4TFC2YyuyceUlRSlQFyhtCAVOKA3gWA56GlhTuW6TIp3Ye2KG+AZliYytxqPJjvOIHeDYUhQF7ElCuFyBcE79bU2Vaw3F9fYepST+JE8KhJQO6gCJxvG2MLbK31oSN5UvaNhe17JSdLi1zYaG1SqrK3SeCJzbeIrI1i4nHxEMF1DQakqKI8yM6VtLWNSg3AUhehOyRqBoTROjC3ReRYXyUtskVr0qMrYy0rbSFHtkbJ4nXhRpuJj7mnDgoeZcoPYLBYxViYmZCdsHCE7JaURuI4i+nCrELVJ48kdlM638RoOGJ7PDYiP0sNg+SRW9D5UcLe82yf3Y5pSIKAHmDver4rEd5OgHwOh+hplizBon089l0X9zTxurMOnEWbJJ5CgR9GTFRWSs71a1rdHJ5zyJQIFAAogJJ5Ak9KUVLLRFpcDmVsFVH/gKZSdP1W/O15iuTszveT1X01RS/wWvJMdCMrx46gFJBdSRzBWT9jTpyy8lC6p1zlF/UYZyYxXAMvQJOUVuNmAt0OjZDh9oblSr77m+p42JqzGxtKX07KarWZRfnopPocwrEZOaTibqXPVUJcVJeWbhe0DcE8SSd3jTnJSeV4FlFwg4tcs2UbqolgDQBl3pWnY/h82ZGiL/1Xi0dtK+4DcJFikKO46G/Q361djYo99Fb2t6x5RIeinBpC8oT04kkiNIfaUwFn3ihW0Sn6C45Ub0lKXhhZHdKMPKJD0kMtrwbD4iUBKFzWwEhOgCUqUR00TVeuWMv7FumvfbCK+pWsZWlORsZS6LoVsBA5r2k2+tqZU37qSNH1JLZn/n2JqEQYTBHFpH2FdTH5UeWXLFsl92daUjCgBQooIWPhN6O+BU8cmspN0g8xWSdaI7/AAl/5TSrsbL5WZKgWQkdBWszk0sIWkAKAGOPSfU8Gmv3AKWVBP8AmOg+9R2y2wbLOkr9y+EfuUzKuZGoERWF4oFGCo3bcQLqZVztxHhr86w7ad3MezutNqXTLJpuRMSiyIz8SPLZkBB7RCmlXuk79N41G486quMo9lvVWwtkrIMnXZ623ilCLW0vqKTrobHTxlHLHjThcZSdQDrahtsruCjLgHHEti6jYbrmkDAIUlYukgjmKAweJOyGFFbQdQNShQuD5UqbQsYqUsDZict1aUFsW3aHdQ3nsnlp4wWUyAztPwlpUWPic9qOtsF3YUsAkHS/3oxN8RQulthVJzk8GZ5ozIziqWIOGpUjD2lX2lCxdVwNuAGu/WrNFLhmUuyvqtT7zwui6YG922ExVcQ2Eny0/at6mWYI4bX17NTNff8AcfVIUwoAReqFeBpQfTNaa0bR4Csl9nWroU6ikFMpkN9lIdbtbYWU/I1qxeUmcpNbZNfc50owKAKb6QsRSG2MNbV3lHtnQOQ0SPnr5VT1c+FFG56PRy7n+CKTVM3RxlPHXMuZgj4kgFTaCUvoTvW2d48dxHUCo5R3LA5cYZ9IRX486MzLjKQ608gLbcGt0kaGqDTTwyypccHekFOEiSwwD26whPErHd+e6jAqTfQkeXHft6ssOJHxIB2fnuowDTXY438PnQNG82XHw+G9MlOJaYZSVuKI3AUqWXhCSlhcnzZmnGXMwY7LxN4KT2qrNoV8CALJHy+pNX4x2rCK/fJwb7qEjiAKehDQ8kzwtlyIpWp9qgfIEfOrukn3Ew/WaPluX4MtFXDBCgDpGb7WQ01a+2sJ+tJJ4THQjukl9TVwLACso6wQ7qAM6zPHMfG5GndcIcT5jX63rRolmtHOa6Gy+X3IqpSoFApkGJzVYjiD8xZJ7VZKb/p4fS1ZM5b5NnZ01KquNf0G1NJRgsWWrxNMHIvPo6z0rLivUMRK3MMWq6SkXUwo8QOKTxHmKjsr3LK7FjLazcIkliZHRIiPNvMuC6HG1BSVDxqm00+SdPPR18zSCgdTQBwnTYuHRVypz7bEdsXU44qwH98qVRbeEI3gwz0h55czM76nB22sKaVtBKtFPKG5SuQ5D96uV17OfJA3vf2KUBc251IA8Js6gcNmnDSdy7LVFkMvAkdm7c25H+zT4ScZJkV9Xu0yh9jT92lq1zigpAJXLEcyMbji3dbJcUegGn1tUV8sQZb0UN98fsaMN1Zx0YUAVbPMMrYZmIH8M7C7cju+v3q1ppcuJl+p1ZiprwU6rpihSCmOTYq4Mt6K5faZWUXPEDcflWQ1teDta7FbBTXk5lCglKiDsqJAPO2/7ikH5WcDB8WdPXWmscjnSCkxgGZ8Xy44pzCpakIJuphY2m1+Kf3FjSSjGXYnK6N2i5jdDDapkIhSkAktnS5HX81nN8lpReBJOYZC2XDBh2UEkpU4b62oT5Da8GDY5mDFsfeDuLzFv21S3uQjwSNB960Ukuiry+WRfhSinWOnac8NaVCM7LSovBSQShFtojhfdS+RMronsAimS+yyAT2rg+XH6Xp8FmSRHdZ7VUpvwjUb3rWOJQlAFwyND2WH5ige+dhHgN/1+1U9TLnabPplWIux+eC1jdVU1QoA4TY6JcV2O6O44kpP5pYtp5QyyCsi4S6ZmEuO5EkuR3h321WPXrWpF7llHL2QdcnGXaOVKMKnnbAlS0nEYiNp5CbPIG9SRx8R9vCquppz8cTZ9M1ih/6Zvh9EBh0E4pluWlgXlQ3+1SkDVSCkXH/if5arQjvraXaNK+72NTFy4jJY/UrUpIUgLTUDL43pBw5wyG7iGIRoUdJW6+6ltKQL7za/hQ+FkRs+kThzjaQluykpAAtpWY1ll1TWBU4e6vurISlWhN70JciuawfNuKQ3cPxKVCfQUOsOqQoEW3E6+e8dK011koJ+BtQOHLCQ21tKNtL0qGk/Jw1cDA4LToKZk97t1JI1Q2lNgD/MD/8AKnnDZBZ7ZRpt9/Uycfljx/nyXHKuDmCz6w+mzyk2Qk70J/Jq1p6tvxMy/U9arX7UH8K7+7J+rJjnaJHclyW47IutxVh060kpKKyx8IOclFeTToMZuHFajte42kJHXrWXKTk8s6iuCrgorwd6QeFABQBWc34SZLXrrCT2rQ74HxJ5+VWdPZte19Gb6hpt8fcj2ilVeMQKQQj42Ex4mJOTofsS8mzzSfcVyPQ7/G5qNVJS3ItT1U7Kvbnzjp+StZrysVKXOw1KO8buxyQNTvKfxVTU1Rj8aZselauy9qhxbfjHP5kHAyi4vvznuyTwQ3qq3U7h9azJXpfKdbT6XOXNjx+Hf8F6yGvC8vzzFfiMNreNmZykgr1+Aq4Dd5+VRSm5ol1GgjCO6tGnCw6VEZ4EgDhQBl2enMNzHiKGGYrK0xzsuTEostRHwhW+w89aljKUEaWn0EZR3W+SkzcouNq24T3aoGuw5or57vtUsb0/m4ILvS7I/wCm8/v/AATOVcrEuNzsUSkBB2mo+/X9SvxWnpqlP42cl6prJ0t0KLT85/8AhaDhTLuJnEJPtXUpCW0q91tI5db61b9tOe5mQtVKNPtQ4Xn6v+B/UpUCkAu2UcIMZr12Qn2zqe4CPdT+TVLUW7ntXRuaDTe2vcl2yy1WNIKACgAoAKAKTmfAFRlrmw0XYUbuIHwHmOn2q7Rdn4ZGJrdHsbsh15K1VkzCPxjEhAZGwLvL90HcOpqrqtQqY8ds3PRfSH6ha3PiEe/4I/tlSAHFLJuLisCyc7HmbyekabS06atV1RwhKYWDw60h5BQ4LpNKJglcEzRMwZCY05tcuEnRDif4jY5dR407hlDUaGM/ihw/0DG8zzMZQY0JtcSEdHFqPtHB+w/vpScINPoVB7p8simmkNICGxZIpC/g6UgoF5TCVOIWUlIJuKfXZOuWYPBX1Olp1Ney6Kkv+dPwSGDYiJ7JCwEvottgbj1FdBptR70ee0ebetekP0+xOPMJdfb7MkKtGIWbLGAGQpE2aizI1bbPxHmen3qpfdj4YmpotHuxZPrwXWqZtBQAUAFABQAUAIQCLGgCpY/le5VIwxO/VTH/AK/irdWo8SMjVen/AO+r8jIMccU5i0kL2gW1dnsqFikDp43PnWXqZ77mzvfQ9OqNBWkuWsv8X/HR2wxzaaLZ3oOnhVSRrpjumihQAedAC0AJQAtADPE3NmPsDes/QU6IjZzy8twYxGQ0krU6SgpSCSbg208bVc0k9lyZi+v6dXen2LHK5X4/9ZNfwHK4QpMjFEgq3pY3gf5vxWlbqM8ROG0ugx8Vv5FrtVU1haACgAoAKACgAoAKACgCBzDlPCcwJvNjbL4FkyGjsrHnxHQ0yVcZdlrT6y7T/I+PoZ/N9HWL4XJLmHrROjHSwOw4B1B0PkfKq06JY4Nyj1imfFi2v80Qz8d6Mvs5LDrKx8LqCk/WqzTXZqwshYswaZy42pB4cbUALQAlAHSOw9KX2cVp15e7ZaQVH6UqTfQ2c4QXxvBNwvR1i2KSEuT3EQIybaHvOEcbDcPM+VWYUSxyZV/q9MOILc/yRoWXcr4Xl5B9Qj+2ULLfcO0tXnwHQaVZjXGPRg6jWXah/G+Pp4JunlYKACgAoAKACgAoAKACgAoAKAENAHGRHZfb2H2W3U7rLSCKRpMVTlB5i8ETIyjgUgknD22yf+ESj6A2qN0wfguQ9R1UOpv/ADyMnMhYJa4Ekf8Ad/Ipv9NWTr1fVfVfkK3kLBLAkST4u0n9NWD9X1X1X5DtjKWBR1i2HtuH/mkr+hNqkVFaXRDL1HVS/wB/5cEuywzHQG47SGkD4UJAH0p6wuilKcpv4nk7DfSjULQKFABQAUAFABQB/9k=",
    },
    {
      quote:
        "The collaborative environment and innovative programs prepared me for college in ways I never imagined. I learned to think critically and lead with confidence.",
      author: "Marcus Rodriguez",
      role: "Alumni, Stanford University",
      image: "data:image/jpeg;base64,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",
    },
    {
      quote:
        "From STEM labs to performing arts, this school offers endless opportunities. I discovered my passion for engineering through the robotics program.",
      author: "Emily Patel",
      role: "Class of 2025",
      image: "data:image/jpeg;base64,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",
    },
    {
      quote:
        "The sense of community here is unmatched. I've made lifelong friends and learned the importance of service and giving back to society.",
      author: "Jordan Lee",
      role: "Class of 2023",
      image: "data:image/jpeg;base64,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",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const handlePrevious = () => {
    setDirection(-1)
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <section className="relative bg-linear-to-br from-primary/5 to-accent/5 py-20 md:py-32 overflow-hidden">
      {/* Pencil icon - top left */}
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute top-20 left-10 w-24 h-24 opacity-10 rotate-25 pointer-events-none"
      />

      {/* Book icon - top right */}
      <img
        src="/UI/book.png"
        alt=""
        className="absolute top-32 right-16 w-32 h-32 opacity-10 rotate-18 pointer-events-none"
      />

      {/* Pencil icon - bottom right */}
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute bottom-24 right-24 w-20 h-20 opacity-10 rotate-35 pointer-events-none"
      />

      {/* Book icon - bottom left */}
      <img
        src="/UI/book.png"
        alt=""
        className="absolute bottom-32 left-20 w-28 h-28 opacity-10 rotate-15 pointer-events-none"
      />

      {/* Additional small pencil - middle left */}
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute top-1/2 left-8 w-16 h-16 opacity-8 rotate-45 pointer-events-none hidden md:block"
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about their experiences and achievements
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-8 left-0 w-16 h-16 text-primary/20" />

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="text-center px-8"
              >
                <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[activeSlide].quote}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[activeSlide].image || "/placeholder.svg"}
                    alt={testimonials[activeSlide].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="text-left">
                    <p className="font-bold text-lg text-foreground">{testimonials[activeSlide].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeSlide].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeSlide ? 1 : -1)
                    setActiveSlide(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSlide ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

