import React,{useRef} from 'react'

const Search = (props) => {
    const inputsearch = useRef();
    return (
        <div>
            <div class="input-group rounded w-100 mx-auto ">
              <input
                type="search"
                ref={inputsearch}
                onKeyUp={() => props.keyPressEvent(inputsearch.current.value)}
                className="form-control w-25"
                placeholder="Search By Title"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
        </div>
        </div>
    )
}

export default Search
