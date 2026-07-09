export default function Navbar({ onMenuToggle }) {
  return (
    <nav>
      <div className="leftnav">
        DENTO <br />
        POINT
      </div>
      <div className="rightnav">
        <div id="rightnav1">Dental Emergency</div>
        <div id="rightnav2" onClick={onMenuToggle}>
          <i className="ri-menu-4-line"></i>
        </div>
      </div>
    </nav>
  )
}
