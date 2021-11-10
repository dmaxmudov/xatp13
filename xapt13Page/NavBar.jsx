import React from 'react'

const NavBar = () => {

    return (
        <>


{/* <button
    type='button'
    onClick={() => { history.push('/new-location') }}
  >
    Click Me!
  </button> */}
            <div className="navBar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <span><img src="/assets/icon/burger.svg" alt=""/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
