


/* const divRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const handleOutSideClick = ((e: MouseEvent) => {
    if (e) {
      if (!divRef.current?.contains(e.target as Node)) {
        console.log('outside')
      }
    }
  })

  document.addEventListener('mousedown', handleOutSideClick)

  return () => {
    document.removeEventListener('mousedown', handleOutSideClick)
  }
}, [divRef]) */