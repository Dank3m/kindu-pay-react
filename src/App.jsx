const App = () => {
  return (
    <>
      <div className="container-scroller">
    <nav className="relative flex flex-wrap items-center content-between py-3 px-4 default-layout lg:w-full pr-4 pl-4 w-full p-0 top-0 flex align-items-top flex-row">
      <div className="text-center navbar-brand-wrapper flex items-center justify-start">
        <div className="me-3">
          <button className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded self-center" type="button" data-bs-toggle="minimize">
            <span className="icon-menu"></span>
          </button>
        </div>
        <div>
          <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap brand-logo" href="../../index.html">
            <img src="https://demo.bootstrapdash.com/star-admin-2-pro/themes/assets/images/logo.svg" alt="logo" />
          </a>
          <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap brand-logo-mini" href="../../index.html">
            <img src="https://demo.bootstrapdash.com/star-admin-2-pro/themes/assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
      </div>
      <div className="navbar-menu-wrapper flex align-items-top">
        <ul className="flex flex-wrap list-reset pl-0 mb-0">
          <li className=" fw-semibold hidden lg:block ms-0">
            <h1 className="welcome-text">Good Morning, <span className="text-black fw-bold">John Doe</span></h1>
            <h3 className="welcome-sub-text">Your performance summary this week </h3>
          </li>
        </ul>
        <ul className="flex flex-wrap list-reset pl-0 mb-0 ms-auto">
          <li className=" relative hidden lg:block">
            <a className="inline-block py-2 px-4 no-underline dropdown-bordered  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1 dropdown-toggle-split" id="messageDropdown" href="#"
              data-bs-toggle="dropdown" aria-expanded="false"> Select Category </a>
            <div className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="messageDropdown">
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 py-3">
                <p className="mb-0 fw-medium float-start">Select category</p>
              </a>
              <div className="h-0 my-2 overflow-hidden border-t-1 border-gray-300"></div>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">Bootstrap Bundle </p>
                  <p className="fw-light small-text mb-0">This is a Bundle featuring 16 unique dashboards</p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">Angular Bundle</p>
                  <p className="fw-light small-text mb-0">Everything you’ll ever need for your Angular projects</p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">VUE Bundle</p>
                  <p className="fw-light small-text mb-0">Bundle of 6 Premium Vue Admin Dashboard</p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">React Bundle</p>
                  <p className="fw-light small-text mb-0">Bundle of 8 Premium React Admin Dashboard</p>
                </div>
              </a>
            </div>
          </li>
          <li className=" hidden lg:block">
            <div id="datepicker-popup" className="relative flex items-stretch w-full date datepicker navbar-date-picker">
              <span className="py-1 px-2 mb-1 text-base font-normal leading-normal text-gray-900 text-center bg-gray-300 border border-4 border-gray-100 rounded input-group-prepend border-r">
                <span className="icon-calendar input-group-text calendar-icon"></span>
              </span>
              <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
            </div>
          </li>
          <li className="">
            <form className="search-form" action="#">
              <i className="icon-search"></i>
              <input type="search" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Search Here" title="Search here" />
            </form>
          </li>
          <li className=" relative">
            <a className="inline-block py-2 px-4 no-underline count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
              <i className="icon-bell"></i>
              <span className="count"></span>
            </a>
            <div className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="notificationDropdown">
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 py-3 border-b">
                <p className="mb-0 fw-medium float-start">You have 4 new notifications </p>
                <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-1 px-3 bg-blue-500 text-white hover:bg-blue-600 float-end">View all</span>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item py-3">
                <div className="preview-thumbnail">
                  <i className="mdi mdi-alert m-auto text-blue-600"></i>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal text-gray-900 mb-1">Application Error</h6>
                  <p className="fw-light small-text mb-0"> Just now </p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item py-3">
                <div className="preview-thumbnail">
                  <i className="mdi mdi-lock-outline m-auto text-blue-600"></i>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal text-gray-900 mb-1">Settings</h6>
                  <p className="fw-light small-text mb-0"> Private message </p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item py-3">
                <div className="preview-thumbnail">
                  <i className="mdi mdi-airballoon m-auto text-blue-600"></i>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal text-gray-900 mb-1">New user registration</h6>
                  <p className="fw-light small-text mb-0"> 2 days ago </p>
                </div>
              </a>
            </div>
          </li>
          <li className=" relative">
            <a className="inline-block py-2 px-4 no-underline count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i className="icon-mail icon-lg"></i>
            </a>
            <div className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="countDropdown">
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 py-3">
                <p className="mb-0 fw-medium float-start">You have 7 unread mails </p>
                <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-1 px-3 bg-blue-500 text-white hover:bg-blue-600 float-end">View all</span>
              </a>
              <div className="h-0 my-2 overflow-hidden border-t-1 border-gray-300"></div>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-thumbnail">
                  <img src="../../../assets/images/faces/face10.jpg" alt="image" className="img-sm profile-pic" />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">Marian Garner </p>
                  <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-thumbnail">
                  <img src="../../../assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic" />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">David Grey </p>
                  <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0 preview-item">
                <div className="preview-thumbnail">
                  <img src="../../../assets/images/faces/face1.jpg" alt="image" className="img-sm profile-pic" />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-gray-900">Travis Jenkins </p>
                  <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </a>
            </div>
          </li>
          <li className=" relative hidden lg:block user-dropdown">
            <a className="inline-block py-2 px-4 no-underline" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <img className="img-xs rounded-full" src="../../../assets/images/faces/face8.jpg" alt="Profile image" />
            </a>
            <div className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
              <div className="block py-2 px-6 mb-0 text-sm text-gray-800 whitespace-no-wrap text-center">
                <img className="img-md rounded-full" src="../../../assets/images/faces/face8.jpg" alt="Profile image" />
                <p className="mb-1 mt-3 fw-semibold">Allen Moreno</p>
                <p className="fw-light text-gray-700 mb-0">allenmoreno@gmail.com</p>
              </div>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"><i className="dropdown-item-icon mdi mdi-account-outline text-blue-600 me-2"></i> My
                Profile <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-1 px-3 bg-red-600 text-white hover:bg-red-700">1</span></a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"><i className="dropdown-item-icon mdi mdi-message-text-outline text-blue-600 me-2"></i>
                Messages</a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"><i
                  className="dropdown-item-icon mdi mdi-calendar-check-outline text-blue-600 me-2"></i>
                Activity</a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"><i className="dropdown-item-icon mdi mdi-help-circle-outline text-blue-600 me-2"></i>
                FAQ</a>
              <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"><i className="dropdown-item-icon mdi mdi-power text-blue-600 me-2"></i>Sign Out</a>
            </div>
          </li>
        </ul>
        <button className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded navbar-toggler-right lg:hidden self-center" type="button"
          data-bs-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 page-body-wrapper">
      {/* <!-- partial:../../partials/_settings-panel.html --> */}
      <div className="theme-setting-wrapper">
  <div id="settings-trigger"><i className="ti-settings"></i></div>
  <div id="theme-settings" className="settings-panel">
    <i className="settings-close ti-close"></i>
    <p className="settings-heading">SIDEBAR SKINS</p>
    <div className="sidebar-bg-options selected" id="sidebar-light-theme">
      <div className="img-ss rounded-full bg-gray-100 border me-3"></div>Light
    </div>
    <div className="sidebar-bg-options" id="sidebar-dark-theme">
      <div className="img-ss rounded-full bg-gray-900 border me-3"></div>Dark
    </div>
    <p className="settings-heading mt-2">HEADER SKINS</p>
    <div className="color-tiles mx-0 px-4">
      <div className="tiles success"></div>
      <div className="tiles warning"></div>
      <div className="tiles danger"></div>
      <div className="tiles info"></div>
      <div className="tiles dark"></div>
      <div className="tiles default"></div>
    </div>
  </div>
</div>
<div id="right-sidebar" className="settings-panel">
  <i className="settings-close ti-close"></i>
  <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 border-t" id="setting-panel" role="tablist">
    <li className="">
      <a className="inline-block py-2 px-4 no-underline active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab"
        aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
    </li>
    <li className="">
      <a className="inline-block py-2 px-4 no-underline" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab"
        aria-controls="chats-section">CHATS</a>
    </li>
  </ul>
  <div className="tab-content" id="setting-content">
    <div className="tab-pane opacity-0 opacity-100 block active scroll-wrapper" id="todo-section" role="tabpanel"
      aria-labelledby="todo-section">
      <div className="add-items flex px-3 mb-0">
        <form className="form w-full">
          <div className="mb-4 flex">
            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded todo-list-input" placeholder="Add To-do" />
            <button type="submit" className="add inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 todo-list-add-btn" id="add-task">Add</button>
          </div>
        </form>
      </div>
      <div className="list-wrapper px-3">
        <ul className="flex flex-col-reverse todo-list">
          <li>
            <div className="relative block mb-2">
              <label className="text-gray-700 pl-6 mb-0">
                <input className="checkbox" type="checkbox" />
                Team review meeting at 3.00 PM
              </label>
            </div>
            <i className="remove ti-close"></i>
          </li>
          <li>
            <div className="relative block mb-2">
              <label className="text-gray-700 pl-6 mb-0">
                <input className="checkbox" type="checkbox" />
                Prepare for presentation
              </label>
            </div>
            <i className="remove ti-close"></i>
          </li>
          <li>
            <div className="relative block mb-2">
              <label className="text-gray-700 pl-6 mb-0">
                <input className="checkbox" type="checkbox" />
                Resolve all the low priority tickets due today
              </label>
            </div>
            <i className="remove ti-close"></i>
          </li>
          <li className="completed">
            <div className="relative block mb-2">
              <label className="text-gray-700 pl-6 mb-0">
                <input className="checkbox" type="checkbox" checked />
                Schedule meeting for next week
              </label>
            </div>
            <i className="remove ti-close"></i>
          </li>
          <li className="completed">
            <div className="relative block mb-2">
              <label className="text-gray-700 pl-6 mb-0">
                <input className="checkbox" type="checkbox" checked />
                Project review
              </label>
            </div>
            <i className="remove ti-close"></i>
          </li>
        </ul>
      </div>
      <h4 className="px-3 text-gray-700 mt-5 fw-light mb-0">Events</h4>
      <div className="events pt-4 px-3">
        <div className="wrapper flex mb-2">
          <i className="ti-control-record text-blue-600 me-2"></i>
          <span>Feb 11 2018</span>
        </div>
        <p className="mb-0 fw-thin text-gray">Creating component page build a js</p>
        <p className="text-gray mb-0">The total number of sessions</p>
      </div>
      <div className="events pt-4 px-3">
        <div className="wrapper flex mb-2">
          <i className="ti-control-record text-blue-600 me-2"></i>
          <span>Feb 7 2018</span>
        </div>
        <p className="mb-0 fw-thin text-gray">Meeting with Alisa</p>
        <p className="text-gray mb-0 ">Call Sarah Graves</p>
      </div>
    </div>
    {/* <!-- To do section tab ends --> */}
    <div className="tab-pane opacity-0" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
      <div className="flex items-center justify-between border-b">
        <p className="settings-heading border-t-0 mb-3 pl-3 pt-0 border-b-0 pb-0">Friends</p>
        <small className="settings-heading border-t-0 mb-3 pt-0 border-b-0 pb-0 pr-3 fw-normal">See All</small>
      </div>
      <ul className="chat-list">
        <li className="list active">
          <div className="profile"><img src="../../../assets/images/faces/face1.jpg" alt="image" /><span
              className="online"></span></div>
          <div className="info">
            <p>Thomas Douglas</p>
            <p>Available</p>
          </div>
          <small className="text-gray-700 my-auto">19 min</small>
        </li>
        <li className="list">
          <div className="profile"><img src="../../../assets/images/faces/face2.jpg" alt="image" /><span
              className="offline"></span></div>
          <div className="info">
            <div className="wrapper flex">
              <p>Catherine</p>
            </div>
            <p>Away</p>
          </div>
          <div className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-green-500 text-white hover:green-600 rounded-full py-1 px-3 my-auto mx-2">4</div>
          <small className="text-gray-700 my-auto">23 min</small>
        </li>
        <li className="list">
          <div className="profile"><img src="../../../assets/images/faces/face3.jpg" alt="image" /><span
              className="online"></span></div>
          <div className="info">
            <p>Daniel Russell</p>
            <p>Available</p>
          </div>
          <small className="text-gray-700 my-auto">14 min</small>
        </li>
        <li className="list">
          <div className="profile"><img src="../../../assets/images/faces/face4.jpg" alt="image" /><span
              className="offline"></span></div>
          <div className="info">
            <p>James Richardson</p>
            <p>Away</p>
          </div>
          <small className="text-gray-700 my-auto">2 min</small>
        </li>
        <li className="list">
          <div className="profile"><img src="../../../assets/images/faces/face5.jpg" alt="image" /><span
              className="online"></span></div>
          <div className="info">
            <p>Madeline Kennedy</p>
            <p>Available</p>
          </div>
          <small className="text-gray-700 my-auto">5 min</small>
        </li>
        <li className="list">
          <div className="profile"><img src="../../../assets/images/faces/face6.jpg" alt="image" /><span
              className="online"></span></div>
          <div className="info">
            <p>Sarah Graves</p>
            <p>Available</p>
          </div>
          <small className="text-gray-700 my-auto">47 min</small>
        </li>
      </ul>
    </div>
    {/* <!-- chat tab ends --> */}
  </div>
</div>
      {/* <!-- partial --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="flex flex-wrap list-none pl-0 mb-0">
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" data-bs-toggle="collapse" href="#dashboards" aria-expanded="false"
              aria-controls="dashboards">
              <i className="mdi mdi-grid-large menu-icon"></i>
              <span className="menu-title">Dashboard</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="hidden" id="dashboards">
              <ul className="flex flex-wrap list-none pl-0 mb-0 flex-col sub-menu">
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="../../index.html">Default</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="crm.html">CRM</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="purple.html">Purple</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="sales.html">Sale</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="hr.html">HR</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="analytics.html">Analytics</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="modern.html">Modern</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="ecommerce.html">E-commerce</a></li>
              </ul>
            </div>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="mdi mdi-book menu-icon"></i>
              <span className="menu-title">Invoice</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-cash"></i>
              <span className="menu-title">My Wallet</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-alert-outline"></i>
              <span className="menu-title">Cards</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-sale"></i>
              <span className="menu-title">Reports</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false"
              aria-controls="ui-basic">
              <i className="menu-icon mdi mdi-floor-plan"></i>
              <span className="menu-title">Transactions</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="hidden" id="ui-basic">
              <ul className="flex flex-wrap list-none pl-0 mb-0 flex-col sub-menu">
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="#">Revenue</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="#">Bills</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="#">IPO</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="#">Tax Details</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="#">Invoices</a></li>
                <li className=""> <a className="inline-block py-2 px-4 no-underline" href="#">Help</a></li>
              </ul>
            </div>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-email-outline"></i>
              <span className="menu-title">Payments</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-calendar"></i>
              <span className="menu-title">Statistics</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-format-list-bulleted"></i>
              <span className="menu-title">Branches</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-file-image-outline"></i>
              <span className="menu-title">Analytics</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-file-image-outline"></i>
              <span className="menu-title">Customer Service</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="#">
              <i className="menu-icon mdi mdi-file-image-outline"></i>
              <span className="menu-title">Settings</span>
            </a>
          </li>
          <li className="">
            <a className="inline-block py-2 px-4 no-underline" href="https://bootstrapdash.com/demo/star-admin2-pro/docs/documentation.html">
              <i className="menu-icon mdi mdi-file-document"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="flex flex-wrap ">
            <div className="sm:w-full pr-4 pl-4">
              <div className="home-tab">
                <div className="sm:flex items-center justify-between border-b">
                  <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200" role="tablist">
                    <li className="">
                      <a className="inline-block py-2 px-4 no-underline active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab"
                        aria-controls="overview" aria-selected="true">Overview</a>
                    </li>
                    <li className="">
                      <a className="inline-block py-2 px-4 no-underline" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab"
                        aria-selected="false">Send</a>
                    </li>
                    <li className="">
                      <a className="inline-block py-2 px-4 no-underline" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab"
                        aria-selected="false">Received</a>
                    </li>
                    <li className="">
                      <a className="inline-block py-2 px-4 no-underline border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab"
                        aria-selected="false">Payments</a>
                    </li>
                  </ul>
                  <div>
                    <div className="btn-wrapper">
                      <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-otline-dark items-center"><i className="icon-share"></i> Share</a>
                      <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-otline-dark"><i className="icon-printer"></i> Print</a>
                      <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 text-white me-0"><i className="icon-plus"></i> send</a>
                    </div>
                  </div>
                </div>
                <div className="tab-content tab-content-basic">
                  <div className="tab-pane opacity-0 opacity-100 block active" id="overview" role="tabpanel" aria-labelledby="overview">
                    <div className="flex flex-wrap ">
                      <div className="lg:w-2/3 pr-4 pl-4 flex flex-col">
                        <div className="flex flex-wrap  flex-grow">
                          <div className="w-full lg:w-1/3 pr-4 pl-4 lg:w-full pr-4 pl-4 grid-margin stretch-card">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                              <div className="flex-auto p-6">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="modern-user-intro">Hello John Doe,</h4>
                                    <h6 className="mdern-welcome-text">Welcome back</h6>
                                  </div>
                                </div>
                                <div className="flex flex-wrap ">
                                  <div className="sm:w-1/4 pr-4 pl-4">
                                    <div className="bg-opacity-primary mb-2 lg:mb-0">
                                      <i className="mdi mdi-credit-card"></i>
                                      <p>Transfer via card number</p>
                                      <div className="text-end">
                                        <i className="mdi mdi-arrow-right"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:w-1/4 pr-4 pl-4">
                                    <div className="bg-opacity-success mb-2 lg:mb-0">
                                      <i className="mdi mdi-home"></i>
                                      <p>Transfer to another bank</p>
                                      <div className="text-end">
                                        <i className="mdi mdi-arrow-right"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:w-1/4 pr-4 pl-4">
                                    <div className="bg-opacity-info mb-2 lg:mb-0">
                                      <i className="mdi mdi-account-check"></i>
                                      <p>Transfer to the same bank</p>
                                      <div className="text-end">
                                        <i className="mdi mdi-arrow-right"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:w-1/4 pr-4 pl-4">
                                    <div className="bg-opacity-danger mb-2 lg:mb-0">
                                      <i className="mdi mdi-cellphone"></i>
                                      <p>Transfer using UPI number</p>
                                      <div className="text-end">
                                        <i className="mdi mdi-arrow-right"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/3 pr-4 pl-4 flex flex-col">
                        <div className="flex flex-wrap  flex-grow">
                          <div className="w-full lg:w-1/3 pr-4 pl-4 lg:w-full pr-4 pl-4 grid-margin stretch-card">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                              <div className="flex-auto p-6">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="mb-3 card-title-dash">Revenue Growth</h4>
                                    <p className="text-small modern-color-999">Weekly report</p>
                                  </div>
                                  <div>
                                    <h4 className="revenue-growth-value">$2,000</h4>
                                    <h4 className="revenue-growth-percentage">+12.6%</h4>
                                  </div>
                                </div>
                                <div className="chartjs-wrapper mt-4 chart-height-modern">
                                  <canvas id="modernRevenueGrowth"></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap  flex-grow">
                      <div className="lg:w-1/4 pr-4 pl-4 flex flex-col  grid-margin stretch-card">
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                          <div className="flex-auto p-6">
                            <div>
                              <h4 className="mb-3 card-title-dash">Statistics</h4>
                              <div className="wrapper flex items-center flex-w-100 py-4 border-b">
                                <div className="rounded-icon bg-red-600"><i
                                    className="mdi mdi-arrow-down-bold-circle-outline"></i></div>
                                <div className="wrapper ms-3">
                                  <small className="text-gray-700 mb-0 statistics-text">Send</small>
                                  <p className="mb-1 fw-bold statistics-value">$5678.99</p>
                                </div>
                              </div>
                              <div className="wrapper flex items-center flex-w-100 py-4 border-b">
                                <div className="rounded-icon bg-green-500"><i
                                    className="mdi mdi-arrow-up-bold-circle-outline"></i></div>
                                <div className="wrapper ms-3">
                                  <small className="text-gray-700 mb-0 statistics-text">Received</small>
                                  <p className="mb-1 fw-bold statistics-value">$5678.99</p>
                                </div>
                              </div>
                              <div className="wrapper flex items-center flex-w-100 py-4 pb-2">
                                <div className="rounded-icon bg-blue-600"><i className="mdi mdi-information-outline"></i></div>
                                <div className="wrapper ms-3">
                                  <small className="text-gray-700 mb-0 statistics-text">Pending</small>
                                  <p className="mb-1 fw-bold statistics-value">$5678.99</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/5 pr-4 pl-4 flex flex-col  grid-margin stretch-card">
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                          <div className="flex-auto p-6 pb-5">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="mb-3 card-title-dash">Transaction Status</h4>
                              </div>
                              <div className="relative">
                                <button
                                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline text-gray-100 border-gray-100 hover:bg-gray-100 hover:text-white bg-white hover:bg-gray-200 border  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1 toggle-dark py-3 px-4 leading-tight text-xl mb-0 me-0"
                                  type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">Year</button>
                                <div className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded" aria-labelledby="dropdownMenuButton3">
                                  <h6 className="block py-2 px-6 mb-0 text-sm text-gray-800 whitespace-no-wrap">week Wise</h6>
                                  <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">Year Wise</a>
                                </div>
                              </div>
                            </div>
                            <div className="chartjs-wrapper mt-4 bubble-chart-height">
                              <canvas id="modernBubble"></canvas>
                              <div id="modernBubble-legend" className="text-center mt-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/3 pr-4 pl-4 flex flex-col  grid-margin stretch-card">
                        <div className="flex flex-wrap  flex-grow">
                          <div className="w-full lg:w-1/3 pr-4 pl-4 lg:w-full pr-4 pl-4 stretch-card">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                              <div className="flex-auto p-6  modern-payment">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="mb-3 card-title-dash">Upcoming Payments</h4>
                                    <p className="text-small modern-color-999">Information about payments</p>
                                  </div>
                                </div>
                                <div className="wrapper flex items-center justify-between py-3">
                                  <div className="flex items-center">
                                    <div className="payment-circle-primary"></div>
                                    <div className="wrapper mb-0 ms-3">
                                      <p className="payment-title mb-0">Electricity</p>
                                    </div>
                                  </div>
                                  <div className="payment-amount">
                                    $5678.99
                                  </div>
                                </div>
                                <div className="wrapper flex items-center justify-between py-3">
                                  <div className="flex items-center">
                                    <div className="payment-circle-info"></div>
                                    <div className="wrapper mb-0 ms-3">
                                      <p className="payment-title mb-0">Water</p>
                                    </div>
                                  </div>
                                  <div className="payment-amount">
                                    $2468.21
                                  </div>
                                </div>
                                <div className="wrapper flex items-center justify-between py-3">
                                  <div className="flex items-center">
                                    <div className="payment-circle-danger"></div>
                                    <div className="wrapper mb-0 ms-3">
                                      <p className="payment-title mb-0">House Loan</p>
                                    </div>
                                  </div>
                                  <div className="payment-amount">
                                    $7866.89
                                  </div>
                                </div>
                                <div className="wrapper flex items-center justify-between py-3">
                                  <div className="flex items-center">
                                    <div className="payment-circle-success"></div>
                                    <div className="wrapper mb-0 ms-3">
                                      <p className="payment-title mb-0">Insurance</p>
                                    </div>
                                  </div>
                                  <div className="payment-amount">
                                    $6541.39
                                  </div>
                                </div>
                                <a href="#" className="more-options-payment flex items-center">More Payments <i
                                    className="mdi mdi-chevron-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap ">
                      <div className="lg:w-2/3 pr-4 pl-4 flex flex-col grid-margin stretch-card">
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                          <div className="flex-auto p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="mb-3 card-title-dash">Money Flow</h4>
                              </div>
                              <div className="relative">
                                <button
                                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline text-gray-100 border-gray-100 hover:bg-gray-100 hover:text-white bg-white hover:bg-gray-200 border  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1 toggle-dark py-3 px-4 leading-tight text-xl mb-0 me-0"
                                  type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">Year</button>
                                <div className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded" aria-labelledby="dropdownMenuButton3">
                                  <h6 className="block py-2 px-6 mb-0 text-sm text-gray-800 whitespace-no-wrap">week Wise</h6>
                                  <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">Year Wise</a>
                                </div>
                              </div>
                            </div>
                            <div className="money-flow">
                              <div className="flex items-center">
                                <div className="money-flow-icon-wrapper">
                                  <i className="mdi mdi-pig"></i>
                                </div>
                                <div>
                                  <p className="total-balance">Total balance</p>
                                  <h5 className="total-balance-amount">$52,648.85</h5>
                                </div>
                              </div>
                              <div className="chartjs-wrapper mt-4 modern-money-flow-height">
                                <canvas className="my-auto" id="moneyFlow"></canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/3 pr-4 pl-4 flex flex-col grid-margin stretch-card">
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                          <div className="flex-auto p-6">
                            <h4 className="mb-3 card-title-dash">Recent Transactions</h4>
                            <div className="modern-recent-transaction">
                              <div className="wrapper flex items-center justify-between py-2 border-b">
                                <div className="flex">
                                  <img className="img-sm rounded" src="../../../assets/images/faces/face1.jpg"
                                    alt="profile" />
                                  <div className="wrapper ms-3">
                                    <p>Isabella Becker</p>
                                    <small>23 mins ago</small>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-end">
                                    <i className="mdi mdi-arrow-top-right text-red-600"></i>
                                  </div>
                                  <div className="amount">$2,000</div>
                                </div>
                              </div>
                              <div
                                className="wrapper flex items-center justify-between py-2 pt-3 border-b">
                                <div className="flex">
                                  <img className="img-sm rounded" src="../../../assets/images/faces/face2.jpg"
                                    alt="profile" />
                                  <div className="wrapper ms-3">
                                    <p>Alex Mike</p>
                                    <small>1 day ago</small>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-end">
                                    <i className="mdi mdi-arrow-bottom-left text-green-500"></i>
                                  </div>
                                  <div className="amount">$1,080</div>
                                </div>
                              </div>
                              <div className="wrapper flex items-center justify-between py-2 border-b">
                                <div className="flex">
                                  <img className="img-sm rounded" src="../../../assets/images/faces/face3.jpg"
                                    alt="profile" />
                                  <div className="wrapper ms-3">
                                    <p>Dora Jain</p>
                                    <small>1 day ago</small>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-end">
                                    <i className="mdi mdi-arrow-bottom-left text-green-500"></i>
                                  </div>
                                  <div className="amount">$2,250</div>
                                </div>
                              </div>
                              <div className="wrapper flex items-center justify-between py-2 border-b">
                                <div className="flex">
                                  <img className="img-sm rounded" src="../../../assets/images/faces/face4.jpg"
                                    alt="profile" />
                                  <div className="wrapper ms-3">
                                    <p>Gelly Rich</p>
                                    <small>4 days ago</small>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-end">
                                    <i className="mdi mdi-arrow-top-right text-red-600"></i>
                                  </div>
                                  <div className="amount">$1,200</div>
                                </div>
                              </div>
                              <div className="wrapper flex items-center justify-between py-2">
                                <div className="flex">
                                  <img className="img-sm rounded" src="../../../assets/images/faces/face5.jpg"
                                    alt="profile" />
                                  <div className="wrapper ms-3">
                                    <p>Zain Malik</p>
                                    <small>5 days ago</small>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-end">
                                    <i className="mdi mdi-arrow-bottom-left text-green-500"></i>
                                  </div>
                                  <div className="amount">$2,680</div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap ">
                      <div className="lg:w-1/3 pr-4 pl-4 flex flex-col">
                        <div className="flex flex-wrap  flex-grow">
                          <div className="w-full lg:w-1/3 pr-4 pl-4 lg:w-full pr-4 pl-4 grid-margin stretch-card">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                              <div className="flex-auto p-6">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="mb-3 card-title-dash">Liability Overview</h4>
                                    <p className="text-small modern-color-999">Information about your liabilities</p>
                                  </div>
                                </div>
                                <div className="chartjs-wrapper mt-2">
                                  <div id="modernChartliability-legend" className="mb-3"></div>
                                  <canvas className="my-auto chart-modern-liability-height"
                                    id="modernChartliability"></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/3 pr-4 pl-4 flex flex-col">
                        <div className="flex flex-wrap  flex-grow">
                          <div className="w-full lg:w-1/3 pr-4 pl-4 lg:w-full pr-4 pl-4 grid-margin stretch-card">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-rounded">
                              <div className="flex-auto p-6">
                                <h4 className="mb-3 card-title-dash">All Accounts</h4>

                                <div className="block w-full overflow-auto scrolling-touch  mt-1">
                                  <table className="w-full max-w-full mb-4 bg-transparent table-analytic">
                                    <thead>
                                      <tr>
                                        <th>
                                          <p className="text-999999">Account type</p>
                                        </th>
                                        <th>
                                          <p className="text-999999">Status</p>
                                        </th>
                                        <th>
                                          <p className="text-999999">Currency</p>
                                        </th>
                                        <th>
                                          <p className="text-999999">Total balance</p>
                                        </th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p className="text-black">Current status</p>
                                        </td>
                                        <td>
                                          <p className="text-green-500">Active</p>
                                        </td>
                                        <td>
                                          <p className="text-black">USD</p>
                                        </td>
                                        <td>
                                          <p className="text-black">U$52,648.85</p>
                                        </td>
                                        <td>
                                          <p className="text-black"><i className="mdi mdi-dots-vertical text-999999"></i></p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-black">Current status</p>
                                        </td>
                                        <td>
                                          <p className="text-green-500">Active</p>
                                        </td>
                                        <td>
                                          <p className="text-black">USD</p>
                                        </td>
                                        <td>
                                          <p className="text-black">U$52,648.85</p>
                                        </td>
                                        <td>
                                          <p className="text-black"><i className="mdi mdi-dots-vertical text-999999"></i>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-black">Current status</p>
                                        </td>
                                        <td>
                                          <p className="text-green-500">Active</p>
                                        </td>
                                        <td>
                                          <p className="text-black">USD</p>
                                        </td>
                                        <td>
                                          <p className="text-black">U$52,648.85</p>
                                        </td>
                                        <td>
                                          <p className="text-black"><i className="mdi mdi-dots-vertical text-999999"></i>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-black">Current status</p>
                                        </td>
                                        <td>
                                          <p className="text-green-500">Active</p>
                                        </td>
                                        <td>
                                          <p className="text-black">USD</p>
                                        </td>
                                        <td>
                                          <p className="text-black">U$52,648.85</p>
                                        </td>
                                        <td>
                                          <p className="text-black"><i className="mdi mdi-dots-vertical text-999999"></i>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p className="text-black">Current status</p>
                                        </td>
                                        <td>
                                          <p className="text-green-500">Active</p>
                                        </td>
                                        <td>
                                          <p className="text-black">USD</p>
                                        </td>
                                        <td>
                                          <p className="text-black">U$52,648.85</p>
                                        </td>
                                        <td>
                                          <p className="text-black"><i className="mdi mdi-dots-vertical text-999999"></i>
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // <!-- content-wrapper ends --> */}
          {/* // <!-- partial:../../partials/_footer.html --> */}
          <footer className="footer">
  <div className="sm:flex justify-center sm:justify-between">
    <span className="text-gray-700 text-center sm:text-left block sm:inline-block">Premium <a
        href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash.</span>
    <span className="float-none float-sm-end block mt-1 sm:mt-0 text-center">Copyright © 2023. All rights reserved.</span>
  </div>
</footer>
          {/* // <!-- partial --> */}
        </div>
        {/* // <!-- main-panel ends --> */}
      </div>
      {/* // <!-- page-body-wrapper ends --> */}
    </div>
    </>
  );
};

export default App;
