import React from 'react'

export default function page() {
  return (
        <div>
           <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png" alt />
        <span className="d-none d-lg-block">NiceAdmin</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>{/* End Logo */}
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search" /></button>
      </form>
    </div>{/* End Search Bar */}
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search" />
          </a>
        </li>{/* End Search Icon*/}
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell" />
            <span className="badge bg-primary badge-number">4</span>
          </a>{/* End Notification Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning" />
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-x-circle text-danger" />
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-check-circle text-success" />
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-info-circle text-primary" />
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>{/* End Notification Dropdown Items */}
        </li>{/* End Notification Nav */}
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text" />
            <span className="badge bg-success badge-number">3</span>
          </a>{/* End Messages Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-1.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-2.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-3.jpg" alt className="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>
          </ul>{/* End Messages Dropdown Items */}
        </li>{/* End Messages Nav */}
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
          </a>{/* End Profile Iamge Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person" />
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear" />
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right" />
                <span>Sign Out</span>
              </a>
            </li>
          </ul>{/* End Profile Dropdown Items */}
        </li>{/* End Profile Nav */}
      </ul>
    </nav>{/* End Icons Navigation */}
           </header>{/* End Header */}
           {/* ======= Sidebar ======= */}
          <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <a className="nav-link collapsed" href="index.html">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </a>
    </li>{/* End Dashboard Nav */}
    <li className="nav-item">
      <a className="nav-link " data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-menu-button-wide" /><span>Components</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="components-nav" className="nav-content collapse show" data-bs-parent="#sidebar-nav">
        <li>
          <a href="components-alerts.html" className="active">
            <i className="bi bi-circle" /><span>Alerts</span>
          </a>
        </li>
        <li>
          <a href="components-accordion.html">
            <i className="bi bi-circle" /><span>Accordion</span>
          </a>
        </li>
        <li>
          <a href="components-badges.html">
            <i className="bi bi-circle" /><span>Badges</span>
          </a>
        </li>
        <li>
          <a href="components-breadcrumbs.html">
            <i className="bi bi-circle" /><span>Breadcrumbs</span>
          </a>
        </li>
        <li>
          <a href="components-buttons.html">
            <i className="bi bi-circle" /><span>Buttons</span>
          </a>
        </li>
        <li>
          <a href="components-cards.html">
            <i className="bi bi-circle" /><span>Cards</span>
          </a>
        </li>
        <li>
          <a href="components-carousel.html">
            <i className="bi bi-circle" /><span>Carousel</span>
          </a>
        </li>
        <li>
          <a href="components-list-group.html">
            <i className="bi bi-circle" /><span>List group</span>
          </a>
        </li>
        <li>
          <a href="components-modal.html">
            <i className="bi bi-circle" /><span>Modal</span>
          </a>
        </li>
        <li>
          <a href="components-tabs.html">
            <i className="bi bi-circle" /><span>Tabs</span>
          </a>
        </li>
        <li>
          <a href="components-pagination.html">
            <i className="bi bi-circle" /><span>Pagination</span>
          </a>
        </li>
        <li>
          <a href="components-progress.html">
            <i className="bi bi-circle" /><span>Progress</span>
          </a>
        </li>
        <li>
          <a href="components-spinners.html">
            <i className="bi bi-circle" /><span>Spinners</span>
          </a>
        </li>
        <li>
          <a href="components-tooltips.html">
            <i className="bi bi-circle" /><span>Tooltips</span>
          </a>
        </li>
      </ul>
    </li>{/* End Components Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-journal-text" /><span>Forms</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="forms-elements.html">
            <i className="bi bi-circle" /><span>Form Elements</span>
          </a>
        </li>
        <li>
          <a href="forms-layouts.html">
            <i className="bi bi-circle" /><span>Form Layouts</span>
          </a>
        </li>
        <li>
          <a href="forms-editors.html">
            <i className="bi bi-circle" /><span>Form Editors</span>
          </a>
        </li>
        <li>
          <a href="forms-validation.html">
            <i className="bi bi-circle" /><span>Form Validation</span>
          </a>
        </li>
      </ul>
    </li>{/* End Forms Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="tables-general.html">
            <i className="bi bi-circle" /><span>General Tables</span>
          </a>
        </li>
        <li>
          <a href="tables-data.html">
            <i className="bi bi-circle" /><span>Data Tables</span>
          </a>
        </li>
      </ul>
    </li>{/* End Tables Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="charts-chartjs.html">
            <i className="bi bi-circle" /><span>Chart.js</span>
          </a>
        </li>
        <li>
          <a href="charts-apexcharts.html">
            <i className="bi bi-circle" /><span>ApexCharts</span>
          </a>
        </li>
        <li>
          <a href="charts-echarts.html">
            <i className="bi bi-circle" /><span>ECharts</span>
          </a>
        </li>
      </ul>
    </li>{/* End Charts Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="icons-bootstrap.html">
            <i className="bi bi-circle" /><span>Bootstrap Icons</span>
          </a>
        </li>
        <li>
          <a href="icons-remix.html">
            <i className="bi bi-circle" /><span>Remix Icons</span>
          </a>
        </li>
        <li>
          <a href="icons-boxicons.html">
            <i className="bi bi-circle" /><span>Boxicons</span>
          </a>
        </li>
      </ul>
    </li>{/* End Icons Nav */}
    <li className="nav-heading">Pages</li>
    <li className="nav-item">
      <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-person" />
        <span>Profile</span>
      </a>
    </li>{/* End Profile Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-faq.html">
        <i className="bi bi-question-circle" />
        <span>F.A.Q</span>
      </a>
    </li>{/* End F.A.Q Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-contact.html">
        <i className="bi bi-envelope" />
        <span>Contact</span>
      </a>
    </li>{/* End Contact Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-register.html">
        <i className="bi bi-card-list" />
        <span>Register</span>
      </a>
    </li>{/* End Register Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-login.html">
        <i className="bi bi-box-arrow-in-right" />
        <span>Login</span>
      </a>
    </li>{/* End Login Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-error-404.html">
        <i className="bi bi-dash-circle" />
        <span>Error 404</span>
      </a>
    </li>{/* End Error 404 Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-blank.html">
        <i className="bi bi-file-earmark" />
        <span>Blank</span>
      </a>
    </li>{/* End Blank Page Nav */}
  </ul>
          </aside>

          <main id="main" className="main">
  <div className="pagetitle">
    <h1>Alerts</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item">Components</li>
        <li className="breadcrumb-item active">Alerts</li>
      </ol>
    </nav>
  </div>{/* End Page Title */}
  <section className="section">
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Default</h5>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
              A simple primary alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-secondary alert-dismissible fade show" role="alert">
              A simple secondary alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              A simple success alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              A simple danger alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              A simple warning alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              A simple info alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-light border-light alert-dismissible fade show" role="alert">
              A simple light alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-dark alert-dismissible fade show" role="alert">
              A simple dark alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">With Icon</h5>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
              <i className="bi bi-star me-1" />
              A simple primary alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-secondary alert-dismissible fade show" role="alert">
              <i className="bi bi-collection me-1" />
              A simple secondary alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <i className="bi bi-check-circle me-1" />
              A simple success alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <i className="bi bi-exclamation-octagon me-1" />
              A simple danger alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <i className="bi bi-exclamation-triangle me-1" />
              A simple warning alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <i className="bi bi-info-circle me-1" />
              A simple info alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-dark alert-dismissible fade show" role="alert">
              <i className="bi bi-folder me-1" />
              A simple dark alert with icon—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Outlined</h5>
            <div className="alert border-primary alert-dismissible fade show" role="alert">
              A simple primary outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-secondary alert-dismissible fade show" role="alert">
              A simple secondary outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-success alert-dismissible fade show" role="alert">
              A simple success outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-danger alert-dismissible fade show" role="alert">
              A simple danger outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-warning alert-dismissible fade show" role="alert">
              A simple warning outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-info alert-dismissible fade show" role="alert">
              A simple info outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-light alert-dismissible fade show" role="alert">
              A simple light outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert border-dark alert-dismissible fade show" role="alert">
              A simple dark outlined alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Default Solid Color</h5>
            <div className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
              A simple primary alert with solid color—check it out!
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-secondary bg-secondary text-light border-0 alert-dismissible fade show" role="alert">
              A simple secondary alert with solid color—check it out!
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-success bg-success text-light border-0 alert-dismissible fade show" role="alert">
              A simple success alert with solid color—check it out!
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
              A simple danger alert with solid color—check it out!
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-warning bg-warning border-0 alert-dismissible fade show" role="alert">
              A simple warning alert with solid color—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-info bg-info border-0 alert-dismissible fade show" role="alert">
              A simple info alert with solid color—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-light bg-light border-0 alert-dismissible fade show" role="alert">
              A simple light alert with solid color—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-dark bg-dark text-light border-0 alert-dismissible fade show" role="alert">
              A simple dark alert with solid color—check it out!
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">With Heading &amp; Separator</h5>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Primary Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-secondary alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Secondary Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Success Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Danger Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-warning  alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Warning Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-info  alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Info Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-light border-light alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Lignt Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
            <div className="alert alert-dark  alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Dark Heading</h4>
              <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
              <hr />
              <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
          </main>
               {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="copyright">
            © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}

        </div>


  )
}