const HomeIcon= ({size})=>{
  return (
    <svg role="img" height={size} width={size} >
        <path fill="currentColor" d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z">
        </path>
    </svg>
  )
}

const SearchIcon= ({size})=>{
  return (
    <svg role="img" height={size} width={size} >
      <path fill="currentColor" d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z">
      </path>
    </svg>

  )
}

const BooksIcon= ({size})=>{
  return (
    <svg role="img" height={size} width={size} >
  <path fill="currentColor" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z">
  </path>
  </svg>

  )
}

const PlusIcon= ({size})=>{
  return (
    <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
      <path fill="currentColor" d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z">
      </path></svg>

  )
}

const FavIcon= ({size})=>{
  return (
    <svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
      <path fill="currentColor" d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
      </path></svg>

  )
}

const DownloadIcon= ({size})=>{
  return (
    <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
      <path fill="currentColor" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z">
      </path>

      <path fill="currentColor" d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z">
      </path>
    </svg>
  )
}

const LeftIcon= ({size})=>{
  return (
    <svg role="img" height={size} width={size} aria-hidden="true"  viewBox="0 0 24 24" data-encore-id="icon">
      <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z">
    </path></svg>
  )
}

const RightIcon= ({size})=>{
  return (
    <svg  role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
     <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z">
    </path></svg>
  )
}

const DownIcon= ({size})=>{
  return (
    <svg  role="img" height={size} width={size} aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16" data-encore-id="icon">
    <path className="text-white" d="M14 6l-6 6-6-6h12z"></path></svg>
  )
}



const Icon = ({name,size = 24})=>{

    const icons = {
        home: HomeIcon,
        search:SearchIcon,
        books:BooksIcon,
        plus:PlusIcon,
        fav:FavIcon,
        download:DownloadIcon,
        left:LeftIcon,
        right:RightIcon,
        down:DownIcon
    }

    const Component = icons[name]
    return <Component size={size}></Component>
}

export {
    Icon
}
