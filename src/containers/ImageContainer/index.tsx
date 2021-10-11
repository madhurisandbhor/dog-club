import React, { FC, useEffect, useRef } from 'react'
import ImageComponent from 'components/ImageComponent'

interface Props {
  photos: string[]
  active: string
}

const ImageContainer: FC<Props> = ({
  photos,
  active,
}: Props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const observerCallback = (entries: any) => {
    // IntersectionObserverEntry throws error for image.dataset, so disabling any rule
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const image = entry.target
        image.src = image.dataset.src
        const imgFile =
          image.dataset.src && image.dataset.src.split('/')
        image.alt = imgFile[imgFile.length - 1]
        image.removeAttribute('data-src')
        image.classList.remove('lazyLoadClass')
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        observer.current.unobserve(image)
      }
    })
  }

  const observer = useRef(
    new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }),
  )

  useEffect(() => {
    let lazyloadImages: NodeListOf<Element>
    const currObserver = observer.current
    if (photos.length > 8) {
      lazyloadImages = document.querySelectorAll('.lazyLoadClass')
      lazyloadImages.forEach((image: Element) => {
        currObserver.observe(image)
      })
    }
  }, [photos])

  return <ImageComponent photos={photos} active={active} />
}

export default ImageContainer
